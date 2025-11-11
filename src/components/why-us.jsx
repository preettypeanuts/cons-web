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
                        className="w-full h-[80lvh] object-cover grayscale brightness-40"
                        src="https://images.unsplash.com/photo-1734950601827-a6af7676438c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1734"
                        alt="" />
                        <div></div>
                    <div className="absolute inset-0 h-auto flex flex-col justify-between m-10">
                        <p className="text-6xl font-bold col-span-2">
                            <span className="opacity-60">
                                Why <br />
                            </span>
                            <span className="opacity-80">
                                Choose <br />
                            </span>
                            <span className="text-6xl">
                                Us?
                            </span>
                        </p>
                        <div className="col-span-8 space-y-3 grid grid-cols-4 gap-4">
                            {whyUs.map((el, idx) => (
                                <div
                                    className={`bg-darkColor hover:invert hover:scale-101 h-full duration-300 p-4 rounded-lg`}
                                    key={idx}
                                >
                                    <div className="flex flex-col gap-2 text-3xl max-w-30 mb-3">
                                        {/* <div>
                                            {el.icon}
                                        </div> */}
                                        <h1 className="font-extralight">
                                            {el.title}
                                        </h1>
                                    </div>
                                    <p className="text-xs opacity-80">
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