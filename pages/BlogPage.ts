import { BasePage } from './base/BasePage';
import { PageTitles } from '../data/pageTitles';

export class BlogPage extends BasePage {

  async openPage(): Promise<this> {
    return (await this.open('blog')).validateTitle(PageTitles.blog);
  }
}
