import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './users/user.module';

@Module({
	imports: [
    TypeOrmModule.forRoot({}),
		GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
    }),
    UserModule
	],
})
export class AppModule {}