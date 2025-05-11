export default class MainPage{
    constructor(page) {
        this.page = page;
        this.profileLink = page.locator('a.nav-link[href^="/profile/"]');
        this.newArticle = page.locator('a.nav-link[href^="/editor"]');
    }


    async goto() {
        await this.page.goto('/');
    }
}

