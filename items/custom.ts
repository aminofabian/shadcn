// data.js

export const tableCaption = 'A list of Recent Clients.';

export const tableColumns = [
  { label: 'Client 1', className: 'w-[100px]' },
  { label: 'Bought' },
  { label: 'Date' },
  { label: 'Amount', className: 'text-right' },
];

export const accordionItems = [
  {
    value: 'item-1',
    triggerText: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    triggerText: 'Is it accessibleaaa?',
    content: 'Yes. It adheres to the WAI-ARIA design patternaa.',
  },
  {
    value: 'item-3',
    triggerText: 'Is it accessiblebbb?',
    content: 'Yes. It adheres to the WAI-ARIA design patternbb.',
  },
];

export const tableData = [
  {
    cells: ['1', 'Airtime', '2.1.2024', '250.00/='],
  },
  // Add more rows as needed
];
