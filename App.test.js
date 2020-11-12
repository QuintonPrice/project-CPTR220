const fs = require('fs');
const cheerio = require('cheerio') //for html testing
const inlineCss = require('inline-css'); //for css testing

//include custom matchers
const styleMatchers = require('jest-style-matchers');
expect.extend(styleMatchers);

const htmlPath = __dirname + '/index.html';
const html = fs.readFileSync(htmlPath, 'utf-8'); //load the HTML file once

//absolute path for relative loading (if needed)
const baseDir = 'file://' + __dirname + '/';


/////Content + HTML
describe("Content + HTML Tests", () => {
    let $; //cheerio instance
    beforeAll(() => {
        $ = cheerio.load(html);
    })

    // Metadata
    test('Includes page meta data', () => {
        let meta = $('head > meta');
        expect(meta.length).toBeGreaterThanOrEqual(1); //has more than one meta tag
    })

    // Text
    test('Page has required text', () => {
        expect($('head > title').length).toEqual(1);
        expect($('head > title').text()).toEqual("Home - Seattle Guide");
        expect($('div').children().length).toBeGreaterThanOrEqual(1); // includes text elements
    })

    // Media
    test('Includes required media', () => {
        expect($('#images > img').length).toEqual(2); //both images loaded correctly
    })
})


/////Style + CSS
describe("Style + CSS Tests", () => {
    let $; //cheerio instance
    beforeAll(async () => {
        //test CSS by inlining properties and then reading them from cheerio
        let inlined = await inlineCss(html, { url: baseDir, removeLinkTags: false });
        //console.log(inlined);
        $ = cheerio.load(inlined);
    })

    // Color
    test('Elements have correct color', () => {
        expect($('nav').css('background-color')).toEqual("#13300f");
        expect($('body').css('background-image')).toEqual("url('../images/backgrounds/topography.png')");
        expect($('.container').css('background-color')).toEqual('#fcfcfc');
    })

    // Typography
    test('All elements Helvetica type', () => {
        // let fontFamilySingleQuotes = ($('body').css('font-family')).replace(/"/g, '\'');
        expect($('body').css('font-family')).toMatch('Helvetica Neue');
    })
    // (non standard) layout
    test('Non-Standard layout / Responsive design present', () => {
        // let metaAttributes = meta.attr('content').split(',').sort();
        // expect(metaAttributes[0].trim()).toEqual("initial-scale=1"); //includes attribute
        // expect(metaAttributes[1].trim()).toEqual("shrink-to-fit=no"); //includes attribute
        // expect(metaAttributes[2].trim()).toEqual("width=device-width"); //includes attribute
        expect($('.container').css('width')).toEqual('95%'); // Default size before sizing up or down
        expect($('.container').css('font-size')).toEqual('1.5em'); // Default size before sizing up or down
    })
    // interactive effects
    test('Elements with interactive effects', () => {
        expect($('.navbar a').css('color')).toEqual('white'); // Navbar text color should be white initially unless hovered
    })
})

///// Interactive + JS Tests (FOUND IN travel.jest.js)
// describe("Interactive + JS Tests", () => {
//     External Data or Interactive Page Elements
// })


