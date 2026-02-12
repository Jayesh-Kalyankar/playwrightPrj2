import { BasePage } from './base/BasePage';
import { PageTitles } from '../data/pageTitles';

export class ProgramPage extends BasePage {

  async openPage(): Promise<this> {
    return (await this.open('programs')).validateTitle(PageTitles.program);
  }
}
