# Website Gallery Filter

The default SquareSpace gallery doesn't have the ability to filter by facets, such as Company Name or Location. This repo adds those features.

## Usage

Designed to copy-paste into the SquareSpace UI. Find the page where the gallery lives, and then click on the Gear -> Advanced. Copy and paste the appropriate JavaScript into a ```<script></script>``` section in the ```<head/>```. Do the same thing for Styles in the ```<style/>``` section.

## Gallery Data API

To look at the data, login to the SquareSpace console, then on the Pages section, find the "Galleries". Click on the gallery desired, looking for the url associated with the gallery. The main portfolio is called "protfolio" (sic), and can be viewed by adding


```
?format=json-pretty
```

to the url.

For instance, if you have the SquareSpace server running locally, this would be:


```
% curl http://localhost:9000/protfolio/?format=json-pretty > all.json
```

Once you have this data, you can filter it with the filter command. (You may need to "npm install" first.)

```
% node ./bin/filter > out.json
```

## Galleries

* Primary Portfolio (/protfolio)
* Seed Portfolio
* Notable Exits
