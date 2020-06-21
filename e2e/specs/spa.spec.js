const puppeteer = require('puppeteer');

describe('SPA Regression Test', () => {
    let browser
    let page

    beforeEach(async function () {
        browser = await puppeteer.launch({
            headless: false,
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
        await page.goto(ENV_LOCAL);
        await page.screenshot({path: 'local_env.png'});
    })
})
