import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './users/user.module';
import { AuthzModule } from './authz/authz.module';

@Module({
	imports: [
    TypeOrmModule.forRoot({}),
		GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
      context: ({ req }) => {
          return {
            request: req,
          };
      },
    }),
    UserModule,
    AuthzModule
  ],
})
export class AppModule {}