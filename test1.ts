import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://www.amazon.co.uk/`;  // specify the start page


const quantitySelect = Selector('#quantity');
const quantityOption = quantitySelect.find('option');


//then create a test and place your code there
test('My first test', async t => {
    await t
        .typeText('#twotabsearchtextbox', 'flask')
        .click('#nav-search > form > div.nav-right > div > input')
        .click('#result_3 > div > div > div > div.a-fixed-left-grid-col.a-col-right > div.a-row.a-spacing-small > div:nth-child(1) > a')
        .click(quantitySelect)
        .click(quantityOption.withText('4'))
        .click('#add-to-cart-button')
});

