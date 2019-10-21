module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "../../../node_modules/angular/angular.min.js",
      // "../../../node_modules/popper.js/dist/popper.min.js",
      // "../../../node_modules/popper.js/dist/esm/popper.min.js",
      // "../../../node_modules/popper.js/dist/umd/popper.min.js",
      // "../../../node_modules/tooltip.js/dist/tooltip.min.js",
      "../../../node_modules/jquery/dist/jquery.slim.min.js",
      "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      "../../../node_modules/bootstrap/dist/js/bootstrap.js",
      "../../../node_modules/angular-route/angular-route.min.js",
      "../../../node_modules/@uirouter/angularjs/release/angular-ui-router.js",
      "../../../node_modules/angular-resource/angular-resource.min.js",
      "../../../node_modules/angular-cookies/angular-cookies.min.js",
      "../../../node_modules/angular-mocks/angular-mocks.js",

      "../../../app/userMenu/userMenu.module.js",
      "../../../app/userMenu/userMenu.controller.js",
      "../../../app/userMenu/userMenu.directive.js",

      "../../../app/applicationsMenu/applicationsMenu.module.js",
      "../../../app/applicationsMenu/applicationsMenu.controller.js",
      "../../../app/applicationsMenu/applicationsMenu.directive.js",

      "../../../app/dashboard/dashboard.module.js",
      "../../../app/dashboard/dashboard.controller.js",
      "../../../app/dashboard/dashboard.directive.js",

      "../../../app.js",
      "../../../app.config.js",
      "../../../app/commons/services/REST.services.js",
      "../../../app/commons/services/session.service.js",
      "../../../app/commons/modal/modal.directive.js",
      "../../../app/tests/unit/dashboard-spec.js"
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress'],
    // reporters: ['spec'],
    // reporters: ['progress', 'html'],
    reporters: ['spec', 'html'],

    htmlReporter: {
      outputFile: 'units.html',

      // Optional 
      pageTitle: 'Unit Tests',
      subPageTitle: 'Dashboard',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },


    // web server port
    port: 9894,
    hostname: 'localhost',
    listenAddress: 'localhost',


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}