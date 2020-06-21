const puppeteer = require('puppeteer');

describe('SPA Regression Test', () => {
    let browser
    let page
    let env = "http://localhost:3000"

    beforeEach(async function () {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 20,
            devtools: false,
            args: ['--start-fullscreen'],
        })
        page = await browser.newPage()
        await page.setDefaultTimeout(30000)
        await page.setDefaultTimeout(30000)
        await page.setViewport({width: 1920, height: 1080});
        jest.setTimeout(30000);
    })

    afterEach(async function () {
        await browser.close()
    })

    it('Launch SPA app', async () => {
        await page.goto("http://localhost:3000");
        await page.screenshot({path: 'local_env.png'});
    })
})
