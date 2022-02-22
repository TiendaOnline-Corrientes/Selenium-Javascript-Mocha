import BasePage from './base_page.js';
import { By } from 'selenium-webdriver';

class HomePage extends BasePage {
  constructor(browser) {
    super(browser);
  }
  enterTextOnSearchBar(text) {
    this.typeTextOnElement('input[name=q]', text);
  }
}

export default HomePage;
