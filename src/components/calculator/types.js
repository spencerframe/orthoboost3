// ROI Calculator Types
export const CURRENT_PATIENTS_OPTIONS = [
  { id: 'A', label: '0-5', value: { min: 0, max: 5 } },
  { id: 'B', label: '6-15', value: { min: 6, max: 15 } },
  { id: 'C', label: '16+', value: { min: 16, max: 30 } }
];

export const REVENUE_OPTIONS = [
  { id: 'A', label: '$4,000', value: 4000 },
  { id: 'B', label: '$6,000', value: 6000 },
  { id: 'C', label: '$8,000+', value: 8000 }
];

export const BUDGET_OPTIONS = [
  { id: 'A', label: '$1k-$2k', value: { min: 1000, max: 2000 } },
  { id: 'B', label: '$2k-$4k', value: { min: 2000, max: 4000 } },
  { id: 'C', label: '$4k-$8k', value: { min: 4000, max: 8000 } }
];

export const getGrowthOptions = (budgetId) => {
  switch (budgetId) {
    case 'A':
      return [
        { id: 'A', label: '+1-3 🚲', value: { min: 1, max: 3 } },
        { id: 'B', label: '+2-4 ✈️', value: { min: 2, max: 4 } },
        { id: 'C', label: '+3-5 🚀', value: { min: 3, max: 5 } }
      ];
    case 'B':
      return [
        { id: 'A', label: '+2-4 🚲', value: { min: 2, max: 4 } },
        { id: 'B', label: '+3-5 ✈️', value: { min: 3, max: 5 } },
        { id: 'C', label: '+4-6 🚀', value: { min: 4, max: 6 } }
      ];
    case 'C':
      return [
        { id: 'A', label: '+4-6 🚲', value: { min: 4, max: 6 } },
        { id: 'B', label: '+6-10 ✈️', value: { min: 6, max: 10 } },
        { id: 'C', label: '+10-14 🚀', value: { min: 10, max: 14 } }
      ];
    default:
      return [];
  }
};