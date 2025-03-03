import Productist from "@/components/shared/products/product-list";
import sampleData from "@/db/sample-data";

export const metadata = {
  title: 'Home'
}

const Homepage = () => {
  return (   
    <>
      <Productist data={sampleData.products} title="Newest Arrivals"/>
      
    </> 
  );
}
 
export default Homepage;
