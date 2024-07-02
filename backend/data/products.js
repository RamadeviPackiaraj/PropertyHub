const products = [
    {

        name: 'Modern Downtown Apartment',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
            'Spacious and modern apartment in the heart of downtown. Features include large windows, city views, and access to amenities such as gym and rooftop terrace.',
        type: 'Apartment',
        brand: 'NIL',
        category: 'NIL',
        price: 10000000,
        countInStock: 0,
        rating: 4.5,
        numReviews: 12,
    },
    {

        name: 'Suburban Family Home',
        image: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=',
        description:
            'Charming family home located in a quiet suburban neighborhood. Features include a large backyard, updated kitchen, and nearby schools and parks.',
            brand: 'NIL',
            category: 'NIL',
        price: 2000000,
        countInStock: 0,
        rating: 4.0,
        numReviews: 8,
    },
    {

        name: 'Luxury Beachfront Villa',
        image: 'https://media.istockphoto.com/id/1388026461/photo/apartment-buildings-in-a-residential-area.jpg?s=612x612&w=0&k=20&c=GCy56iiHP2PtU_NWXQ02lHAMCzAZehH15k_akMS17gs=',
        description:
            'Luxurious villa with stunning ocean views and private beach access. Features spacious living areas, infinity pool, and landscaped gardens.',
            brand: 'NIL',
            category: 'NIL',
        price: 2000000,
        countInStock: 0,
        rating: 3,
        numReviews: 12,
    },
    {

        name: 'Cozy Townhouse with Garden',
        image: 'https://media.istockphoto.com/id/1361546459/photo/new-aprtment-building-in-a-housing-deveopment-on-a-sunny-autumn-day.jpg?s=612x612&w=0&k=20&c=TFNW47QDc5FGI-1n8M5Ug_pujtTkVFDazWqLfLvHt5o=',
        description:
            'Quaint townhouse nestled in a peaceful neighborhood. Features include a private garden, updated kitchen, and easy access to local shops and schools.',
            brand: 'NIL',
            category: 'NIL',
        price: 3000000,
        countInStock: 0,
        rating: 5,
        numReviews: 12,
    },
    {

        name: 'Mountain View Cabin Retreat',
        image: 'https://media.istockphoto.com/id/486644087/photo/apartment-building.jpg?s=612x612&w=0&k=20&c=jFP_iJEQYphmb4BWP6KfFUNBdZaGUOe1N5xOo3icFQw=',
        description:
            'Charming cabin with breathtaking mountain views. Perfect for nature lovers seeking a serene getaway. Features include wood interiors and outdoor deck.',
            brand: 'NIL',
            category: 'NIL',
        price: 2000000,
        countInStock: 0,
        rating: 3.5,
        numReviews: 10,
    },
    {

        name: 'Historic City Loft',
        image: 'https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8=',
        description:
            'Spacious loft apartment in a historic building downtown. Features include exposed brick walls, high ceilings, and proximity to cultural attractions.',
            brand: 'NIL',
            category: 'NIL',
        price: 4000000,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {

        name: 'Modern Skyline Penthouse',
        image: 'https://media.istockphoto.com/id/1161036960/photo/residential-area-with-apartment-buildings-in-the-city.jpg?s=612x612&w=0&k=20&c=KrKhLVT7eu49F9IhkK67ShHoMzZEuy556fRJ1OG62pU=',
        description:
            'Luxurious penthouse with stunning skyline views. Features include floor-to-ceiling windows, rooftop terrace, and high-end finishes throughout.',
            brand: 'NIL',
            category: 'NIL',
        price: 2000000,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {

        name: 'Historic City Loft',
        image: 'https://media.istockphoto.com/id/1344083240/photo/modern-living-room.jpg?s=612x612&w=0&k=20&c=yyaXPu8ENPlzOtDuhmbiqbvTU-DoTnmPyRwQ-ro7h0k=',
        description:
            'Spacious loft apartment in a historic building downtown. Features include exposed brick walls, high ceilings, and proximity to cultural attractions.',
            brand: 'NIL',
            category: 'NIL',
        price: 300000,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {

        name: 'Modern Suburban Home',
        image: 'https://media.istockphoto.com/id/1161036960/photo/residential-area-with-apartment-buildings-in-the-city.jpg?s=612x612&w=0&k=20&c=KrKhLVT7eu49F9IhkK67ShHoMzZEuy556fRJ1OG62pU=',
        description: 'Beautiful contemporary home located in a quiet suburban neighborhood. Features include spacious living areas, landscaped garden, and modern kitchen.',
        brand: 'NIL',
        category: 'NIL',
        price: 2000000,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Luxury Coastal Villa',
        image: 'https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=',
        description: 'Exquisite villa overlooking the ocean with private beach access. Features include infinity pool, expansive terraces, and luxury interiors.',
        brand: 'NIL',
        category: 'NIL',
        price: 22020000,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {

        name: 'Historic City Loft',
        image: 'https://media.istockphoto.com/id/1393538022/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=JA6u4z_Mj2ZWHKPJqnATqpUPlrGBzavUXRhNE-5RYTw=',
        description:
            'Spacious loft apartment in a historic building downtown. Features include exposed brick walls, high ceilings, and proximity to cultural attractions.',
            brand: 'NIL',
            category: 'NIL',
        price: 300000,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {

        name: 'Historic City Loft',
        image: 'https://media.istockphoto.com/id/1431220312/photo/modern-luxury-multi-family-apartment-building.jpg?s=612x612&w=0&k=20&c=wMxRq9hv01ITpbiylGzCoG_j_SvFgJZl73Y8QqYkvKw=',
        description:
            'Spacious loft apartment in a historic building downtown. Features include exposed brick walls, high ceilings, and proximity to cultural attractions.',
            brand: 'NIL',
            category: 'NIL',
        price: 4000000,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    }
]


module.exports = products;