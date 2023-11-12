import ProductDataService from './database/ProductService.js';
import { productRows } from './datatablesource';

export const bulkUploadProducts = async (event) => {
  productRows.map(async (product) => {
    product.price = parseFloat(product.price);
    // console.log('Product body ', product, Math.floor(product.price));
    await ProductDataService.addProducts(product);
    console.log('New Product Added Succesfully ', product.productId);
  });
};

export const buldDeleteProducts = async (event) => {
  const data = await ProductDataService.getAllProducts();
  console.log(data.docs);
  // data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  data.docs.map(async (product) => {
    await ProductDataService.deleteProduct(product.id);
    console.log('Delete product ', product.id, product.productId);
  });
};
