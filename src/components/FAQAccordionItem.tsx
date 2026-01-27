import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

interface FAQAccordionItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
}

export default function FAQAccordionItem({
  value,
  title,
  children,
}: FAQAccordionItemProps): React.JSX.Element {
  return (
    <AccordionItem value={value} className="border-white/20">
      <AccordionTrigger className="text-white hover:text-white/80 text-left text-lg md:text-xl [&>svg]:text-white/70">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-white/90 text-base md:text-lg leading-relaxed">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
