import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';
import { GoodsModule } from './goods/goods.module';

@Module({
  imports: [
    MoviesModule,
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/entities/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
    AdminModule,
    GraphQLModule.forRoot({
      autoSchemaFile: '/commons/graphql/schema.gpl',
    }),
    GoodsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
