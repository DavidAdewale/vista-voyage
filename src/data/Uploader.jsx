import supabase from '../services/supabase';
import { tourists } from './data-tourists';
import { tourBookings } from './data-bookings';
import { tours } from './data-tours';
import { useState } from 'react';
import Button from '../ui/Button';

async function deleteTourist() {
  const { error } = await supabase.from('tourists').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteTours() {
  const { error } = await supabase.from('tours').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteTourBookings() {
  const { error } = await supabase.from('tourBookings').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function createTourists() {
  const { error } = await supabase.from('tourists').insert(tourists);
  if (error) console.log(error.message);
}

async function createTours() {
  const { error } = await supabase.from('tours').insert(tours);
  if (error) console.log(error.message);
}

async function createTourBooking() {
  const { data: touristsId } = await supabase
    .from('tourists')
    .select('id')
    .order('id');

  const allTouristIds = touristsId.map((tourist) => tourist.id);
  const { data: toursIds } = await supabase
    .from('tours')
    .select('id')
    .order('id');

  const allTourIds = toursIds.map((tour) => tour.id);

  const finalTourBookings = tourBookings.map((booking) => {
    const tour = tours.at(booking.tourId - 1);
    const tourPrice = tour.regularPrice - tour.discount;
    const extrasPrice = booking.isVip ? 2000 : 0;
    const totalPrice = tourPrice + extrasPrice;

    // console.log(booking.guestId - 1);
    // console.log(
    //   allTouristIds.at(Math.floor(Math.random() * allTouristIds.length) - 1)
    // );

    return {
      ...booking,
      tourId: allTourIds.at(Math.floor(Math.random() * allTourIds.length) - 1),
      guestId: allTouristIds.at(
        Math.floor(Math.random() * allTouristIds.length) - 1
      ),
      tourPrice,
      extrasPrice,
      totalPrice,
    };
  });

  const { error } = await supabase
    .from('tourBookings')
    .insert(finalTourBookings);

  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteTourBookings();
    await deleteTourist();
    await deleteTours();

    // Bookings need to be created LAST
    await createTourBooking();
    await createTourists();
    await createTours();
    console.log('upload');

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteTourBookings();
    await createTourBooking();
    console.log('anotherupload');
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: 'auto',
        // backgroundColor: 'black',
        padding: '1px',
        borderRadius: '5px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      {/* <h3>SAMPLE DATA</h3> */}

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
