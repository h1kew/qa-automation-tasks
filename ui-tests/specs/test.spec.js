import { expect } from '@wdio/globals'

describe('first e2e test suite', () => {
  beforeEach(async () => {
    await browser.maximizeWindow()
  })

  /**
   * 1. Open EPAM home page
   * 2. Validate page title
   */
  it('should open www.epam.com', async () => {
    const expectedTitle =
      'EPAM | Software Engineering & Product Development Services'

    await browser.url('/')
    await expect(browser).toHaveTitle(expectedTitle)
  })

  /**
   * 1. Open EPAM home page
   * 2. Verify header logo is displayed using CSS selector
   */
  it('should display EPAM logo on home page (CSS selector)', async () => {
    await browser.url('/')

    const logo = await $('a.header__logo-link')
    await expect(logo).toBeDisplayed()
  })

  /**
   * 1. Open EPAM home page
   * 2. Click Services link via XPath and verify navigation to /services
   */
  it('should navigate to Services page from header (XPath selector)', async () => {
    await browser.url('/')

    const candidates = await $$('//header//a[contains(@href, "/services")]')
    let servicesLink = null

    for (const el of candidates) {
      if (await el.isClickable()) {
        servicesLink = el
        break
      }
    }

    if (!servicesLink && candidates.length > 0) {
      servicesLink = candidates[0]
      await servicesLink.scrollIntoView()
      await servicesLink.waitForClickable({ timeout: 10000 })
    }

    expect(servicesLink).not.toBeNull()
    await servicesLink.click()

    await expect(browser).toHaveUrl(/\/services/i)
  })

  /**
   * 1. Open Careers page
   * 2. Verify main section and headings are present using CSS selectors
   */
  it('should open Careers page and verify content (CSS attribute & tag)', async () => {
    await browser.url('/careers')
    await expect(browser).toHaveUrl(/\/careers/i)

    const mainContent = await $('main')
    await expect(mainContent).toBeDisplayed()

    const headings = await $$('h1, h2')
    expect(headings.length).toBeGreaterThan(0)
  })

  /**
   * 1. Open Insights page
   * 2. Scroll to and verify Privacy policy link in footer via XPath
   */
  it('should open Insights page and verify footer link (XPath selector)', async () => {
    await browser.url('/insights')
    await expect(browser).toHaveUrl(/\/insights/i)

    const privacyLinks = await $$(
      '//footer//a[contains(@href, "privacy-policy")]',
    )
    const privacyLink = privacyLinks[0]
    await privacyLink.scrollIntoView()
    await expect(privacyLink).toBeDisplayed()
  })
})
