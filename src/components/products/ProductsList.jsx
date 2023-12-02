const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div className="card-container">
      {products.map((product) => (
      <div key={product.id}>
        <div>
          <h3>{product.price}</h3>
        </div>
        <img src={product.image} alt={product.title} width="100px" />
      </div>
      ))}
    </div>
  );
};

export default ProductsList;
