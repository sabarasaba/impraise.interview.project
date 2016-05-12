Impraise interview project
=====================

Based on Dan's https://github.com/gaearon/react-hot-boilerplate

### Usage
I've tried it with node 5 and works fine, pretty sure it should work with older versions as well.

```
$ npm install
$ npm start
$ open http://localhost:3000
```

To run tests

```
$ npm test
```


### Things that could be improved

* Theres no visual feedback when a url is copied to the clipboard, ideally you would have some sort of `popover` or `notification` somewhere telling you that it got copied.
* Theres is no loading state when a url is submitted and the request is running.
* There is no visual feedback if an error occurs when hitting the API (the app its actually dispatching an event that its being catched by the reducer and logs it to the console though).
* Stats of each link are not updated in realtime, if the API supported WS it could've been something I could've done as well `long polling` could've been a possible solution too..
* Hardcoded urls and project name in a few places, ideally it would be in just one place.
* No full test coverage.
* All the components are hanging in the App.js file, ideally it would be inside a view that the App invokes through a router or something.

### Dependencies

* React
* SASS
* Redux
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
