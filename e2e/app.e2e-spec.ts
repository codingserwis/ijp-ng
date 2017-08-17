import { IjpNgAppPage } from './app.po';

describe('ijp-ng-app App', () => {
  let page: IjpNgAppPage;

  beforeEach(() => {
    page = new IjpNgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
