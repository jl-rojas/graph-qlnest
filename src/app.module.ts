import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({}),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
      context: ({ req }) => ({ req }),
    }),
    UserModule,
    AuthModule,
    ItemsModule,
  ],
})
export class AppModule {}
