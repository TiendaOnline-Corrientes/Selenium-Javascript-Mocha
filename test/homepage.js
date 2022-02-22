import HomePage from '../page_objects/homepage.js';
describe('test cases for home page', () => {
  //variables and constants
  const homepage = new HomePage('firefox');
  const baseURL = 'https://google.com';

  beforeEach(() => {
    //enter actions to perform before test
  });

  afterEach(() => {
    //enter actions to perform after test
    //   homepage.closeSession();
  });

  it('POM test', () => {
    homepage.goToPage(baseURL);
    homepage.enterTextOnSearchBar('hello');
  });
});
