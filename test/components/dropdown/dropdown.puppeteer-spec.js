const { getConfig } = require('../../helpers/e2e-utils.js');

describe('Dropdown Puppeteer Tests', () => {
  const baseUrl = 'http://localhost:4000/components/dropdown';

  describe('Index', () => {
    const url = `${baseUrl}/example-index`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should render without error', async () => {
      const dropDownEl = await page.$('#custom-dropdown-id-1-dropdown');
      await dropDownEl.click();
      
      await page.waitForSelector('.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });

    it('should be able to select next element', async () => {
      const dropDownEl = await page.$('#custom-dropdown-id-1-dropdown');
      await dropDownEl.click();
      
      await page.waitForSelector('.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());

      expect(await page.$eval('#custom-dropdown-id-1-dropdown', el => el.getAttribute('aria-label'))).toBe('State, New Jersey');

      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      expect(await page.$eval('#custom-dropdown-id-1-dropdown', el => el.getAttribute('aria-label'))).toBe('State, New Mexico');
    });

    it('should be able to set id/automation id', async () => {
      const dropDownEl = await page.$('#custom-dropdown-id-1-dropdown');
      await dropDownEl.click();
      
      await page.waitForSelector('.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());

      expect(await page.$eval('#custom-dropdown-id-1', el => el.getAttribute('id'))).toBe('custom-dropdown-id-1');
      expect(await page.$eval('#custom-dropdown-id-1', el => el.getAttribute('data-automation-id'))).toBe('custom-automation-dropdown-id');

      expect(await page.$eval('#custom-dropdown-id-1-search', el => el.getAttribute('id'))).toBe('custom-dropdown-id-1-search');
      expect(await page.$eval('#custom-dropdown-id-1-search', el => el.getAttribute('data-automation-id'))).toBe('custom-automation-dropdown-id-search');

      expect(await page.$eval('#custom-dropdown-id-1-search-label', el => el.getAttribute('id'))).toBe('custom-dropdown-id-1-search-label');
      expect(await page.$eval('#custom-dropdown-id-1-search-label', el => el.getAttribute('data-automation-id'))).toBe('custom-automation-dropdown-id-search-label');

      expect(await page.$eval('#custom-dropdown-id-1-dropdown', el => el.getAttribute('id'))).toBe('custom-dropdown-id-1-dropdown');
      expect(await page.$eval('#custom-dropdown-id-1-dropdown', el => el.getAttribute('data-automation-id'))).toBe('custom-automation-dropdown-id-dropdown');

      expect(await page.$eval('#custom-dropdown-id-1-trigger', el => el.getAttribute('id'))).toBe('custom-dropdown-id-1-trigger');
      expect(await page.$eval('#custom-dropdown-id-1-trigger', el => el.getAttribute('data-automation-id'))).toBe('custom-automation-dropdown-id-trigger');

      expect(await page.$eval('#custom-dropdown-id-1-listbox', el => el.getAttribute('id'))).toBe('custom-dropdown-id-1-listbox');
      expect(await page.$eval('#custom-dropdown-id-1-listbox', el => el.getAttribute('data-automation-id'))).toBe('custom-automation-dropdown-id-listbox');

      expect(await page.$eval('#custom-dropdown-id-1-option-0', el => el.getAttribute('id'))).toBe('custom-dropdown-id-1-option-0');
      expect(await page.$eval('#custom-dropdown-id-1-option-0', el => el.getAttribute('data-automation-id'))).toBe('custom-automation-dropdown-id-option-0');
    });

    it('should not visual regress', async () => {
      const dropDownEl = await page.$('#custom-dropdown-id-1-dropdown');
      await dropDownEl.click();
      
      await page.waitForSelector('.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());

      const image = await page.screenshot();
      const config = getConfig('dropdown-index');
      await page.reload({ waitUntil: ['domcontentloaded', 'networkidle0'] });
      expect(image).toMatchImageSnapshot(config);
    });
  });

  describe('Ajax', () => {
    const url = `${baseUrl}/example-ajax`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should render without error', async () => {
      const dropDownEl = await page.$('div.dropdown');
      await dropDownEl.click();
      
      await page.waitForSelector('.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });

    it('should be able to select next element from ajax', async () => {
      const dropDownEl = await page.$('div.dropdown');
      await dropDownEl.click();
      
      await page.waitForSelector('.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());

      expect(await page.$eval('div.dropdown', el => el.getAttribute('aria-label'))).toBe('Ajax Test, ');

      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      expect(await page.$eval('div.dropdown', el => el.getAttribute('aria-label'))).toBe('Ajax Test, American Samoa');
    });
  });

  describe('No Search LSF', () => {
    const url = `${baseUrl}/example-no-search-lsf`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should render without error', async () => {
      const dropDownEl = await page.$('div.dropdown');
      await dropDownEl.click();
      
      await page.waitForSelector('.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });

    it('should select a Dropdown item when keying on a closed Dropdown component', async () => {
      const dropDownEl = await page.$('div.dropdown');
      await dropDownEl.click();
      
      await page.waitForSelector('.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());

      expect(await page.$eval('div.dropdown', el => el.getAttribute('aria-label'))).toBe('No-Search Dropdown, ');

      await page.keyboard.press('R');
      await page.keyboard.press('Enter');

      expect(await page.$eval('div.dropdown', el => el.getAttribute('aria-label'))).toBe('No-Search Dropdown, R - Rocket Raccoon');
    });
  });

  describe('Disabling Function Keys Tests', () => {
    const url = `${baseUrl}/test-disabling-function-keys`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should disable function keys F1 to F12', async () => {
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      await page.keyboard.press('F1');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F2');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F3');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F4');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F5');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F6');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F7');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F8');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F9');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F10');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F11');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));

      await page.keyboard.press('F12');
      await page.evaluate(() => document.querySelector('select.dropdown').value)
        .then(el => expect(el).toEqual(''));
    });
  });

  describe('Announced Error Message Text Tests', () => {
    const url = `${baseUrl}/example-validation.html`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('Should include the error message in aria-label of dropdown error', async () => {
      await page.evaluate(() => document.querySelector('div.dropdown').getAttribute('aria-label'))
        .then(el => expect(el).toEqual('Validated Dropdown, '));

      await page.click('div.dropdown');
      await page.waitForTimeout(200);
      await page.click('#list-option-0');
      await page.keyboard.press('Tab');

      await page.evaluate(() => document.querySelector('div.dropdown.error').getAttribute('aria-label'))
        .then(el => expect(el).toEqual('Validated Dropdown, Required'));
    });
  });

  describe('Supports custom keystrokes', () => {
    const url = `${baseUrl}/test-allow-custom-keystroke.html`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should support disabling the enter key when closed with the onKeyDown function', async () => {
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');

      await page.evaluate(() => document.querySelector('div.dropdown').getAttribute('aria-expanded'))
        .then(ariaExpanded => expect(ariaExpanded).toContain('false'));
    });

    it('should support using the enter key to select while using the onKeyDown function', async () => {
      await page.hover('.dropdown-wrapper');
      await page.click('.dropdown-wrapper');
      await page.hover('#list-option-3');
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');

      await page.evaluate(() => document.querySelector('div.dropdown').getAttribute('aria-label'))
        .then(ariaLabel => expect(ariaLabel).toContain('Dropdown allows custom keystroke, Fire Level E4'));
    });
  });

  describe('Placeholder', () => {
    const url = `${baseUrl}/example-placeholder.html`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should show a placeholder', async () => {
      await page.waitForSelector('div.dropdown', { visible: true })
        .then(element => expect(element).toBeTruthy());

      expect(await page.$eval('div.dropdown [data-placeholder-text]', el => el.getAttribute('data-placeholder-text'))).toBe('Select a State');
    });
  });

  describe('Placeholder Initial Selected', () => {
    const url = `${baseUrl}/test-placeholder-initial-selected.html`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    fit('should show a placeholder', async () => {
      await page.waitForSelector('div.dropdown', { visible: true })
        .then(element => expect(element).toBeTruthy());

      expect(await page.$eval('div.dropdown [data-placeholder-text]', el => el.getAttribute('data-placeholder-text'))).toBe('');
    });
  });
});
