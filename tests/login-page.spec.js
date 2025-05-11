import { expect } from '@playwright/test';
import { test } from '../fixtures/pageFixtures.js';

const email = process.env.EMAIL;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

test('user can login and see main page with right user name', async ({ loginPage, mainPage }) => {
  await loginPage.goto();
  await loginPage.login(email,password);
  await mainPage.profileLink.waitFor();
  await expect(mainPage.profileLink).toHaveText(username);
});

