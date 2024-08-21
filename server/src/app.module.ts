import { Module } from '@nestjs/common'
import { ProductsModule } from './products/products.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { Products } from './products/products.model'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nike-shop',
      models: [Products],
      autoLoadModels: true
    }),
    ProductsModule
  ]
})
export class AppModule {}
