import { connect } from "react-redux";

import { IProduct } from '../store/products/types';
import { RootState } from '../store/';
interface IProductProps {
  product?: IProduct
}

const product = ({ product }: IProductProps) => {
  return (
    <>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.value}</p>
          <ul>
            {product.modules && product.modules.map(module => (
              <li key={module.id}>{module.title}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  product: state.product.product
})

export default connect(mapStateToProps)(product)