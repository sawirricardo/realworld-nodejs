import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';
import ArticleResource from './resource/article.resource';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  async findAll(): Promise<ArticleResource[]> {
    const articles = await this.articleRepository.find();
    return articles.map((article) => new ArticleResource(article));
    // return `This action returns all articles`;
  }

  async findOne(slug: string) {
    return await this.articleRepository
      .createQueryBuilder()
      .where('slug=:slug', { slug })
      .getOne();
    return `This action returns a #${slug} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
