import { expect, browser, $, $$ } from '@wdio/globals'

const URL = 'https://www.epam.com/insights'

describe('EPAM Insights page tests', () => {
  beforeEach(async () => {
    await browser.maximizeWindow()
    await browser.url(URL)
  })

  it('should open Insights page and verify URL and title', async () => {
    await expect(browser).toHaveUrl(/\/insights/i)
    await expect(browser).toHaveTitle(/Insights|EPAM/i)
  })

  it('should display main content and headings on Insights page', async () => {
    const main = await $('main')
    await main.waitForDisplayed({ timeout: 10000 })
    await expect(main).toBeDisplayed()

    const headings = await $$('h1, h2')
    await expect(headings.length).toBeGreaterThan(0)
  })

  it('should scroll to footer and verify privacy policy link on Insights page', async () => {
    const privacyLinks = await $$(
      '//footer//a[contains(@href, "privacy-policy")]',
    )
    const privacyLink = privacyLinks[0]
    await privacyLink.waitForExist({ timeout: 10000 })
    await privacyLink.scrollIntoView()
    await privacyLink.waitForDisplayed({ timeout: 10000 })
    await expect(privacyLink).toBeDisplayed()
  })
})
