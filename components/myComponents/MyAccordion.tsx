import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemProps {
  value: string;
  triggerText: string;
  content: string;
}

interface MyAccordionProps {
  items: AccordionItemProps[];
}

const MyAccordion: React.FC<MyAccordionProps> = ({ items }) => {
  return (
    <div className='px-10'>
    <Accordion type="single" collapsible>
    {items.map((item, index) => (
      <AccordionItem key={index} value={item.value}>
      <AccordionTrigger>{item.triggerText}</AccordionTrigger>
      <AccordionContent>{item.content}</AccordionContent>
      </AccordionItem>
      ))}
      </Accordion>
      </div>
      );
    };
    
    export default MyAccordion;
    