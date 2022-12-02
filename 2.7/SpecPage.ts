import { By, WebDriver, until} from "selenium-webdriver"

export class SpecPage {
    driver: WebDriver
    url: string = "https://www.google.com"

    seachBar: By = By.name('q')
    results: By = By.id('rso')

   constructor(driver: WebDriver) {
    this.driver = driver
   } 

   async navigate() {
    await this.driver.get(this.url)
    await this.driver.wait(until.elementLocated(this.seachBar))
   }

   async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy))
    return this.driver.findElement(elementBy).sendKeys(keys)
   }
   async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy))
    return (await this.driver.findElement(elementBy)).getText()
   }
   async doSearch(text:string) {
    return this.sendKeys(this.seachBar, `${text}\n`)
   }
   async getResults() {
    return this.getText(this.results)
   }
}