// cached portfolios, updated on page load
var initialPortfolios = {
  primary: {
    tags: {},
    categories: {},
    locations: {},
    industries: {},
    investors: {},
    companies: {}
    seed: {
      tags: {},
      categories: {},
      locations: {},
      industries: {},
      investors: {},
      companies: {}
    },
  },
};
// initialPortfolios.primary = {};
// initialPortfolios.seed = {};

$(document).ready(function() {

  var investorData = [];
  var categoryData = [];
  var industryData = [];
  var locationData = [];
  var companyData = [];
  var searchable = {};
  var portfolios = {};

  // add select2 filter box
  $('h2:contains("PRIMARY PORTFOLIO")').before('<div id="portfolio-filter-wrapper"><label for="portfolio-filter"><select multiple="multiple" style="width:100%" class="portfolio-filter" id="portfolio-filter"/></label></div>');

  var select2Options = {
    placeholder: "Filter",
    createSearchChoicePosition: "bottom",
    tokenSeparators: [","],
    formatSelectionTooBig: function() {
      return '';
    },
    maximumSelectionSize: 1,
    allowClear: true,
    selectOnClose: false
  };

  $("#portfolio-filter").select2(select2Options);

  processPortfolio('primary', initialPortfolios.primary);
  processPortfolio('seed', initialPortfolios.seed);

  var portfolioFilterSelect = $('#portfolio-filter');
  portfolioFilterSelect.select2(select2Options);

  var portfolioResultsPrimary = $('h2:contains("PRIMARY PORTFOLIO")').parent().parent().parent().children().eq(2);
  var portfolioFilterInitalPrimary = $(portfolioResultsPrimary).clone();

  var portfolioResultsSeed = $('h2:contains("SEED PORTFOLIO")').parent().parent().parent().children().eq(5);
  var portfolioFilterInitalSeed = $(portfolioResultsSeed).clone();

  // refresh our cache the first time
  var ajaxOptions = {
    cache: false,
    dataType: 'json',
    ifModified: false,
    timeout: 15000,
    success: function(results, statusCode) {
      var out = dataByFacets(results);
      if (out) {
        processPortfolio(this._rtype, out);
      } else {
        console.log('error retrieving facets..skipping');
      }
    },
    error: function(xhr, statusCode) {
      console.log('er', statusCode);
    }
  };

  // reset
  investorData = [];
  categoryData = [];
  industryData = [];
  locationData = [];
  companyData = [];
  searchable = {};

  var primaryApi = '/portfolio/?format=json-pretty';
  var seedApi = '/seed-portolio?format=json-pretty';
  ajaxOptions.url = primaryApi;
  ajaxOptions._rtype = 'primary';
  $.ajax(ajaxOptions).then(function() {
    ajaxOptions.url = seedApi;
    ajaxOptions._rtype = 'seed';

    $.ajax(ajaxOptions).then(function() {
      select2Options.data = [{
        text: 'Category',
        children: categoryData
      }, {
        text: 'Investor',
        children: investorData
      }, {
        text: 'Locations',
        children: locationData
      }];

      var portfolioFilterSelect = $('#portfolio-filter');
      portfolioFilterSelect.select2(select2Options);
    });
  });

  portfolioFilterSelect.on('select2:selecting', function(e) {
    $(portfolioFilterSelect).select2('data').forEach(function(value, count) {
      if (count === 0) {
        $(portfolioFilterSelect).select2().val(null).trigger('change');
      }
    });
  });

  portfolioFilterSelect.on('change', function(e) {

    var selected = $('#portfolio-filter').val() || [];
    //  console.log('selected', selected);
    if (!selected.length) {
      $(portfolioResultsPrimary).html($(portfolioFilterInitalPrimary).html());
      $.each($(portfolioResultsPrimary).find('a'), function(index, obj) {
        var img = $(obj).find('img');
        var dataSrc = $(img).data('src');
        $(obj).find('img').attr('src', dataSrc).css('opacity', 1);
      });

      $(portfolioResultsSeed).html($(portfolioFilterInitalSeed).html());
      $.each($(portfolioResultsSeed).find('a'), function(index, obj) {
        var img = $(obj).find('img');
        var dataSrc = $(img).data('src');
        $(obj).find('img').attr('src', dataSrc).css('opacity', 1);
      });

      $('h2:contains("NOTABLE EXITS")').show();
      $('h2:contains("NOTABLE EXITS")').parent().parent().parent().children().eq(7).show();

      return;
    }
    var hrefs = {};
    var found = {};
    selected.forEach(function(id) {
      var reconstitutedId = id.split('_').join(' ');

      var parts = reconstitutedId.split(':');
      if (!parts || !parts.length) {
        return;
      }
      var theseHrefsPrimary = portfolios.primary[parts[0]][parts[1]] || [];
      theseHrefsPrimary.forEach(function(href) {
        hrefs[href] = true;
        found.primary = (found.primary || 0) + 1;
      });
      var theseHrefsSeed = portfolios.seed[parts[0]][parts[1]] || [];
      theseHrefsSeed.forEach(function(href) {
        found.seed = (found.seed || 0) + 1;
        hrefs[href] = true;
      });
    });

    if (!found.primary) {
      $('h2:contains("PRIMARY PORTFOLIO")').hide();
    } else {
      $('h2:contains("PRIMARY PORTFOLIO")').show();
    }

    if (!found.seed) {
      $('h2:contains("SEED PORTFOLIO")').hide();
    } else {
      $('h2:contains("SEED PORTFOLIO")').show();
    }

    if (!found.notable) {
      $('h2:contains("NOTABLE EXITS")').hide();
      $('h2:contains("NOTABLE EXITS")').parent().parent().parent().children().eq(7).hide();

    } else {
      $('h2:contains("NOTABLE EXITS")').show();
      $('h2:contains("NOTABLE EXITS")').parent().parent().parent().children().eq(7).show();
    }

    $(portfolioResultsPrimary).html($(portfolioFilterInitalPrimary).html());
    $.each($(portfolioResultsPrimary).find('a'), function(index, obj) {
      var thisHref = $(obj).attr('href');
      if (!(hrefs[thisHref])) {
        //      console.log('removing', thisHref);
        $(obj).parent().parent().detach();
      } else {
        //    console.log('ok', thisHref);
        var img = $(obj).find('img');
        var dataSrc = $(img).data('src');
        $(obj).find('img').attr('src', dataSrc).css('opacity', 1);
      }
    });

    $(portfolioResultsSeed).html($(portfolioFilterInitalSeed).html());
    $.each($(portfolioResultsSeed).find('a'), function(index, obj) {
      var thisHref = $(obj).attr('href');
      if (!(hrefs[thisHref])) {
        $(obj).parent().parent().detach();
      } else {
        var img = $(obj).find('img');
        var dataSrc = $(img).data('src');
        $(obj).find('img').attr('src', dataSrc).css('opacity', 1);
      }
    });
  });

  function processPortfolio(portfolioType, portfolioData) {

    portfolios[portfolioType] = portfolioData;


    Object.keys(portfolios).forEach(function(portfolioType) {
      var portfolio = portfolios[portfolioType] || {};
      if (portfolio && portfolio.investors) {

        Object.keys(portfolio.investors).forEach(function(investor) {
          var escaped = investor.split(' ').join('_');
          var id = 'investors:' + escaped;

          if (searchable[id]) {
            return;
          } else {
            searchable[id] = true;
          }

          investorData.push({
            id: id,
            text: investor
          });
        });

        investorData = investorData.sort(function(a, b) {
          return a.text.localeCompare(b.text);
        });
      }

      if (portfolio && portfolio.categories) {
        Object.keys(portfolio.categories).forEach(function(category) {
          var escaped = category.split(' ').join('_');
          var id = 'categories:' + escaped;
          if (searchable[id]) {
            return;
          } else {
            searchable[id] = true;
          }

          categoryData.push({
            id: id,
            text: category
          });
        });

        categoryData = categoryData.sort(function(a, b) {
          return a.text.localeCompare(b.text);
        });

      }
      if (portfolio && portfolio.industries) {

        Object.keys(portfolio.industries).forEach(function(industry) {
          var escaped = industry.split(' ').join('_');
          var id = 'industries:' + escaped;
          if (searchable[id]) {
            return;
          } else {
            searchable[id] = true;
          }

          industryData.push({
            id: id,
            text: industry
          });
        });

        industryData = industryData.sort(function(a, b) {
          return a.text.localeCompare(b.text);
        });

      }
      if (portfolio && portfolio.locations) {

        Object.keys(portfolio.locations).forEach(function(location) {
          var escaped = location.split(' ').join('_');
          var id = 'locations:' + escaped;

          if (searchable[id]) {
            return;
          } else {
            searchable[id] = true;
          }

          locationData.push({
            id: id,
            text: location
          });
        });

        locationData = locationData.sort(function(a, b) {
          return a.text.localeCompare(b.text);
        });

      }
    });

  }

  function dataByFacets(data) {

    var tags = {};
    var categories = {};
    var locations = {};
    var industries = {};
    var investors = {};
    var companies = {};
    if (!data || !data.items) {
      console.log('missing data?', data);
      return;
    }
    data.items.forEach(function(item) {
      if (!item.clickthroughUrl) {
        //      console.log('skipping ', item.title);
        return;
      }
      if (item.title) {
        companies[item.title] = companies[item.title] || [];
        companies[item.title].push(item.clickthroughUrl);
      }

      if (item && item.tags) {

        item.tags.forEach(function(tag) {
          tags[tag] = tags[tag] || [];
          tags[tag].push(item.clickthroughUrl);
          // tag : "industry: logistics" or "location: New York"
          var parts = tag.split(': ');
          if (parts[0] === 'location') {
            locations[parts[1]] = locations[parts[1]] || [];
            locations[parts[1]].push(item.clickthroughUrl);
          }
          if (parts[0] === 'industry') {
            industries[parts[1]] = industries[parts[1]] || [];
            industries[parts[1]].push(item.clickthroughUrl);
          }
          if (parts[0] === 'investor') {
            investors[parts[1]] = investors[parts[1]] || [];
            investors[parts[1]].push(item.clickthroughUrl);
          }
        });
      }

      if (item && item.categories) {
        item.categories.forEach(function(category) {
          if (!item.clickthroughUrl) {
            console.log('skipping ', item.title);
            return;
          }
          categories[category] = categories[category] || [];
          categories[category].push(item.clickthroughUrl);
        });
      }
    });

    return {
      tags: tags,
      categories: categories,
      locations: locations,
      industries: industries,
      investors: investors,
      companies: companies
    }; // assume no es6
  }

});
