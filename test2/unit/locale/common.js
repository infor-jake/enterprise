define([
  'intern!object',
  'intern/chai!expect',
  'jsdom',
], function(registerSuite, expect, JSDOM) {

  var jsdom = require('jsdom').jsdom;
  document = jsdom('<!DOCTYPE html><html id="html"><head></head><body></body></html>'); // jshint ignore:line
  window = document.defaultView;  // jshint ignore:line

  //Load Jquery from node packages
  $ = jQuery = require('jquery'); // jshint ignore:line

  //Load the Locale.js we are testing
  require('../../../js/locale.js');
  Locale = window.Locale; // jshint ignore:line

  //Load the Locales because Ajax doesnt work
  require('../../../js/cultures/en-US.js');
  require('../../../js/cultures/ar-SA.js');
  require('../../../js/cultures/de-DE.js');
  require('../../../js/cultures/nb-NO.js');
  require('../../../js/cultures/no-NO.js');
  require('../../../js/cultures/es-ES.js');
  require('../../../js/cultures/bg-BG.js');
  require('../../../js/cultures/ar-EG.js');
  require('../../../js/cultures/fi-FI.js');
  require('../../../js/cultures/lt-LT.js');
  require('../../../js/cultures/vi-VN.js');

  registerSuite({

    name: 'Locale',

    // Checks the scaffolding we set up to make sure everything works
    'should exist': function() {
      expect(window.Locale).to.exist;
    },

    // Test that we can set the locale
    'should have a locale method': function() {
      Locale.set('en-US').done(function (result) {
        expect(result).to.equal('en-US');
      });
    },

    //Setting the locale should set the lang attribute in the document
    'should set the html lang attribute': function() {
      Locale.set('de-DE').done(function (result) {
        expect(result).to.equal('de-DE');
      });

      var html = window.document.getElementsByTagName('html')[0];
      expect(html.getAttribute('lang')).to.equal('de-DE');
    },

    //Test Formatting English dates of different size
    'should format en dates': function() {
      Locale.set('en-US');    //year, month, day
      expect(Locale.formatDate(new Date(2000, 10, 8))).to.equal('11/8/2000');
      expect(Locale.formatDate(new Date(2000, 10, 8), {date: 'short'})).to.equal('11/8/2000');
      expect(Locale.formatDate(new Date(2000, 10, 8), {date: 'medium'})).to.equal('Nov 8, 2000');
      expect(Locale.formatDate(new Date(2000, 10, 8), {date: 'long'})).to.equal('November 8, 2000');
      expect(Locale.formatDate(new Date(2000, 10, 8), {pattern: 'M/d/yyyy'})).to.equal('11/8/2000');

      //Other Edge Cases
      expect(Locale.formatDate('11/8/2000')).to.equal('11/8/2000');
      expect(Locale.formatDate()).to.be.undefined;

    },

    //Format some random date type cases
    'should format other dates': function() {
      Locale.set('de-DE');    //year, month, day
      expect(Locale.formatDate(new Date(2000, 10, 8))).to.equal('08.11.2000');
      expect(Locale.formatDate(new Date(2000, 11, 1))).to.equal('01.12.2000');
      expect(Locale.formatDate(new Date(2000, 10, 8), {date: 'short'})).to.equal('08.11.2000');
      expect(Locale.formatDate(new Date(2000, 10, 8), {date: 'medium'})).to.equal('08.11.2000');
      expect(Locale.formatDate(new Date(2000, 10, 8), {date: 'long'})).to.equal('8. November 2000');
      expect(Locale.formatDate(new Date(2000, 10, 8), {pattern: 'M.dd.yyyy'})).to.equal('11.08.2000');

      Locale.set('fi-FI');    //year, month, day
      expect(Locale.formatDate(new Date(2000, 11, 1))).to.equal('1.12.2000');
    },

    //Format time in us and europe
    'should format time': function() {
      Locale.set('en-US');    //year, month, day, hours, mins , secs
      expect(Locale.formatDate(new Date(2000, 10, 8, 13, 40), {date: 'datetime'})).to.equal('11/8/2000 1:40 PM');
      expect(Locale.formatDate(new Date(2000, 10, 8, 13, 0), {date: 'datetime'})).to.equal('11/8/2000 1:00 PM');
      Locale.set('de-DE');
      expect(Locale.formatDate(new Date(2000, 11, 1, 13, 40), {date: 'datetime'})).to.equal('01.12.2000 13:40');
      expect(Locale.formatDate(new Date(2000, 11, 1, 13, 05), {pattern: 'M.dd.yyyy HH:mm'})).to.equal('12.01.2000 13:05');
    },

    //monthYear and yearMonth
    'should format a year and month locale': function() {
      Locale.set('en-US');    //year, month, day, hours, mins , secs
      expect(Locale.formatDate(new Date(2000, 10, 8, 13, 40), {date: 'month'})).to.equal('November 08');
      expect(Locale.formatDate(new Date(2000, 10, 8, 13, 0), {date: 'year'})).to.equal('2000 November');
      Locale.set('de-DE');
      expect(Locale.formatDate(new Date(2000, 11, 1, 13, 40), {date: 'month'})).to.equal('01 Dezember');
      expect(Locale.formatDate(new Date(2000, 11, 1, 13, 05), {date: 'year'})).to.equal('Dezember 2000');
    },

    //monthYear and yearMonth
    'should be able to test RTL': function() {
      Locale.set('en-US');    //year, month, day, hours, mins , secs
      expect(Locale.isRTL()).to.equal(false);
      Locale.set('ar-SA');
      expect(Locale.isRTL()).to.equal(true);
    },

    //Test Long Formatting
    'should format long': function() {
      Locale.set('en-US');    //year, month, day, hours, mins , secs
      expect(Locale.formatDate(new Date(2015, 0, 8, 13, 40), {date: 'long'})).to.equal('January 8, 2015');

      Locale.set('de-DE');
      expect(Locale.formatDate(new Date(2015, 0, 1, 13, 40), {date: 'long'})).to.equal('1. Januar 2015');

      Locale.set('es-ES');
      expect(Locale.formatDate(new Date(2015, 0, 1, 13, 40), {date: 'long'})).to.equal('1 de Enero de 2015');

      Locale.set('lt-LT');
      expect(Locale.formatDate(new Date(2015, 0, 1, 13, 40), {date: 'long'})).to.equal('2015 m. sausis 1 d.');

      Locale.set('vi-VN');
      expect(Locale.formatDate(new Date(2015, 0, 1, 13, 40), {date: 'long'})).to.equal('ngày 01 tháng 01 năm 2015');
    },

    'should format long with day of week': function() {
      Locale.set('en-US');    //year, month, day, hours, mins , secs
      expect(Locale.formatDate(new Date(2015, 0, 8, 13, 40), {date: 'full'})).to.equal('Thursday, January 8, 2015');
      expect(Locale.formatDate(new Date(2015, 2, 7, 13, 40), {date: 'full'})).to.equal('Saturday, March 7, 2015');

      Locale.set('de-DE');
      expect(Locale.formatDate(new Date(2015, 0, 1, 13, 40), {date: 'full'})).to.equal('Donnerstag, 1. Januar 2015');
    },

    'should format long days': function() {
      Locale.set('en-US');    //year, month, day, hours, mins , secs
      expect(Locale.formatDate(new Date(2015, 0, 8, 13, 40), {date: 'long'})).to.equal('January 8, 2015');

      Locale.set('de-DE');
      expect(Locale.formatDate(new Date(2015, 0, 1, 13, 40), {date: 'long'})).to.equal('1. Januar 2015');

      Locale.set('ar-EG');
      expect(Locale.formatDate(new Date(2015, 0, 1, 13, 40), {date: 'long'})).to.equal('1 يناير، 2015');

      Locale.set('bg-BG');
      expect(Locale.formatDate(new Date(2015, 0, 1, 13, 40), {date: 'long'})).to.equal('1 януари 2015 г.');
    },

    'should be able to parse dates': function() {
      Locale.set('en-US');    //year, month, day
      expect(Locale.parseDate('11/8/2000').getTime()).to.equal(new Date(2000, 10, 8).getTime());
      expect(Locale.parseDate('11/8/00').getTime()).to.equal(new Date(1900, 10, 8).getTime());
      expect(Locale.parseDate('10 / 15 / 2014').getTime()).to.equal(new Date(2014, 9, 15).getTime());
      //expect(Locale.parseDate('11/8/2001 10:10 PM', Locale.calendar().dateFormat.datetime).getTime()).to.equal(new Date(2001, 10, 8, 10, 10).getTime());
      //Ensure why this works in the browser and not in node
      //expect(Locale.parseDate('11/8/2001 10:10 PM', Locale.calendar().dateFormat.datetime)).to.equal('');

      Locale.set('de-DE');    //year, month, day
      expect(Locale.parseDate('08.11.2000').getTime()).to.equal(new Date(2000, 10, 8).getTime());
    },

    'can format with no separator': function() {
      Locale.set('en-US');
      expect(Locale.parseDate('20151028', 'yyyyMMdd').getTime()).to.equal(new Date(2015, 9, 28).getTime());
      expect(Locale.parseDate('28/10/2015', 'dd/MM/yyyy').getTime()).to.equal(new Date(2015, 9, 28).getTime());
      expect(Locale.parseDate('10/28/2015', 'M/d/yyyy').getTime()).to.equal(new Date(2015, 9, 28).getTime());
      expect(Locale.parseDate('10282015', 'Mdyyyy').getTime()).to.equal(new Date(2015, 9, 28).getTime());
      expect(Locale.parseDate('10282015', 'Mdyyyy').getTime()).to.equal(new Date(2015, 9, 28).getTime());
      expect(Locale.parseDate('10/28/99', 'MM/dd/yy').getTime()).to.equal(new Date(2099, 9, 28).getTime());

      //We can parse either 4 or 2 digit month day
      expect(Locale.parseDate('10282015', 'Mdyyyy').getTime()).to.equal(new Date(2015, 9, 28).getTime());
      expect(Locale.parseDate('222015', 'dMyyyy').getTime()).to.equal(new Date(2015, 1, 2).getTime());
    },

    'parse date time': function() {
      Locale.set('en-US');    //year, month, day
      expect(Locale.parseDate('10/28/2015 8:12:10', 'M/d/yyyy h:mm:ss').getTime()).to.equal(new Date(2015, 9, 28, 8, 12, 10).getTime());
      expect(Locale.parseDate('10/28/2015 8:12:10 PM', 'M/d/yyyy h:mm:ss a').getTime()).to.equal(new Date(2015, 9, 28, 20, 12, 10).getTime());
      expect(Locale.parseDate('10/28/2015 8:12:10 AM', 'M/d/yyyy h:mm:ss a').getTime()).to.equal(new Date(2015, 9, 28, 8, 12, 10).getTime());
      expect(Locale.parseDate('10/28/2015', 'M/d/yyyy h:mm:ss')).to.be.undefined;
      expect(Locale.parseDate('10/28/2015 20:12:10', 'M/d/yyyy HH:mm:ss').getTime()).to.equal(new Date(2015, 9, 28, 20, 12, 10).getTime());
      expect(Locale.parseDate('10/28/2015 30:12:10', 'M/d/yyyy HH:mm:ss').getTime()).to.equal.NaN;
      expect(Locale.parseDate('10/28/2015 30:30:10 AM', 'M/d/yyyy h:mm:ss a').getTime()).to.equal.NaN;
      expect(Locale.parseDate(undefined)).to.equal.undefined;

    },

    'should round minutes to 60 ': function() {
       Locale.set('en-US');
       expect(Locale.parseDate('10/28/2015 8:65:10', 'M/d/yyyy h:mm:ss').getTime()).to.equal(new Date(2015, 9, 28, 8, 0, 10).getTime());
       expect(Locale.parseDate('10/28/2015 8:10:65', 'M/d/yyyy h:mm:ss').getTime()).to.equal(new Date(2015, 9, 28, 8, 10, 0).getTime());
    },

    'parse date should handle leap years': function() {
      Locale.set('en-US');    //year, month, day
      expect(Locale.parseDate('02/29/2016', 'M/d/yyyy').getTime()).to.equal(new Date(2016, 1, 29).getTime());
      expect(Locale.parseDate('02/30/2016', 'M/d/yyyy')).to.be.undefined;
    },

    'should cleanly handle non dates': function() {
      Locale.set('en-US');    //year, month, day
      expect(Locale.parseDate('111/81/20001')).to.be.undefined;
      expect(Locale.formatNumber(undefined, {date: 'timestamp'})).to.be.undefined;
      expect(Locale.parseDate('13/28/2015', 'MM/d/yyyy')).to.be.undefined;
      expect(Locale.parseDate('10/32/2015', 'MM/dd/yyyy')).to.be.undefined;

    },

    'be able to return time format': function(){
      Locale.set('en-US');
      expect(Locale.formatDate(new Date(2015, 0, 8, 13, 40, 45), {date: 'timestamp'})).to.equal('1:40:45 PM');

      Locale.set('de-DE');
      expect(Locale.formatDate(new Date(2015, 0, 8, 13, 40, 45), {date: 'timestamp'})).to.equal('13:40:45');
    },

    //monthYear and yearMonth
    'should be format time stamp': function() {
      Locale.set('en-US');    //year, month, day, hours, mins , secs
      expect(Locale.isRTL()).to.equal(false);
      Locale.set('ar-SA');
      expect(Locale.isRTL()).to.equal(true);
    },

    'be work with either no-NO or nb-NO': function() {
      Locale.set('no-NO');
      expect(Locale.translate('Loading')).to.equal('Laster');
      Locale.set('nb-NO');
      expect(Locale.translate('Loading')).to.equal('Laster');
      expect(Locale.calendar().timeFormat).to.equal('HH.mm');
      Locale.set('en-US');
    },

    'be able to translate': function() {
      //Normal
      Locale.set('en-US');
      expect(Locale.translate('Required')).to.equal('Required');

      //With Object Selector
      Locale.set('de-DE');
      expect(Locale.translate('Required')).to.equal('Erforderlich');
      expect(Locale.translate('Loading')).to.equal('Wird Geladen');

      //Error
      expect(Locale.translate('XYZ')).to.not.exist;

      //Non Existant in locale - use EN
      Locale.set('de-DE');
      expect(Locale.translate('Equals')).to.equal('Equals');

      //Error
      expect(Locale.translate('XYZ')).to.not.exist;

    },

    'be possible to add translations': function() {
      Locale.set('en-US');
      Locale.currentLocale.data.messages['CustomValue'] = {id: 'CustomValue', value: 'Added Custom Value'};

      expect(Locale.translate('CollapseAppTray')).to.equal('Collapse App Tray');
      expect(Locale.translate('CustomValue')).to.equal('Added Custom Value');
    },

    //We tried to translate a local that doesnt exist
    'no translate errors on non existant locale': function() {
      //Normal
      Locale.set('xx-XX');
      expect(Locale.translate('Required')).to.equal('Required');
    },

    'should format decimals': function() {
      Locale.set('en-US');
      expect(Locale.formatNumber(12345.1234)).to.equal('12,345.123');
      expect(Locale.formatNumber(12345.123, {style: 'decimal', maximumFractionDigits:2})).to.equal('12,345.12');
      expect(Locale.formatNumber(12345.123456, {style: 'decimal', maximumFractionDigits:3})).to.equal('12,345.123');
      expect(Locale.formatNumber(0.0000004, {style: 'decimal', maximumFractionDigits:7})).to.equal('0.0000004');

      Locale.set('de-DE');
      expect(Locale.formatNumber(12345.1)).to.equal('12.345,100');
      expect(Locale.formatNumber(0.0000004, {style: 'decimal', maximumFractionDigits:7})).to.equal('0,0000004');
      expect(Locale.formatNumber(0.000004, {style: 'decimal', maximumFractionDigits:7})).to.equal('0,0000040');

      Locale.set('ar-EG');
      expect(Locale.formatNumber(12345.1)).to.equal('12٬345٫100');
      Locale.set('bg-BG');
      expect(Locale.formatNumber(12345.1)).to.equal('12 345,100');

    },

    'should format integers': function() {
      Locale.set('en-US');
      expect(Locale.formatNumber(12345.123, {style: 'integer'})).to.equal('12,345');

      Locale.set('de-DE');
      expect(Locale.formatNumber(12345.123, {style: 'integer'})).to.equal('12.345');
    },

    //A string which was a number can be parsed
    'should format string numbers': function() {
      Locale.set('en-US');
      expect(Locale.formatNumber('12345', {style: 'integer'})).to.equal('12,345');

    },

    'should format currency': function() {
      Locale.set('en-US');
      expect(Locale.formatNumber(12345.129, {style: 'currency'})).to.equal('$12,345.13');

      Locale.set('de-DE');
      expect(Locale.formatNumber(12345.123, {style: 'currency'})).to.equal('12.345,12 €');
    },

    'should parse numbers back': function() {
      Locale.set('en-US');
      expect(Locale.parseNumber('$12,345.13')).to.equal(12345.13);

      Locale.set('de-DE');
      expect(Locale.parseNumber('12.345,12 €')).to.equal(12345.12);
      expect(Locale.parseNumber(undefined)).to.equal(undefined);
    }

  });

});
