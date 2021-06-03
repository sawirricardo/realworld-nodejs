import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { ArticlesModule } from './api/articles/articles.module';
import { CommentsModule } from './api/comments/comments.module';
import { TagsModule } from './api/tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesModule } from './api/profiles/profiles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_CONNECTION === 'pgsql' ? 'postgres' : 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) ?? 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // entities: [],
      autoLoadEntities: true,
      synchronize: false,
      extra: {
        ssl: true,
      },
    }),
    UsersModule,
    ArticlesModule,
    CommentsModule,
    TagsModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
