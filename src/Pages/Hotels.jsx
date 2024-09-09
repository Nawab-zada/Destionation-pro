import React, { useState } from 'react';

const HotelReservation = () => {
    const [hotelData, setHotelData] = useState({
        destination: '',
        checkIn: '',
        checkOut: '',
        guests: '',
    });
    const [showTravelerOptions, setShowTravelerOptions] = useState(false);
    const [travelers, setTravelers] = useState({
        adults: 1,
        children: 0,
        rooms: 1,
    });
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotelData({
            ...hotelData,
            [name]: value,
        });
    };

    const handleTravelerChange = (e) => {
        const { name, value } = e.target;
        setTravelers({
            ...travelers,
            [name]: value,
        });
    };

    const toggleTravelerOptions = () => {
        setShowTravelerOptions(!showTravelerOptions);
    };

    const fetchCityCode = async (destination) => {
        try {
            const response = await fetch(`/search?keyword=${destination}`);
            const data = await response.json();
            const cityCode = data.cityCodes[0]; // Adjust based on actual API response
            return cityCode;
        } catch (error) {
            console.error("Error fetching city code:", error);
            setError("Failed to fetch city code.");
        }
    };

    const searchHotels = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const cityCode = await fetchCityCode(hotelData.destination);
            if (cityCode) {
                const response = await fetch(`/search?cityCode=${cityCode}&checkInDate=${hotelData.checkIn}&checkOutDate=${hotelData.checkOut}&adults=${travelers.adults}&children=${travelers.children}&roomQuantity=${travelers.rooms}`);
                const data = await response.json();
                setHotels(data.data); // Adjust based on actual API response
            }
        } catch (error) {
            console.error("Error fetching hotels:", error);
            setError("Failed to fetch hotels.");
        } finally {
            setLoading(false);
        }
    };

    const trendingDestinations = [
        {
            image: '/path/to/image1.jpg',
            destination: 'Paris, France',
            description: 'Romantic city with iconic landmarks like the Eiffel Tower.',
        },
        // Add other destinations...
    ];

    return (
        <div className='bg-[#213638] text-white'>
            <header className='px-5 sm:px-14 py-20 flex flex-col gap-10'>
                <main className='flex flex-wrap gap-5 justify-between'>
                    <h1 className='max-w-[18rem] text-3xl sm:text-5xl shadows'>Destination Travel & Tours</h1>
                </main>

                {/* Search Form */}
                <form onSubmit={searchHotels} className='flex flex-wrap gap-4 text-black'>
                    <div className='bg-white py-2 pl-10 flex-grow rounded-l-2xl'>
                        <p className='font-semibold'>Destination</p>
                        <input 
                            onChange={handleChange} 
                            value={hotelData.destination} 
                            type="text" 
                            name="destination" 
                            placeholder='City, Hotel Name' 
                            className='py-2' 
                        />
                    </div>
                    <div className='bg-white py-2 flex-grow px-3'>
                        <p className='font-semibold'>Check-In</p>
                        <input type="date" onChange={handleChange} value={hotelData.checkIn} name="checkIn" className='py-2' />
                    </div>
                    <div className='bg-white py-2 flex-grow px-3'>
                        <p className='font-semibold'>Check-Out</p>
                        <input type="date" onChange={handleChange} value={hotelData.checkOut} name="checkOut" className='py-2' />
                    </div>
                    <div className='relative bg-white py-2 px-3 flex-grow'>
                        <p className='font-semibold'>Travelers</p>
                        <div onClick={toggleTravelerOptions} className='cursor-pointer py-2 bg-[#f0f0f0] rounded-r-2xl'>
                            {travelers.adults} Adults, {travelers.children} Children, {travelers.rooms} Room(s)
                        </div>
                        {showTravelerOptions && (
                            <div className='absolute top-16 left-0 bg-white shadow-lg rounded-xl p-4 z-10'>
                                {/* Travelers Input */}
                                <div className='flex justify-between items-center mb-3'>
                                    <label>Adults</label>
                                    <input
                                        type="number"
                                        name="adults"
                                        value={travelers.adults}
                                        min="1"
                                        onChange={handleTravelerChange}
                                        className='w-20 p-2 border border-gray-300 rounded-md'
                                    />
                                </div>
                                {/* Add more travelers options here */}
                            </div>
                        )}
                    </div>
                    <div className='bg-[#026ce8] text-white px-7 flex-grow rounded-xl grid place-items-center'>
                        <button type='submit'>
                            Search Hotels
                        </button>
                    </div>
                </form>
            </header>

            {/* Trending Destinations */}
            <section className='px-5 sm:px-14 py-20'>
                <h2 className='text-2xl sm:text-4xl mb-10'>Explore stays in trending destinations</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {trendingDestinations.map((destination, index) => (
                        <div key={index} className='bg-white text-black rounded-xl shadow-lg'>
                            <img src={destination.image} alt={destination.destination} className='w-full h-40 object-cover rounded-t-xl' />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>{destination.destination}</h3>
                                <p className='mt-2'>{destination.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Search Results */}
            <section className='px-5 sm:px-14 py-20'>
                <h2 className='text-2xl sm:text-4xl mb-10'>Hotel Results</h2>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {hotels.length > 0 ? hotels.map((hotel, index) => (
                        <div key={index} className='bg-white text-black rounded-xl shadow-lg p-4'>
                            <h3 className='text-xl font-semibold'>{hotel.hotel.name}</h3>
                            <p className='mt-2'>{hotel.hotel.address.lines[0]}</p>
                            <p className='mt-2'>{hotel.hotel.contact.phone}</p>
                            {/* Add more hotel details as needed */}
                        </div>
                    )) : (
                        <p>No hotels found.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HotelReservation;
