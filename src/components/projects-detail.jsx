import Image from "next/image"

export const ProjectDetail = ({ data }) => {
    return (
        <>
            <section className="flex items-center justify-center margin spacing">
                <div className="max-w-4xl w-full space-y-10">
                    <div>
                        <p className="font-bold text-xs text-mainColor uppercase">
                            {data.category}
                        </p>
                        <p className="opacity-65 text-sm">
                            21 October 2025
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold">
                            {data.title}
                        </h1>

                    </div>
                    <Image
                        width={500}
                        height={500}
                        src={data.image}
                        className="w-full h-[60lvh] object-cover rounded-lg"
                        alt={data.title}
                    />
                    <div>
                        {data.description}
                    </div>
                </div>
            </section>
        </>
    )
}