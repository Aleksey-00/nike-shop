import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({ tableName: 'products' })
export class Products extends Model<Products> {
  @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
  id: number

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.STRING, allowNull: false })
  description: string

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  price: number

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  oldPrice: number

  @Column({ type: DataType.STRING, allowNull: false })
  imgSrc: string
}
