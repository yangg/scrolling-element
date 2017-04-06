module.exports = function(config) {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.')
    process.exit(1)
  }
  const sauseBrowsers = require('./sauce.browsers')

  config.set({
    sauceLabs: {
      testName: 'document.scrollingElement Tests'
    },
    customLaunchers: sauseBrowsers,
    browsers: Object.keys(sauseBrowsers),
    captureTimeout: 120000,
    reporters: ['dots', 'saucelabs']
  })
}