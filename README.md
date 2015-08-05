# feedMe-IonicNews
RSS news feeder

News Reader written in Ionic as a proof of concept. An exercise in writing Ionic applications.

__Authors__: _Anthony Luu and Karanbir Randhawa_ (anthonyluu, karanbirrandhawa).

#Screenshots

# Setup for development
You'll need to have cordova and ionic setup first
1. sudo npm install -g cordova
2. sudo npm install -g ionic

## For adding a new platform
1. ionic platform add ios
2. ionic platform add android

## Build Prerequisites
For android, you must have the android sdk installed.
For ios, you'll need to have ios-sim installed. To do so,

1. npm install -g ios-sim

## To build and emulate
1. ionic build android
2. ionic emulate android

# TODO/Issues
### Security
Need to configure index.html to contain 
```
<meta http-equiv="Content-Security-Policy" ...>
```

### Search
Need to write angular filter for the search functionality in AllFeeds page
