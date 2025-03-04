import ProductList from "@/components/shared/products/product-list";
import { getProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: 'Home'
}

const Homepage = async () => {
  
  const latestProducts = await getProducts();

  return (   
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4}/>
      
    </> 
  );
}
 
export default Homepage;
