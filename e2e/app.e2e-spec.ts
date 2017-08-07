import { DndTestPage } from './app.po';

describe('dnd-test App', () => {
  let page: DndTestPage;

  beforeEach(() => {
    page = new DndTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
