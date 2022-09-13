import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PostResolver } from './post/post.resolver';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST', '172.17.0.2'),
        port: Number(configService.get('DB_PORT', '3306')),
        username: configService.get('DB_USER', 'root'),
        password: configService.get('DB_PASS', '123456'),
        database: configService.get('DB_NAME', 'blogs_api'),
        entities: [],
        synchronize: true,
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
    UserModule,
    PostModule,
    CategoryModule,
  ],
  providers: [PostResolver],
})
export class AppModule {}
