import { connect } from "react-redux";

const product = ({product}) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.value}</p>
      <ul>
      {product.modules && product.modules.map(module => (
        <li key={module.id}>{module.title}</li>
      ))}
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => ({
  product: state.product.product
})
export default connect(mapStateToProps)(product)