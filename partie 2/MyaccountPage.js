export class MyaccountPage {
    constructor(page) {
        this.page = page;
    }
    
    visit = async () => {
        const baseUrl = 'http://localhost:2221'; // Replace with your actual base URL
        await this.page.goto(`${baseUrl}/my-account`);
        await this.page.pause();
    }
}
