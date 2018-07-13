import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://www.amazon.co.uk/`;  // specify the start page


test('My second test', async t => {
    await t
        .hover('#nav-link-shopall > span.nav-line-2')
        .hover('#nav-flyout-shopAll > div.nav-template.nav-flyout-content.nav-tpl-itemList > span:nth-child(4)')
        .click('#nav-flyout-shopAll > div.nav-subcats > div:nth-child(4) > div.nav-column.nav-column-first > div > a:nth-child(1)');

});