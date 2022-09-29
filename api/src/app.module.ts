import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantsModule } from './modules/public/tenants/tenants.module';
import { TenancyModule } from './modules/tenancy/tenancy.module';
import { CatsModule } from './modules/tenanted/cats/cats.module';

import * as ormconfig from './orm.config';
import { SnakeNamingStrategy } from './snake-naming.strategy';
import { join } from 'path';
import { AddressesModule } from './addresses/addresses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'cat',
      password: 'cat',
      database: 'cat',
      namingStrategy: new SnakeNamingStrategy(),
      autoLoadEntities: true,
      entities: [join(__dirname, './modules/public/**/*.entity{.ts,.js}')],
      migrations: [join(__dirname, './migrations/public/*{.ts,.js}')]

    }),
    TypeOrmModule.forRoot(ormconfig),
    TenantsModule,
    TenancyModule,
    CatsModule,
    AddressesModule
  ],
})
export class AppModule {}
