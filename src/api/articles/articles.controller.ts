import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll(@Query() query) {
    let articles = await this.articlesService.findAll();
    if (query.author !== undefined) {
      articles = articles.filter(
        (article) => article.author.username === query.author,
      );
    }

    if (query.tag !== undefined) {
      articles = articles.filter((article) =>
        article.tagList.includes(query.tag),
      );
    }

    if (query.favorited !== undefined) {
      articles = articles.filter(
        (article) => article.author.username === query.favorited,
      );
    }

    return {
      articles,
      articlesCount: articles.length,
    };

    return this.articlesService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return { article: await this.articlesService.findOne(slug) };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
