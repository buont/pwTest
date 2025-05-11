import { test as base } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import MainPage from "../pages/MainPage";
import EditorPage from "../pages/EditorPage";
import ArticlePage from "../pages/ArticlePage";

 const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
     mainPage: async ({ page }, use) => {
         const mainPage = new MainPage(page);
         await use(mainPage);
     },
     editorPage: async ({ page }, use) => {
         const editorPage = new EditorPage(page);
         await use(editorPage);
     },
     articlePage: async ({ page }, use) => {
         const articlePage = new ArticlePage(page);
         await use(articlePage);
     },
});

module.exports = { test };