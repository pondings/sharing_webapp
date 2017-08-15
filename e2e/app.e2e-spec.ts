import { SharingWebappPage } from './app.po';

describe('sharing-webapp App', () => {
  let page: SharingWebappPage;

  beforeEach(() => {
    page = new SharingWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
