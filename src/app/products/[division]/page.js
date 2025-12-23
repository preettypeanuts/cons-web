'use client'
import { BreadcrumbDynamic } from "@/components/breadcrumb-dynamic";
import { CardProduct, CardProducts } from "@/components/card-product";
import { useProduct, useProducts, useProductsByDivision } from "@/hooks/useProducts";
import { usePathname } from "next/navigation";

export default function ProductByDivisionPage() {
    const path = usePathname();

    const pathnames = path
        .split('/')
        .filter((x) => x)
        .map((segment) => segment.replace(/-/g, ' '));

    // Ambil division dari pathnames[1] dan normalize
    const division = pathnames[1]?.toLowerCase().trim();

    console.log('====================================');
    console.log('====================================');

    const { data, loading, error } = useProducts({
        division: division
    });
    console.log(data);



    return (
        <main className="spacing">
            <main className="margin space-y-5">
                <BreadcrumbDynamic />
                <h1 className="text-4xl md:text-6xl tracking-tighter text-balance pb-1 capitalize">
                    {pathnames[1]}
                </h1>

                {/* Error State */}
                {error && (
                    <div className="margin my-10">
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
                        </div>
                    </div>
                )}


                {/* Empty State */}
                {!loading && !error && data?.length === 0 && (
                    <div className="margin my-10">
                        <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
                            <p className="text-gray-600 dark:text-gray-400">
                                No products found in {pathnames[1]} division
                            </p>
                        </div>
                    </div>
                )}

            </main>

            <div className="margin my-10">
                {!error && data?.length > 0 && (
                    <CardProduct
                        data={data}
                        mode="grid"
                    />
                )}
            </div>
        </main>
    )
}