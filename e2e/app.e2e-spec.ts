import { LayoutnServicesPage } from './app.po';

describe('layoutn-services App', () => {
  let page: LayoutnServicesPage;

  beforeEach(() => {
    page = new LayoutnServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
