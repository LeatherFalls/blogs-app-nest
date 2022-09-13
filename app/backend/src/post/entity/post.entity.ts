import { Field, ID, ObjectType } from '@nestjs/graphql';
/* import { ManyToOne } from 'typeorm';
import { User } from 'src/user/entity/user.entity'; */

@ObjectType({ description: 'post' })
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: false })
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  /*   @ManyToOne(() => User, (user) => user.posts)
  user: User; */
}
