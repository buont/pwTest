import {expect} from "@playwright/test";

export default class ArticlePage{
    constructor(page) {
        this.page = page;
        this.title = page.getByRole('heading', { level: 1 });
        this.paragraphs = page.locator('.article-content p');
        this.tags = page.locator('.article-content .tag-list li');
        this.editButton = page.getByRole('link', { name: 'Edit Article' }).first()
        this.deleteButton = page.getByRole('button', { name: 'Delete Article' }).first()
        this.articleUrl = null;

    }

    async validateArticle(title, body, tags) {
        await expect(this.title).toHaveText(title);
        await expect(this.paragraphs).toHaveText(body);
        const allTags = await this.tags.allTextContents();
        expect(allTags.sort()).toEqual(tags.sort());
        this.articleUrl = this.page.url();

    }

    async deleteArticle() {
        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
        await this.deleteButton.click();
        await this.reopenArticle()
        await this.page.reload()
        const title = await this.title
        await expect(title).toHaveText("404")
    }

    async goto() {
        await this.page.goto('/editor');
    }

    async edit() {
        await this.editButton.click();
    }

    async delete() {
        await this.deleteButton.click();
    }

    async reopenArticle() {
        await this.page.goto(this.articleUrl);
    }
}

