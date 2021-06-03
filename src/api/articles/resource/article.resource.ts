import { Profile } from 'src/api/profiles/entities/profile.entity';
import { Article } from '../entities/article.entity';
export default class ArticleResource {
  title: string;
  slug: string;
  body: string;
  description: string;
  author: Profile;
  tagList: string[];
  favoritesCount: number;
  favorited: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(article: Article) {
    this.title = article.title;
    this.slug = article.slug;
    this.description = article.description;
    this.body = article.body;
    this.tagList = article.tags.map((tag) => tag.name);
    this.createdAt = article.createdAt;
    this.updatedAt = article.updatedAt;
    this.author = new Profile(article.user);
    this.favorited = false;
    this.favoritesCount = 0;
  }
}
