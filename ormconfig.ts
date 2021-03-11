import { TypeOrmModuleOptions } from '@nestjs/typeorm';

let ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormConfig;
