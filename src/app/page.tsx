import Carousel from "@/components/Carousel/Carousel";
import Product from "@/serverComponents/Products/Product";


export default function Home() {
  return (
    
    <div className="bg-neutral-50">
    <Carousel/>
      <Product/>
    </div>
  );
}
