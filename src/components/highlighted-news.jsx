import Image from "next/image"
import { MdArrowOutward } from "react-icons/md";
export const HighligtedNews = ({ data }) => {
    return (
        <>
            <section className="margin -mt-20 grid grid-cols-2 gap-10">
                <div className="group rounded-lg overflow-hidden min-h-[55lvh] max-h-[55lvh] h-[55lvh]">
                    <Image
                        width={500}
                        height={500}
                        src={data.image}
                        className="w-full min-h-[55lvh] max-h-[55lvh] h-[55lvh] object-cover rounded-lg group-hover:scale-110 duration-300 group-hover:brightness-60"
                        alt={data.title}
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-5 hover:scale-102 duration-300 group">
                    <p className="text-xs uppercase font-medium opacity-70">
                        {data.category}
                    </p>
                    <h1 className="font-bold text-4xl tracking-tight group-hover:text-mainColor duration-300">
                        {data.title}
                    </h1>
                    <div className="space-y-5">
                        <div className="prose prose-xl line-clamp-3 opacity-90" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                    </div>
                    <div className="flex items-center gap-1">
                        {data.tags.map((el, i) => (
                            <p
                                key={i}
                                className="px-3 py-1 dark:bg-darkColor bg-lightColor rounded-full text-xs text-"
                            >
                                #{el}
                            </p>
                        ))}
                    </div>
                    <button
                        className="cursor-pointer flex items-center gap-1 uppercase font-medium text-sm text-mainColor group hover:translate-x-3 duration-300 hover:px-3 hover:py-1 hover:bg-foreground rounded-full"
                    >
                        Read More <MdArrowOutward className="rotate-90 group-hover:rotate-45 duration-300 group-hover:text-mainColor" />
                    </button>
                </div>
            </section>
        </>
    )
}