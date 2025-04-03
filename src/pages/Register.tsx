
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OtpInput from '@/components/OtpInput';
import { User, Upload } from 'lucide-react';
import { toast } from 'sonner';

const Register: React.FC = () => {
  const { register, verifyOtp } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    if (!formData.mobile || formData.mobile.length < 10) {
      toast.error('Please enter a valid mobile number');
      return;
    }
    
    try {
      setLoading(true);
      await register({
        ...formData,
        profileImage: profileImagePreview || undefined
      });
      setStep('otp');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    try {
      setLoading(true);
      const success = await verifyOtp(formData.mobile, otp);
      
      if (success) {
        toast.success('Registration successful!');
        navigate('/');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-brand-600 p-6 text-white text-center">
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <p className="mt-2 text-brand-100">Register with OTP verification</p>
          </div>
          
          <div className="p-6">
            {step === 'form' ? (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* Profile Image */}
                  <div className="flex flex-col items-center space-y-2">
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer overflow-hidden"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {profileImagePreview ? (
                        <img 
                          src={profileImagePreview} 
                          alt="Profile preview" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User size={40} className="text-gray-400" />
                      )}
                    </div>
                    
                    <button
                      type="button"
                      className="text-sm text-brand-600 hover:underline flex items-center"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload size={16} className="mr-1" />
                      Upload profile image
                    </button>
                    
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      autoComplete="email"
                      required
                    />
                  </div>
                  
                  {/* Mobile */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      autoComplete="tel"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Register'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600">
                    We've sent a verification code to your mobile
                  </p>
                  <p className="font-medium">{formData.mobile}</p>
                </div>
                
                <div className="space-y-4">
                  <Label className="block text-center">Enter OTP</Label>
                  <OtpInput
                    length={4}
                    onComplete={handleVerifyOtp}
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="text-brand-600 text-sm hover:underline mt-4"
                  >
                    Back to registration
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-brand-600 hover:underline">
                  Login Here
                </Link>
              </p>

              {/* Note for demo mode */}
              {step === 'otp' && (
                <p className="mt-4 text-xs text-gray-500 bg-gray-100 p-2 rounded">
                  Demo Mode: Use OTP "1234" to complete registration
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
