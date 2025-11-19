import { CardNews } from "@/components/card-news";
import { FilterSelect } from "@/components/filter-select";
import { HighligtedNews } from "@/components/highlighted-news";
import { ReBanner } from "@/components/re-banner";
import { SearchBar } from "@/components/search-bar";
import { newsData } from "@/system";

export default function News() {
    return (
        <>
            <ReBanner
                title="Today"
                highlightText="Updates"
                titleClassName="text-3xl! md:text-4xl! flex-row! gap-1"
                buttonClassName="hidden"
                imageAlt="Contact Us Banner"
                onButtonClick={null}
            />
            <HighligtedNews
                data={newsData[0]}
            />
            <section
                className="spacing margin space-y-10"
            >
                <div className="flex items-center justify-between">
                    <SearchBar
                        className="w-full max-w-sm"
                        placeholder="Judul, kategori..."
                    />
                    <FilterSelect
                        placeholder="Filter Kategori"
                        items={[
                            {
                                label: "Constructions",
                                value: "constructions"
                            },
                            {
                                label: "Mining",
                                value: "mining"
                            },
                        ]}
                    />
                </div>
                <CardNews
                    data={newsData}
                    useSpacing={false}
                    useMargin={false}
                />
            </section>
        </>
    )
}