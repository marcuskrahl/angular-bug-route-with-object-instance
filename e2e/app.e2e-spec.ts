import { AngularRoutingBugPage } from './app.po';

describe('angular-routing-bug App', function() {
  let page: AngularRoutingBugPage;

  beforeEach(() => {
    page = new AngularRoutingBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
