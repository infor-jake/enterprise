// const { getConfig } = require('../../helpers/e2e-utils.js');

describe('Listbuilder Puppeteer Tests', () => {
  const baseUrl = 'http://localhost:4000/components/listbuilder';

  describe('Listbuilder Index Page Tests', () => {
    const url = `${baseUrl}/example-index?theme=classic&layout=nofrills`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should select contents', async () => {
      await expect(await page.$$eval('.listview li[role="option"]', el => el.length)).toEqual(12);
    });

    it('should let add item', async () => {
      await expect(await page.$$eval('.listview li[role="option"]', el => el.length)).toEqual(12);
      await page.click('#example1-listbuilder-btn-add');
      await expect(await page.$$eval('.listview li[role="option"]', el => el.length)).toEqual(13);
    });

    it('should let move up item', async () => {
      await page.click('#example1-listbuilder-listview-item-0');
      await page.click('#example1-listbuilder-btn-goup');
    });

    it('should let move down item', async () => {
      await page.click('#example1-listbuilder-listview-item-0');
      await page.click('#example1-listbuilder-btn-godown');
    });

    it('should let edit item', async () => {
      await page.click('#example1-listbuilder-listview-item-0');
      await page.click('#example1-listbuilder-btn-edit');
    });

    it('should let delete item', async () => {
      await expect(await page.$$eval('.listview li[role="option"]', el => el.length)).toEqual(13);
      await page.click('#example1-listbuilder-listview-item-0');
      await page.click('#example1-listbuilder-btn-delete');
      await expect(await page.$$eval('.listview li[role="option"]', el => el.length)).toEqual(12);
    });
  });
});
