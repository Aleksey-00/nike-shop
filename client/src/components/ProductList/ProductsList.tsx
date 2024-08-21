import { IProduct } from '../../types'
import './index.css'

interface IProps {
  products: IProduct[]
}

export default function ProductsList({ products }: IProps) {
  return (
    <div className={products.length ? 'products-list' : 'products-list-empty'}>
      {
        !products.length ? 'Список продуктов пуст!'
        : products.map(product => <div key={product.id} className="products-list__wrapper">
          <div className="products-list__img">
            <img src={product.imgSrc} alt={`${product.name}${product.price}`} />
          </div>
            <div className="products-list__name">
              {product.name}
            </div>
          <div className="products-list__description">
            {product.description}
          </div>
          <div className="products-list__price">
            {`${product.price} руб`}
          </div>
          <div className="products-list__old-price">
            {`${product.oldPrice} руб`}
          </div>
        </div>)
      }
    </div>
  )
}