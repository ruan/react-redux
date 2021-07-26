import { connect } from "react-redux";

import * as ProductActions from '../store/actions/product'

const ListProducts = ({products, toggleProduct}) => {
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
const mapStateToProps = state => ({
  products: state.product.products
})

const mapDispatchToProps = dispatch => ({
  toggleProduct: (product) => dispatch(ProductActions.toggleProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);