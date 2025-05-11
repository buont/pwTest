import { expect } from '@playwright/test';
import { test } from '../fixtures/pageFixtures.js';
import { faker } from '@faker-js/faker';

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const tagCount = faker.number.int({ min: 2, max: 5 });
const tags = Array.from({ length: tagCount }, () => faker.word.noun());

const article = {
  title: faker.lorem.words(5),
  description: faker.lorem.words(3),
  body: faker.lorem.paragraphs(3),
  tags: tags
};

test.beforeEach(async ({ loginPage, mainPage }) => {
  await loginPage.goto();
  await loginPage.login(email,password);
  await mainPage.profileLink.waitFor();
});


test('user can create, read, update and delete article', async ({ articlePage, editorPage }) => {
  await editorPage.goto();

  // create an article
  await editorPage.createArticle(article.title, article.description, article.body, article.tags);

  // read article
  await articlePage.validateArticle(article.title, article.body, article.tags)

  // update article
  await articlePage.edit()
  await editorPage.updateArticle(article.title, article.description, article.body, article.tags)
  // check article after update
  article.title = article.title + " updated";
  article.body = article.body + " updated";
  article.tags.push("updated")
  await articlePage.reopenArticle()
  await articlePage.validateArticle(article.title, article.body, article.tags)

  //delete article
  await articlePage.deleteArticle()


});
