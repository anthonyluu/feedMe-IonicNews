# feedMe-IonicNews
RSS news feeder

News Reader written in Ionic as a proof of concept. An exercise in writing Ionic applications.

__Authors__: _Anthony Luu and Karanbir Randhawa_ (anthonyluu, karanbirrandhawa).

#Screenshots
![Side Menu](screenshots/Menu.png)
![Manage Feeds](screenshots/ManageFeeds.png)
![Feed](screenshots/Feed.png)
![Article](screenshots/News.png)

# Setup for development
You'll need to have cordova and ionic setup first
```
sudo npm install -g cordova
sudo npm install -g ionic
```


## Setup this repo
After cloning, 

```
npm install && bower install
ionic serve
```

## For adding a new platform
```
ionic platform add ios
ionic platform add android
```

## Build Prerequisites
For android, you must have the android sdk installed.
For ios, you'll need to have ios-sim installed. To do so,

```
npm install -g ios-sim
```

## To build and emulate
```
ionic build android
ionic emulate android
```

# TODO/Issues
### Security
Need to configure index.html to contain 
```
<meta http-equiv="Content-Security-Policy" ...>
```

### Search
Need to write angular filter for the search functionality in AllFeeds page

### Screenshots
Fix screenshots to not be blurry
