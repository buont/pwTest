import {expect} from "@playwright/test";

export default class EditorPage{
    constructor(page) {
        this.page = page;
        this.titleInput = page.getByPlaceholder('Article Title');
        this.descriptionInput = page.getByPlaceholder("What's this article about?");
        this.bodyTextarea = page.getByPlaceholder('Write your article (in markdown)');
        this.tagsInput = page.getByPlaceholder('Enter tags');
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
        this.updateButton = page.getByRole('button', { name: 'Update Article' });
    }

    async fillForm({ title, description, body, tags }) {
        await this.titleInput.fill(title);
        await this.descriptionInput.fill(description);
        await this.bodyTextarea.fill(body);
        for ( const tag of tags ) {
            await this.tagsInput.fill(tag);
            await this.tagsInput.press("Enter")
        }

    }

    async submit() {
        await this.publishButton.click();
    }

    async update() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.updateButton.click()
        ])
    }

    async createArticle(title, description, body, tags) {
        await this.fillForm({ title, description, body, tags });
        await this.submit();
    }

    async updateArticle(title, description, body, tags) {
        title = title + " updated";
        description = description + " updated";
        body = body + " updated";
        tags = ["updated"]
        await this.fillForm({ title, description, body, tags });
        await this.update()

    }

    async goto() {
        await this.page.goto('/editor');
    }
}

