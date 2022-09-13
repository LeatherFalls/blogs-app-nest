import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SaveUser } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => User)
  async createUser(@Args('newUser') newUser: SaveUser): Promise<User> {
    return this.userService.createUser(newUser);
  }
}
