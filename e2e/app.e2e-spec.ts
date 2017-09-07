import { NgarchitectPage } from './app.po';

describe('ngarchitect App', () => {
  let page: NgarchitectPage;

  beforeEach(() => {
    page = new NgarchitectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to my!');
  });
});
