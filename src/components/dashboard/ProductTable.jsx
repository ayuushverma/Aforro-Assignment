import topSelling from "../../assets/top-selling-products.png"
const ProductTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-[340px] p-6">
      <h2 className="text-lg font-semibold mb-4">
        Top Selling Products
      </h2>
      <img
        src={topSelling}
        alt="Products"
        className="w-full h-full object-contain"
        />
    </div>
  );
};

export default ProductTable;