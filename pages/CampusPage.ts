import { BasePage } from './base/BasePage';
import { PageTitles } from '../data/pageTitles';

export class CampusPage extends BasePage {

  async openPage(): Promise<this> {
    return (await this.open('location')).validateTitle(PageTitles.campus);
  }
}
