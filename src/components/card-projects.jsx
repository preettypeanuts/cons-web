import { slugify } from "@/lib/slugify";
import Image from "next/image";
import Link from "next/link";

export const CardProjects = ({ projects }) => {
    return (
        <>
            <section className="margin spacing">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((el, idx) => (
                        <Link
                            key={idx}
                            href={`/projects/${slugify(el.title)}`}
                        >
                            <div
                                className="p-4 border rounded-xl border-neutral-200 dark:border-neutral-600 hover:-translate-y-1 duration-300 group"
                            >
                                <div className="w-full max-h-80 h-80 rounded-lg overflow-hidden relative group">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={el.image}
                                        alt=""
                                        className="max-h-80  min-h-80 h-full w-full object-cover rounded-lg group-hover:scale-105 duration-300 ease-in-out"
                                    />
                                    <div className="absolute top-0 left-0 dark:bg-black bg-white text-mainColor px-3 py-1 rounded-br-lg text-sm font-medium ">
                                        <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-lg"></div>
                                        <div className="bg-white dark:bg-black dark:text-white rounded-out-tr-lg"></div>
                                        {el.category}
                                    </div>
                                </div>
                                <div className="pt-3 space-y-3">
                                    <h1 className="font-semibold text-xl group-hover:text-mainColor duration-300">
                                        {el.title}
                                    </h1>
                                    <p className="line-clamp-2 opacity-80 leading-tight">
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

        </>
    )
}