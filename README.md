## Express, pug, sass, vue.js and Webpack
 Global dependencies: "node-dev"  
 Recommended global installs: webpack, node-sass, eslint

### Dev mode server
```
    "npm run dev" start dev env with sourcemaps activated in sass and js
    open in browser:  localhost:4000
    autoreload enabled (must have livereload plugin for browser)
    https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    https://addons.mozilla.org/en-US/firefox/addon/remotelivereload/
```
### Production server
```
    first: run "npm run build" on Dev env for repack all sass and js sources to compressed format
    second: run "npm start" for serve on prod env
```
test2
