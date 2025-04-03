
import React from 'react';
import { Shield, Users, Zap, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Pioneering the future of secure authentication with our innovative OTP-based solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to revolutionize user authentication by eliminating password-related vulnerabilities and providing a seamless, secure way for users to access their accounts. We believe that security shouldn't come at the cost of convenience.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where password breaches are a thing of the past, where users can confidently access their digital lives without remembering dozens of complex passwords, and where businesses can focus on growth rather than security breaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-gray-600">
                We prioritize the highest standards of security in every aspect of our service, ensuring your data is always protected.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Centric</h3>
              <p className="text-gray-600">
                Our solutions are designed with users in mind, focusing on simplicity, accessibility, and excellent user experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continually push the boundaries of what's possible in authentication technology, staying ahead of security threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                OTP Auth was founded in 2020 by a team of cybersecurity experts who saw the increasing challenges posed by password-based authentication systems. With data breaches becoming increasingly common and password fatigue affecting users worldwide, we set out to create a more secure and user-friendly alternative.
              </p>
              
              <p>
                We began by developing a robust OTP-based authentication system that eliminated the need for remembering passwords while significantly enhancing security. Our early adopters quickly discovered the benefits – no more forgotten passwords, drastically reduced security incidents, and a seamless login experience.
              </p>
              
              <p>
                Since then, we've grown from a small startup to a trusted authentication provider serving businesses of all sizes across multiple industries. Our commitment to security, innovation, and user experience remains at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-brand-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
                <p className="text-gray-600">
                  Our OTP authentication uses state-of-the-art encryption and security practices to protect your accounts from unauthorized access.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-brand-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Verification</h3>
                <p className="text-gray-600">
                  Our system delivers OTPs instantly to your mobile device, ensuring quick and hassle-free authentication without delays.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-brand-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                <p className="text-gray-600">
                  Our authentication system can be easily integrated with existing platforms and applications with minimal development effort.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-brand-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Reliability</h3>
                <p className="text-gray-600">
                  With a 99.9% uptime guarantee and millions of successful authentications, our system has proven its reliability across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
