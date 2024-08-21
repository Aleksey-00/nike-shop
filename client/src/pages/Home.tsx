import ProductsList from '../components/ProductList/ProductsList'
import { getProducts } from '../api/service/getProducts'
import { getFilteredProducts } from '../api/service/getFilteredProducts'
import { useEffect, useState } from 'react'
import { IProduct } from '../types'
import SearchBar from '../components/SearchPanel/SearchBar'
import useDebounce from '../hooks/useDebounce'

let copyProducts: IProduct[] = []

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response.data)
        copyProducts = response.data
      })
  }, [])


  const handleSearch = (search: string) => {
    getFilteredProducts(search).then(response => setProducts(response.data))
  }

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) handleSearch(debouncedSearchTerm)
    if (!debouncedSearchTerm) setProducts(copyProducts)
  }, [debouncedSearchTerm])

  return <>
    <SearchBar
      value={searchTerm}
      onChange={(value) => setSearchTerm(value)}
      placeholder={'Введите название товара...'}
    />
    <ProductsList products={products} />
  </>
}