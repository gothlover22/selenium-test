to install web driver io for testing :
npm install --save-dev chromedriver @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter
npm install --save-dev chromedriver
npm wdio config

During wdio config, choose:
Test runner: local
Framework: mocha
Reporter: spec
Services: chromedriver
Base URL: http://localhost:5500 (or your actual app)


to run the server : 
npx http-server . -p 5500

to run tests : 
npx mocha src/math.test.js