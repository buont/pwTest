export default class LoginPage{
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('input[type="email"]');
        this.passwordField = page.locator('input[type="password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }

    async goto() {
        await this.page.goto('/user/login');
    }

    async login(username, password) {
        await this.emailField.fill(username);
        await this.passwordField.fill(password);
        await this.signInButton.click();
    }
}

