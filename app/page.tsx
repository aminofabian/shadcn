// Example usage of Hero component with props
import React from 'react';
import Hero from '@/components/Hero';
import MyAccordion from '@/components/myComponents/MyAccordion';
import MyTable from '@/components/myComponents/myTable';
import * as data from '@/items/custom';

const App: React.FC = () => {  
  return (
    <div>
    <Hero
    title="Your Custom Hero Title"
    description="A custom description for your awesome project."
    cta="Click Me"
    />
    <MyAccordion items={data.accordionItems} />
    <MyTable caption={data.tableCaption} columns={data.tableColumns} data={data.tableData} />
    </div>
    );
  };
  
  export default App;
  