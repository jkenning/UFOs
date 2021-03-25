# UFOs

Building a dynamic webpage for UFO sightings using Javascript and bootstrap

## Overview

The project involves building a table to hold and display sightings of UFO phenomena that is pulled from a Javascript data file. Filters created to search several criteria allow users to refine their searched for data on multiple levels. The table and filter search box is inserted and displayed in a html page - with html, bootstrap, and CSS used to build and style the webpage. 

### Purpose

Ultimately, the end result is to produce a visually-appealing format to clearly present UFO sightings data that allows users to interact with the visualization and find specific entries in the data table based on a range of tailored criteria, including by date and location. 

## Resources

Software: Visual Studio Code 1.54.3

UFO data: https://github.com/jkenning/UFOs/blob/main/static/js/data.js

App: https://github.com/jkenning/UFOs/blob/main/static/js/app.js

Webpage file: https://github.com/jkenning/UFOs/blob/main/index.html

CSS style: https://github.com/jkenning/UFOs/blob/main/static/css/style.css

## Results

Upon entering the webpage, the user will encounter a navigation bar containing the title of the page. As there is only one page on the site, the navbar is set up to link to back to the webpage and can therefore act as a reset after a filter has been applied to the table. 

Below the navbar is a jumbotron set up to display an image and header for the page. To the right, beneath the jumbotron header is a brief article to set the scene - the article title and sub-title are positioned to the left of the main body of text. 


![](https://github.com/jkenning/UFOs/blob/main/Images/webpage_title_article.png)

Figure 1. Title, image banner, and article for the webpage

Scrolling further down the page reveals the Filter Search box and data table of UFO sighting entries. The Javascript data entries pulled into the html page include criteria for Date, City, State, Country, Shape (of observed UFO), Duration, and Comments, of which the former five are searchable via the filter box to the left. Any of the five searchable date and location criteria can be entered in order to update and only display entries with matching text for those specific criteria in the table. Users can type in a date or location into the relevant filter box and press enter in order to search. More than one filter criteria can be applied to further inspect the data. 

![](https://github.com/jkenning/UFOs/blob/main/Images/webpage_filter_table.png)

Figure 2. Filter search boxes and corresponding data table


![](https://github.com/jkenning/UFOs/blob/main/Images/webpage_filter_demo.png)

Figure 3. Filter search box with example entry and data table filtered to only display a specific entry; in this case all triangle shape UFOs observed in California. 

## Summary

One limitation is that there are not filters to search for Duration or for keywords in the Comments. While there are multiple levels of specificity for location e.g., country, state, or city, it is currently only possible to search by specific date. It would be useful to be able to search and group the sightings by month and/or year together, even by day of the week.This could also apply for if you wanted to search for Shapes and inclue more than one specific type of entry. This links into another limitation in that the search terms have to match the data entry exactly and cannot be incomplete or mispelled. Entering only part of a city name or getting the name format wrong may mean you do not return the desired data. This would also make the Comments unsearchable for keywords without changing the functionality (if this feature were to be added). 

**Recommendations:**

* Add additional search boxes for remaining criteria (currently non-searchable)
* Convert date format to allow for searches by day, month, year
* Allow single word or partial text matches (e.g. Comments)
* Re-design filters to allow more than one unique entry to be displayed per criteria
* Set up system to periodically update and pull new data entries from the data source
* Add convenient search and reset/clear buttons near the search boxes

