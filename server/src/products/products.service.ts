import { Injectable } from '@nestjs/common'
import { Products } from './products.model'
import { InjectModel } from '@nestjs/sequelize'
import { ProductDto } from './dto/create-products.dto'
import { Op } from 'sequelize'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products) private readonly productRepository: typeof Products) {}

  async createProduct(dto: ProductDto) {
    return await this.productRepository.create(dto)
  }

  async getProducts() {
    return await this.productRepository.findAll()
  }

  async getProductsBySearch(search: string) {
    return await this.productRepository.findAll({
      where: {
        name: { [Op.iLike]: `%${search}%` }
      }
    })
  }
}
