import { TwoCmptsPage } from './app.po';

describe('two-cmpts App', () => {
  let page: TwoCmptsPage;

  beforeEach(() => {
    page = new TwoCmptsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
