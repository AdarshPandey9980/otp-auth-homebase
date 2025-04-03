
import React from 'react';
import { ShieldCheck, Smartphone, Globe, Building, Server, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive OTP authentication solutions for businesses of all sizes
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="h-12 w-12 text-brand-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">OTP Authentication</h3>
              <p className="text-gray-600 mb-6">
                Our core service provides secure one-time password authentication through SMS, eliminating the need for traditional passwords.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  Secure SMS delivery
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  Time-limited codes
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  Automated retry system
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Smartphone className="h-12 w-12 text-brand-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Mobile Integration</h3>
              <p className="text-gray-600 mb-6">
                Seamlessly integrate our OTP authentication service into your mobile applications for a native user experience.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  SDK for iOS and Android
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  Automatic code detection
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  Customizable UI components
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Globe className="h-12 w-12 text-brand-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Web Integration</h3>
              <p className="text-gray-600 mb-6">
                Add secure OTP authentication to your websites and web applications with our easy-to-implement solutions.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  JavaScript libraries
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  API integration
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">•</span>
                  Responsive design support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Enterprise Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <Building className="h-12 w-12 text-brand-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Authentication</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive authentication solutions for large organizations with complex security requirements and multiple user access levels.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    SSO integration capabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    Role-based access control
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    Audit logging and compliance reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    24/7 dedicated support
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <Server className="h-12 w-12 text-brand-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Private Cloud Deployment</h3>
                <p className="text-gray-600 mb-4">
                  Deploy our OTP authentication system in your own private cloud environment for maximum control and security.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    Complete infrastructure control
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    Data sovereignty compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    Customized security policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    Dedicated technical account manager
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Advanced Security Features</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            All our services come with enterprise-grade security features to ensure your authentication system remains secure and reliable.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600 text-sm">
                All communications and stored data are protected with industry-standard encryption.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fraud Detection</h3>
              <p className="text-gray-600 text-sm">
                AI-powered systems to detect and prevent suspicious authentication attempts.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Redundant Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Multiple data centers ensure high availability and disaster recovery capabilities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance Ready</h3>
              <p className="text-gray-600 text-sm">
                Our services are designed to help you meet GDPR, HIPAA, SOC2, and other regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Authentication?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of businesses that trust our OTP authentication services for secure, password-less access.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                Get Started Now
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
