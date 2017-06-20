import { DemolPage } from './app.po';

describe('demol App', () => {
  let page: DemolPage;

  beforeEach(() => {
    page = new DemolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
