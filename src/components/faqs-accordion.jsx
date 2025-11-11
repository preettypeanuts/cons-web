import { faqs } from "@/system"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const FaqsAccordion = () => {
    return (
        <section className="margin spacing">
            <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-10">
                <div className="col-span-2 ml-3">
                    <h1 className="text-xs uppercase">
                        FAQs
                    </h1>
                </div>
                <div className="col-span-8">
                    <Accordion
                        type="single"
                        collapsible
                        className={"space-y-2"}
                    >
                        {faqs.map((el, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className={"bg-lightColor dark:bg-darkColor px-4  text-lg lg:text-xl font-light"}>
                                    {el.question}
                                </AccordionTrigger>
                                <AccordionContent className={"px-4 bg-darkColor text-lightColor dark:bg-lightColor dark:text-darkColor rounded-lg pt-3 mt-2"}>
                                    {el.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}