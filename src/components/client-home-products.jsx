'use client'
import { useProducts } from "@/hooks/useProducts";
import { CardProduct } from "./card-product"

export const ClientHomeProducts = () => {
    const { data, loading, error, } = useProducts({
        priority: true,
        limit: 8
    });

    return (
        <>
            <CardProduct texth1="Product" texth2="You Should Know" data={data} mode="carousel" />
        </>
    )
}