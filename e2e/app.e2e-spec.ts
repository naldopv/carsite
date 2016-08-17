import { CarsitePage } from './app.po';

describe('carsite App', function() {
  let page: CarsitePage;

  beforeEach(() => {
    page = new CarsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
