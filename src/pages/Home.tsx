
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, Smartphone } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Secure Authentication Without Passwords',
      description: 'Access your account securely with one-time passwords sent to your mobile'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'Simple and Fast Login',
      description: 'Easy login process with OTP verification - no more forgotten passwords'
    },
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      title: 'Maximum Security',
      description: 'Enhanced security measures to keep your account safe and protected'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * sliderRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="relative w-full overflow-hidden h-[500px]">
        <div 
          ref={sliderRef}
          className="carousel w-full h-full"
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="carousel-item relative w-full h-full"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-3xl md:text-5xl font-bold text-center max-w-3xl">{slide.title}</h1>
                <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">{slide.description}</p>
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/login">
                    <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                      Login Now
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-800">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose OTP Authentication?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Enhanced Security</h3>
              <p className="text-gray-600 text-center">
                One-time passwords provide an extra layer of security, making it harder for hackers to gain unauthorized access.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Mobile Verification</h3>
              <p className="text-gray-600 text-center">
                Instantly receive one-time passwords on your mobile device, ensuring only you can access your account.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Simplified Access</h3>
              <p className="text-gray-600 text-center">
                No more remembering complex passwords. Just enter your mobile number and the OTP sent to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of users who have already made the switch to password-less authentication.
            </p>
            
            <Link to="/register">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                Create Your Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
