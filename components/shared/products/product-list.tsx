import { title } from "process";
import ProductsCard from "./product-card";

const Productist = ({data,title,limit}:{data:any;title?:string;limit?:number}) => {
    const limitData = limit ? data.slice(0, limit): data
    
    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>
            {data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {limitData.map((product:any) =>(
                        <ProductsCard key={product.slug} product={product}/>
                    ))}
                </div>
               
            ):(
                <div>
                    <p>No Products Found</p>
                </div>
            )}
        </div>
    );
}
 
export default Productist;