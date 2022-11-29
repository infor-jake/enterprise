const chalk = require('chalk');
const logger = require('../../scripts/logger');
const config = require('./e2e-config.js');

module.exports = {
  isIE: () => browser.browserName === 'ie',
  isFF: () => browser.browserName === 'firefox',
  isSafari: () => browser.browserName === 'safari',
  isChrome: () => browser.browserName === 'chrome',
  isMac: async () => {
    const capabilities = await browser.getCapabilities();
    return capabilities.platform === 'MAC';
  },
  isBS: () => process.env.isBrowserStack,
  isCI: () => process.env.CI,
  setPage: async (url) => {
    const pageurl = `${browser.baseUrl + url}`;
    await browser.waitForAngularEnabled(false);
    await browser.driver.get(pageurl);
  },
  checkForErrors: async () => {
    try {
      await browser.manage().logs().get('browser').then((browserLog) => {
        let errors = 0;
        for (let i = 0; i < browserLog.length; i++) {
          logger('error', browserLog[i].message);
          errors++;
        }
        expect(errors).toEqual(0);
      });
    } catch (e) {
      // Do nothing
    }
  },
  getSelectedText: async () => {
    await browser.executeScript(() => {
      let text = '';
      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type !== 'Control') {
        text = document.selection.createRange().text;
      }
      return text;
    });
  },
  reportAxeViolations: (res) => {
    let msg = '';
    if (!res || !res.violations || !res.violations.length) {
      return;
    }

    msg += 'Axe Violations:\n\n';
    res.violations.forEach((violation) => {
      msg += `${chalk.bold(violation.help)}\n`;

      const violationNodes = violation.nodes || [];
      let failureSummary;
      let targetList = '';
      violationNodes.forEach((node) => {
        if (!failureSummary) {
          failureSummary = node.failureSummary;
        }
        node.target.forEach((target) => {
          targetList += `  \`${target}\`\n`;
        });
      });

      msg += `${chalk.yellow('Targets:')}\n`;
      msg += `${targetList}\n`;
      msg += `${chalk.yellow('Suggested Fix:')} ${failureSummary}\n`;
    });

    logger('error', msg);
  },
  rgb2hex: (str) => {
    const newStr = str.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (newStr && newStr.length === 4) ? `#${(`0${parseInt(newStr[1], 10).toString(16)}`).slice(-2)}${(`0${parseInt(newStr[2], 10).toString(16)}`).slice(-2)}${(`0${parseInt(newStr[3], 10).toString(16)}`).slice(-2)}` : '';
  },
  waitsFor: async (condition, el) => {
    if (condition && el && protractor && browser && browser.driver) {
      const expected = protractor.ExpectedConditions;
      await browser.driver.wait(expected[condition](el), config.waitsFor);
    }
  },
  /**
   * Configuration for jest image snapshot
   * See https://github.com/americanexpress/jest-image-snapshot#%EF%B8%8F-api for the API needed.
   * @param {string} customSnapshotIdentifier A custom name to give this snapshot.
   * @returns {object} takes an optional options object.
   */
  // eslint-disable-next-line arrow-body-style
  getConfig: (customSnapshotIdentifier) => {
    return {
      // anything less than 0.5 percent difference passes as the same
      failureThreshold: 0.05,
      failureThresholdType: 'percent',
      customSnapshotIdentifier,
      customSnapshotsDir: './test/baseline-images',
      customDiffDir: './test/baseline-images/diff',
      // Reduced false positives (failing tests when the images look the same)
      comparisonMethod: 'ssim'
    };
  },

  /**
   * Get the computed style of a particular element.
   * @param {string} selector selector - The selector for the element to get the property for.
   * @param {string} style style - The css property of the element.
   * @returns props
   */
  getComputedStyle: async (selector, style) => {
    const elem = await page.$eval(selector, e => JSON.parse(JSON.stringify(getComputedStyle(e))));
    const { [style]: props } = elem;
    return props;
  },

  /**
     * Checks the computed style of a particular element with strict equality.
     * param {string} selector - The selector for the element.
     * param {string} style - The css property to look for.
     * param {string} value - The value to compare. Expected Value.
     * returns {boolean} isFailed - return true if the comparison is failed, return false otherwise.
     */
    // unecessary
  checkElementCssProperty: async (selector, style, value) => {
    let isFailed = false;
    try {
      const elem = await page.$eval(selector, e => JSON.parse(JSON.stringify(getComputedStyle(e))));
      const { [style]: props } = elem;
      expect(props).toBe(value);
    } catch (error) {
      isFailed = true;
    }
    return isFailed;
  },

  /**
     * Checks if data automation id matches the given value.
     * param {string} selector - The selector for the element to get the property value for.
     * param {string} value - The value to compare. Expected Value.
     * returns {boolean} isFailed - return true if the comparison is failed, return false otherwise.
     */
    // unecessary
  checkDataAutomationID: async (selector, value) => {
    let isFailed = false;
    try {
      const elemHandle = await page.$(selector);
      const elemID = await page.evaluate(elem => elem.getAttribute('data-automation-id'), elemHandle);
      expect(elemID).toEqual(value);
    } catch (error) {
      isFailed = true;
    }
    return isFailed;
  },

  /**
     * Checks if Inner HTML contains the given value.
     * param {string} selector - The selector for the element.
     * param {string} value - The value to compare. Expected Value.
     * returns {boolean} isFailed - return true if the comparison is failed, return false otherwise.
     */
    // unecessary
  checkInnerHTMLValue: async (selector, value) => {
    let isFailed = false;
    try {
      const elem = await page.$eval(selector, element => element.innerHTML);
      expect(elem).toContain(value);
    } catch (error) {
      isFailed = true;
    }
    return isFailed;
  },

  /**
     * Checks if tooltip of the element matches the given value.
     * param {string} parentEL - The selector for the element you want to see the tooltip.
     * param {string} tooltipEL - The selector for the tooltip element.
     * param {string} elHandle - The selector for the tooltip content.
     * param {string} expectedValue - The tooltip value to compare.
     * returns {boolean} isFailed - return true if the comparison is failed, return false otherwise.
     */
    // unecessary
  checkTooltipValue: async (parentEL, tooltipEL, elHandle, expectedValue) => {
    let isFailed = false;
    try {
      await page.hover(parentEL);
      await page.waitForSelector(tooltipEL, { visible: true });
      const tooltipHandle = await page.$(elHandle);
      const tooltipValue = await page.evaluate(el => el.innerText, tooltipHandle);
      expect(tooltipValue).toEqual(expectedValue);
    } catch (error) {
      isFailed = true;
    }
    return isFailed;
  },

  /**
     * Checks if the element exists on the page.
     * param {string} selector - The selector for the element to get the property value for
     * returns {boolean} isFailed - return true if the comparison is failed, return false otherwise
     */
    // maybe
  checkIfElementExist: async (selector) => {
    let isFailed = false;
    try {
      const elem = await page.$eval(selector, el => el !== null);
      expect(elem).toBe(true);
    } catch (error) {
      isFailed = true;
    }
    return isFailed;
  },

  /**
     * Checks if the element has focused.
     * param {string} selector - The selector for the element.
     * returns {boolean} isFailed - return true if the comparison is failed, return false otherwise
     */
    // unecessary
  checkIfElementHasFocused: async (selector) => {
    let isFailed = false;
    try {
      const elem = await page.$eval(selector, el => el === document.activeElement);
      expect(elem).toBe(true);
    } catch (error) {
      isFailed = true;
    }
    return isFailed;
  },

  /**
   * Drag and drop method using two elements as points
   * @param {Object} origin Starting element
   * @param {Object} destination Destination
   * @returns {Object} Origin coordinates
   */
  dragAndDropElem: async (origin, destination) => {
    const ob = await origin.boundingBox();
    const db = await destination.boundingBox();
    await page.mouse.move(ob.x + ob.width / 2, ob.y + ob.height / 2);
    await page.mouse.down();
    await page.waitForTimeout(50);
    await page.mouse.move(db.x + db.width / 2, db.y + db.height / 2);
    await page.mouse.up();
    return { origin: ob, destination: db };
  },

  /**
   * Drag and drop method using an element as the start and
   * coordinates as the destination
   * @param {Object} origin Starting element
   * @param {Object} destination Coordinates = { x, y }
   * @returns {Object} Origin coordinates
   */
  dragElemToPoint: async (origin, destination) => {
    const boundingBox = await origin.boundingBox();
    await page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(destination.x, destination.y);
    await page.mouse.up();
    return boundingBox;
  }
};
