// / <reference path="./steps.d.ts" />
Feature('GitHub')

Before(({ I }) => {
  I.amOnPage('https://github.com')
  I.see('GitLab')
})

xScenario('test ai features', ({ I }) => {
  I.amOnPage('https://getbootstrap.com/docs/5.1/examples/checkout/')
})

Scenario('Incorrect search for Codeceptjs', ({ I }) => {
  I.fillField('.search-input', 'CodeceptJS')
  I.pressKey('Enter')
  I.waitForElement('[data-testid=search-sub-header]', 10)
  I.see('Supercharged End 2 End Testing')
})

Scenario('Visit Home Page @retry', async ({ I }) => {
  // .retry({ retries: 3, minTimeout: 1000 })
  I.retry(2).see('GitHub')
  I.retry(3).see('ALL')
  I.retry(2).see('IMAGES')
})

Scenario('search @grop', { timeout: 6 }, ({ I }) => {
  I.amOnPage('https://github.com/search')
  const a = {
    b: {
      c: 'asdasdasd',
    },
  }
  const b = {
    users: {
      admin: {
        name: 'Admin',
      },
      user: {
        name: 'user',
      },
      other: (world = '') => `Hello ${world}`,
    },
    urls: {},
  }
  I.fillField('Search GitHub', 'CodeceptJS')
  // pause({ a, b });
  I.pressKey('Enter')
  I.wait(3)
  // pause();
  I.see('Codeception/CodeceptJS', locate('.repo-list .repo-list-item').first())
})

Scenario('signin @sign', { timeout: 6 }, ({ I, loginPage }) => {
  I.say('it should not enter')
  loginPage.login('something@totest.com', '123456')
  I.see('Incorrect username or password.', '.flash-error')
})
  .tag('normal')
  .tag('important')
  .tag('@slow')

Scenario('signin2', { timeout: 1 }, ({ I, Smth }) => {
  Smth.openAndLogin()
  I.see('Incorrect username or password.', '.flash-error')
})

Scenario('register', ({ I }) => {
  within('.js-signup-form', () => {
    I.fillField('user[login]', 'User')
    I.fillField('user[email]', 'user@user.com')
    I.fillField('user[password]', 'user@user.com')
    I.fillField('q', 'aaa')
    I.click('button')
  })
  I.see('There were problems creating your account.')
  I.click('Explore')
  I.seeInCurrentUrl('/explore')
})
