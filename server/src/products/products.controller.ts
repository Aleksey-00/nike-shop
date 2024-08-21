import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductDto } from './dto/create-products.dto'
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts()
  }

  @Post('/create')
  createProduct(@Body() productDto: ProductDto) {
    return this.productsService.createProduct(productDto)
  }

  @Get('/:search')
  getProductBySearch(@Param('search') search: string) {
    return this.productsService.getProductsBySearch(search)
  }
}
