import React from 'react';

export default function CampusLifeSection() {
  const testimonials = [
    {
      category: 'Student Life',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb2Ip3xM-a7oM8SolLHbx6hmdyW8f9IxzKzw&s',
      quote: 'GBU has given me opportunities to grow both academically and personally. The diverse community here is amazing!',
      name: 'Priya Sharma',
      course: 'B.Tech CSE',
    },
    {
      category: 'Sports & Recreation',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyA74pNi2uzsF-Q1IdjrMjoXpvu1UNIZc7jw&s',
      quote: 'The sports facilities at GBU are world-class. Being part of the cricket team has been an incredible journey.',
      name: 'Rahul Kumar',
      course: 'M.Sc Physics',
    },
    {
      category: 'Cultural Activities',
      image: 'https://www.mitgurukul.com/video/landing-popup.jpg',
      quote: 'Events like the annual fest and cultural nights made my time at GBU unforgettable!',
      name: 'Sneha Verma',
      course: 'BBA',
    },
    {
      category: 'Hostel Life',
      image: 'https://www.datocms-assets.com/6737/1533822950-dorm-room-nomads-melbourne.jpg?auto=compress%2Cformat&fm=jpg',
      quote: 'Living in the hostel helped me form lifelong friendships and become more independent.',
      name: 'Amit Singh',
      course: 'MBA',
    },
  ];

  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-3 md:mb-6">Campus Life at GBU</h2>
      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
        Experience a vibrant campus life filled with learning, growth, and unforgettable memories. Our diverse community of students creates an environment where everyone can thrive.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            className="bg-white rounded-lg shadow hover:shadow-xl focus:shadow-xl transition-transform transform hover:scale-105 focus:scale-105 outline-none cursor-pointer overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-56 object-cover rounded-t-lg"
                loading="lazy"
              />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow select-none">
                {item.category}
              </span>
            </div>
            <div className="p-5">
              <p className="italic text-gray-700 leading-relaxed">"{item.quote}"</p>
              <p className="mt-4 text-blue-800 font-semibold">
                — {item.name}, <span className="italic">{item.course}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
