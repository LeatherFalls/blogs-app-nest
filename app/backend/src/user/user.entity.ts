import { Field, ID, ObjectType } from '@nestjs/graphql';
/* import { OneToMany } from 'typeorm';
import { Post } from '../../post/entity/post.entity'; */

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  /* @Field()
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]; */
}
