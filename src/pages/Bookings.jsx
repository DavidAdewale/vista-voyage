import SectionHeading from '../ui/SectionHeading';

const filterOptions = {
  filterField: 'filter',
  options: [
    { value: 'all', label: 'All' },
    { value: 'regular', label: 'Regular' },
    { value: 'vip', label: 'VIP' },
  ],
};

const sortOptions = [
  { value: 'amount-asc', label: 'Sort by amount (Low to high)' },
  { value: 'amount-dsc', label: 'Sort by amount (High to low )' },
  {
    value: 'tourDate-asc',
    label: 'Sort by tour date (earliest)',
  },
  { value: 'tourDate-dsc', label: 'Sort by tour date (latest)' },
];

function Bookings() {
  return (
    <>
      <div>
        <SectionHeading
          heading="Bookings"
          filterOptions={filterOptions}
          sortOptions={sortOptions}
        />
      </div>
    </>
  );
}

export default Bookings;
