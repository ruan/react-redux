import { connect } from "react-redux";

import * as ProductActions from '../store/products/actions';
import { IProduct, IProductState } from '../store/products/types';

interface IListProductsProps {
  products: IProduct[],
  toggleProduct(product: IProduct): any
}

const ListProducts = ({products, toggleProduct}: IListProductsProps) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {
        products.map(product => (
          <div key={product.id} style={{marginBottom: 20}}>
            <strong>{product.title}</strong><br />
            <span>R$ {product.value},00</span><br />
            <button onClick={() => toggleProduct(product)}>Selecinar</button>
          </div>
        ))
      }
    </div>
  )
}
const mapStateToProps = (state: IProductState) => ({
  products: state.product.products
})

const mapDispatchToProps = (dispatch: Function) => ({
  toggleProduct: (product: IProduct) => dispatch(ProductActions.toggleProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);