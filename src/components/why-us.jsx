import { whyUs } from "@/system"
import Image from "next/image"

export const WhyUs = () => {
    return (
        <>
            <div className="spacing">
                <div className="relative">
                    <Image
                        width={1000}
                        height={1000}
                        className="w-full h-lvh sm:h-[80lvh] md:h-[80lvh] object-cover grayscale"
                        src="https://images.unsplash.com/photo-1734950601827-a6af7676438c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1734"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-lightColor/70 dark:bg-darkColor/70"></div>
                    <div className="absolute inset-0 h-auto flex flex-col justify-between p-4 sm:m-6 md:m-10">
                        <p className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-0">
                            <span className="opacity-60">
                                Why <br />
                            </span>
                            <span className="opacity-80">
                                Choose <br />
                            </span>
                            <span className="text-orange-400 dark:text-orange-300">
                                Us?
                            </span>
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 overflow-y-auto max-h-[calc(100lvh-200px)] sm:max-h-none sm:overflow-visible pb-4 sm:pb-0">
                            {whyUs.map((el, idx) => (
                                <div
                                    className="bg-lightColor dark:bg-darkColor hover:invert duration-300 p-4 sm:p-4 rounded-lg"
                                    key={idx}
                                >
                                    <div className="flex flex-col gap-2 text-2xl sm:text-2xl md:text-3xl mb-3 sm:mb-3">
                                        <h1 className="font-extralight leading-tight md:max-w-30">
                                            {el.title}
                                        </h1>
                                    </div>
                                    <p className="text-xs sm:text-xs opacity-80 leading-relaxed">
                                        {el.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}