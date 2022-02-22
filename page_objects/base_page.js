// here we initialize webdriver and other common elements
import webdriver from 'selenium-webdriver';
import { By } from 'selenium-webdriver';
// set up our driver

class BasePage {
  constructor(browser) {
    // this allow us to share our driver
    if (browser === 'chrome') {
      var driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    }
    if (browser === 'firefox') {
      var driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox())
        .build();
    }
    this.driver = driver;
  }

  findElementById(element) {
    this.driver.findElement(element);
  }

  typeTextOnElement(element, text) {
    this.driver.findElement(By.css(element)).sendKeys(text);
  }

  goToPage(url) {
    this.driver.get(url);
  }

  closeSession() {
    this.driver.quit();
  }
}

// finally we can export our class
export default BasePage;
