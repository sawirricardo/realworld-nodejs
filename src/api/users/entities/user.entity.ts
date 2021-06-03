import { Article } from 'src/api/articles/entities/article.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 191 })
  name: string;

  @Column({ length: 191 })
  email: string;

  @Column({ length: 191 })
  username: string;

  @Column({ length: 191 })
  password: string;

  @Column('text')
  bio: string;

  @Column('text')
  image: string;

  @OneToMany(() => Article, (articles) => articles.user)
  articles: Article[];

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
