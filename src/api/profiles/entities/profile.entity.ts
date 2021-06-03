import { User } from 'src/api/users/entities/user.entity';
import { Column, Entity } from 'typeorm';

export class Profile {
  username: string;

  bio: string;

  image: string;

  following: boolean;

  constructor(user: User) {
    this.username = user.username;
    this.bio = user.bio;
    this.image = user.image;
    this.following = false;
  }
}
