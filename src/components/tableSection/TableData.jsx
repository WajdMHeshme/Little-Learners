const storedFeeStructure = localStorage.getItem('FeeStructure');
const storedAdditionalServices = localStorage.getItem('AdditionalServices');

export const FeeStructure = storedFeeStructure
    ? JSON.parse(storedFeeStructure)
    : [
        {
            program: 'Nursery',
            ageGroup: '2 - 3 Years',
            tuition: '$1,686',
            registration: '$162',
            activity: '$12',
        },
        {
            program: 'Pre - Kindergartens',
            ageGroup: '3 - 4 Years',
            tuition: '$2,686',
            registration: '$220',
            activity: '$16',
        },
        {
            program: 'Kindergarten',
            ageGroup: '4 - 5 Years',
            tuition: '$3,686',
            registration: '$340',
            activity: '$20',
        },
    ];

export const AdditionalServices = storedAdditionalServices
    ? JSON.parse(storedAdditionalServices)
    : [
        {
            service: 'Before and After-School Care',
            price: '$120 / per month',
        },
        {
            service: 'Language Immersion Program',
            price: '$60 / per semester',
        },
        {
            service: 'Transportation (optional)',
            price: '$80 / per month',
        },
    ];

if (!storedFeeStructure) {
    localStorage.setItem('FeeStructure', JSON.stringify(FeeStructure));
}

if (!storedAdditionalServices) {
    localStorage.setItem('AdditionalServices', JSON.stringify(AdditionalServices));
}