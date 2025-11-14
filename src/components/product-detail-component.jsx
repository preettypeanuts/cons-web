import Image from "next/image"

export const ProductDetailComponent = ({ data }) => {
    return (
        <>
            <section className="margin spacing grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <Image
                        width={500}
                        height={500}
                        src={data.imageUrl}
                        alt={data.productName}
                        className="w-full h-full object-cover aspect-square rounded-lg"
                    />
                </div>
                <div className="space-y-3">
                    <p className="opacity-70 uppercase text-sm font-medium">
                        {data.division}
                    </p>
                    <h1 className="text-5xl font-bold ">
                        {data.productName}
                    </h1>
                    <p>
                        {data.descriptions}
                    </p>
                </div>
            </section>
        </>
    )
}