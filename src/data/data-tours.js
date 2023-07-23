import { supabaseUrl } from '../services/supabase';

const imageUrl = `${supabaseUrl}/storage/v1/object/public/tour-images/`;

export const tours = [
  {
    name: 'Kigali',
    maxCapacity: 10,
    regularPrice: 3000,
    discount: 0,
    image: imageUrl + 'kigali.jpg',
    description:
      "Discover the vibrant city of Kigali, Rwanda's captivating capital, where modernity and rich cultural heritage converge. Explore bustling markets, learn about Rwanda's remarkable history, and immerse yourself in the beauty of its lush landscapes.",
  },
  {
    name: 'Paris',
    maxCapacity: 8,
    regularPrice: 4500,
    discount: 20,
    image: imageUrl + 'paris.jpg',
    description:
      'Embark on a magical journey to the enchanting city of Paris, the City of Lights. Marvel at iconic landmarks like the Eiffel Tower and Louvre Museum, indulge in delectable French cuisine, and stroll along the charming streets, lined with romance and artistry.',
  },
  {
    name: 'Seychelles',
    maxCapacity: 10,
    regularPrice: 3800,
    discount: 0,
    image: imageUrl + 'seychelles.jpg',
    description:
      'Uncover the breathtaking paradise of Seychelles, an archipelago of tropical islands surrounded by crystal-clear waters and pristine white beaches. Experience pure relaxation in luxurious resorts, encounter fascinating marine life through snorkeling and diving, and witness stunning sunsets over the Indian Ocean.',
  },
];
