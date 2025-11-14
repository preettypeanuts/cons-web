import { ProductDetailComponent } from "@/components/product-detail-component";
import { productsData } from "@/system";

export default function ProductDetail() {
    return (
        <>
            <ProductDetailComponent  data={productsData[0]}/>
        </>
    )
}