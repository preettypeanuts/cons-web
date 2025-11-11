import Image from "next/image";
import { Button } from "./ui/button"
import { BsSoundwave } from "react-icons/bs";
export const HomeBanner = () => {
    return (
        <>
            <div className="spacing margin">
                <div className="grid grid-cols-2 gap-20">
                    <h1 className="text-[10lvw] uppercase font-bold flex items-end text-secondaryDark dark:text-neutral-300  tracking-tighter leading-30">
                        Rise

                        <br />
                        Beyond
                        <span className="w-10 h-10 bg-orange-400 block rounded-full mb-2 ml-1.5"></span>
                    </h1>
                    <div className="flex flex-col items-start justify-end gap-3">
                        <p className="text-max-2xl leading-tight tracking-wide">
                            Where Innovation Meets Responsibility — Shaping a Better Tomorrow <br /> for All.
                        </p>
                        <Button
                            size={"sm"}
                            className={"text-xs"}
                        >
                            <BsSoundwave />   Get Connected
                        </Button>
                    </div>
                </div>
                <div className="mt-10 px-2">
                    <Image
                        width={1000}
                        height={1000}
                        src="https://images.unsplash.com/photo-1576675924745-9a8eb5fdcb40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548"
                        alt="Banner Image" 
                        className="w-full object-cover saturate-0 hover:saturate-150 hue-rotate-190 duration-300 ease-in-out max-h-[60lvh]"
                        />
                </div>
            </div>
        </>
    )
}