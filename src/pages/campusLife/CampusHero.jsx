import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button.jsx';
import { ArrowDown, Map } from 'lucide-react';

const CampusHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=1920&h=1080&fit=crop",
      title: "Drone View Campus",
      description: "Aerial perspective of our beautiful campus"
    },
    {
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop",
      title: "Student Festivals",
      description: "Vibrant celebrations and cultural events"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop",
      title: "Campus Gardens",
      description: "Serene green spaces for study and relaxation"
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop",
      title: "Modern Hostels",
      description: "Comfortable living spaces for students"
    },
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&h=1080&fit=crop",
      title: "Iconic Buildings",
      description: "Architectural marvels that define our campus"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToTour = () => {
    const element = document.querySelector('#campus-tour');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              Welcome to
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                GBU Campus Life
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Welcome to GBU Campus Life — your gateway to vibrant student life at Gautam Buddha University. From thriving hostels to cutting-edge sports facilities and clubs, explore every corner of our diverse campus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button
                size="lg"
                onClick={scrollToTour}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse"
              >
                <Map className="mr-2" size={20} />
                Start Exploring
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToTour}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Virtual Tour
              </Button>
            </div>

            {/* Current Slide Info */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{slides[currentSlide].title}</p>
                  <p className="text-sm">{slides[currentSlide].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/70" size={32} />
      </div>
    </section>
  );
};

export default CampusHero;
