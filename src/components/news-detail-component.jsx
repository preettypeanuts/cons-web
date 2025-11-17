import Image from "next/image"

export const NewsDetailComponent = ({ data }) => {
    return (
        <>
            <section className="spacing">
                <div className="margin flex items-center justify-center">
                    <div className="max-w-4xl w-full space-y-5">
                        <div className="space-y-2">
                            <p className="text-sm uppercase font-medium text-mainColor">
                                {data.category}
                            </p>
                            <h1 className="font-bold text-4xl">
                                {data.title}
                            </h1>
                            <p className="line-clamp-2">
                                {data.excerpt}
                            </p>
                        </div>
                        <Image
                            width={500}
                            height={500}
                            src={data.image}
                            alt={data.title}
                            className="rounded-lg w-full h-[60lvh] min-h-[60lvh] max-h-[60lvh] object-cover"
                        />
                        <div dangerouslySetInnerHTML={{ __html: data.content }} className="prose">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}