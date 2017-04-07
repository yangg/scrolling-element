
function createBrowser(browserName, version, platform) {
  return {
    base: 'SauceLabs',
    browserName,
    version,
    platform
  }
}
module.exports = {
  SL_Chrome: createBrowser('chrome', 43),
  SL_Firefox: createBrowser('firefox', 47),
  SL_IE: createBrowser('internet explorer'),
  SL_IE_Old: createBrowser('internet explorer', 10),
  SL_Safari: createBrowser('safari', 8, 'Mac 10.10'),
  // mobile devices
  SL_iPhone_8: createBrowser('iphone', '8.4'),
  SL_Android_6: createBrowser('android', '6'),
  SL_Android_5: createBrowser('android', '5.1'),
  SL_Android_4: createBrowser('android', '4.4'),
}
