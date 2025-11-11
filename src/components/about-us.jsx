import { companyStats } from "@/system"

export const AboutUs = () => {
    return (
        <>
            <div className="grid grid-cols-10 margin spacing">
                <div className="col-span-2">
                    <h1 className="uppercase font-light text-xs">
                        About Us
                    </h1>
                </div>
                <div className="col-span-8">
                    <p className="text-3xl leading-tight tracking-wider font-normal text-justify">
                        Conss adalah perusahaan manufaktur dan distributor yang memfokuskan pada material industri: milk lime, limestone, powder lime, calcium carbonate, clay, zeolit, bentonite, pasir kuarsa, silica sand, dan pembenah tanah. Kami berkomitmen menyediakan produk berkualitas tinggi, siap pakai, dan layanan profesional untuk mitra kerja dan pelanggan.
                    </p>
                    <div className="grid grid-cols-4 mt-10 gap-10">
                        {companyStats.map((el, idx) => (
                            <div>
                                <div className="flex items-center text-6xl font-extralight mb-10">
                                    <p className="text-orange-400 dark:text-orange-200">
                                        {el.value}
                                        {el.suffix}
                                    </p>
                                </div>

                                <div>
                                    <h1 className="text-lg">
                                        {el.label}
                                    </h1>
                                    <p className="text-xs opacity-70">
                                        {el.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}