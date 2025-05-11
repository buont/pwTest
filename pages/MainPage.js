export default class MainPage{
    constructor(page) {
        this.page = page;
        this.profileLink = page.locator('a.nav-link[href^="/profile/"]');
    }


    async goto() {
        await this.page.goto('/');
    }
}

