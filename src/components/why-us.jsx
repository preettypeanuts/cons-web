import { whyUs } from "@/system"

export const WhyUs = () => {
    return (
        <>
            <div className="spacing">
                <p className="text-4xl sm:text-4xl md:text-3xl lg:text-3xl font-light mb-6 margin flex items-center gap-1">
                    Why <br />
                    <span className="opacity-80">
                        Choose <br />
                    </span>
                    <span className="text-mainColor dark:text-orange-300">
                        Us?
                    </span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 opb-4 sm:pb-0">
                    {whyUs.map((el, idx) => (
                        <div
                            className={`
                                        ${idx === 0 && "invert"}
                                        ${idx === 1 && "bg-mainColor dark:bg-mainColor"}
                                        ${idx === 3 && "border bg-white dark:bg-black!"}
                                        bg-lightColor dark:bg-darkColor hover:invert duration-300 p-10
                                        `}
                            key={idx}
                        >
                            <div className="flex items-center justify-between mb-20">
                                <div className="text-4xl">
                                    {el.icon}
                                </div>
                                <div>
                                    0{idx + 1}.
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-xl md:text-2xl mb-3 sm:mb-3">
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
        </>
    )
}