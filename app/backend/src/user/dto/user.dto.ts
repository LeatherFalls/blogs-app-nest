import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { RegExHelper } from '../helper/regex.helper';

@InputType()
export class SaveUser {
  @IsNotEmpty({
    message: 'username is required',
  })
  @Length(3, 40, {
    message: 'username length must be beetwen 3 and 40 characters long',
  })
  @Field()
  username: string;

  @IsNotEmpty({
    message: 'email is required',
  })
  @IsEmail({
    message: 'email must be valid',
  })
  @Field()
  email: string;

  @IsNotEmpty({
    message: 'password is required',
  })
  @Length(5, 30, {
    message: 'password length must be beetwen 5 and 30 characters long',
  })
  @Matches(RegExHelper.password, {
    message: 'incorrect password format',
  })
  @Field()
  password: string;
}
