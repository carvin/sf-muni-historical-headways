# Historical SF Muni Wait Times
An interactive exploration of how the headways of San Francisco Muni routes has changed throughout the decades.

Try it at: [https://sfstreetcars.co/headways](https://sfstreetcars.co/headways)

![Screenshot of the app](https://res.cloudinary.com/carvin/image/upload/v1551307164/headways-screenshot.png)

This repo is pretty light, and takes no setup to run besides opening index.html. It runs on [Vue.js!](https://vuejs.org/)

## Data format
The data is included in data/headways.js in this format:

```javascript
let Data = {
  'Route Name': [
    {
      "Year": 1932
      "Time of Day Min": 5  //minutes
      "Time of Day Max": 10 //minutes. Repeat previous value if the headway was not a range.
    }
  ]
}
```

## Selecting which years to show
The layout of the page is set up to display the headways for 4 different years at once. To change which years are displayed, update this line in app.js:

```javascript
data: {
  years: [1932, 1949, 1981, 2019, 1973],
...
```

The app will use the first four values in the array as the years to show. If data for any of those years is not included for the selected route, the app will use the next years in the array as fallbacks.

## Sources
### 1932
_Candrian's Double Indexed A-Z Street Guide of San Francisco_
⋅⋅⋅H.A. Candrian

[View at SF Public Library](https://sfpl.bibliocommons.com/item/show/3498487093) · [View scans of relevant pages](https://drive.google.com/open?id=1lC6zKHmiahd0zSj700HzPfTnbpd4PaKp)

### 1949
_Report on Economic and Organizational Features of the Municipal Railway of San Francisco_

Arthur C Jenkins, Consulting Engineer for San Francisco

[View at SF Public Library](https://sfpl.bibliocommons.com/item/show/1482558093) · [View scans of relevant pages](https://drive.google.com/open?id=1psUeZepF2PPsKBsPNU1do9SE_L9p2Hk2)


### 1973
_Frequency of Service On Regular Routes_

San Francisco Municipal Railway

[View a scan](https://drive.google.com/open?id=15-el8N8Q0PP2pSGBer0MN1Fx5THnBrfJ)


### 1981
_San Francisco Bay Area Regional Transit Guide_

Metropolitan Transportation Commission

[View scans of relevant pages](https://drive.google.com/open?id=1shM6Z9MjItbmCbD_Ihc-n7iUrZWzEemV)


### 1993
_Muni Time Tables: All Lines (1984 – 2002)_

San Francisco Municipal Railway, archive.org

[View on archive.org](https://archive.org/details/munitimetablesal1984sanf)


### 2003
_Frequency Guide_

San Francisco Municipal Railway, archive.org

[View on archive.org](https://web.archive.org/web/20030608121344/http://www.sfmuni.com:80/routes/freqindx.htm)


### 2008
_Frequency Guide_

San Francisco Municipal Railway, archive.org

[View on archive.org](https://web.archive.org/web/20081012234649/http://www.sfmta.com/cms/mroutes/WeekdayFrequencyGuideRail1-30.htm)


### Today
_Muni Routes & Stops_

SFMTA

[View on sfmta.com](https://www.sfmta.com/getting-around/muni/routes-stops)
