
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OtpInput from '@/components/OtpInput';
import { toast } from 'sonner';

const Login: React.FC = () => {
  const { login, verifyOtp } = useAuth();
  const [mobile, setMobile] = useState<string>('');
  const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mobile || mobile.length < 10) {
      toast.error('Please enter a valid mobile number');
      return;
    }
    
    try {
      setLoading(true);
      await login(mobile);
      setStep('otp');
    } catch (error) {
      console.error('Failed to send OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    try {
      setLoading(true);
      const success = await verifyOtp(mobile, otp);
      
      if (success) {
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-brand-600 p-6 text-white text-center">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="mt-2 text-brand-100">Login with OTP verification</p>
          </div>
          
          <div className="p-6">
            {step === 'mobile' ? (
              <form onSubmit={handleSendOtp}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
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
                    {loading ? 'Sending...' : 'Send OTP'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600">
                    We've sent a verification code to your mobile
                  </p>
                  <p className="font-medium">{mobile}</p>
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
                    onClick={() => setStep('mobile')}
                    className="text-brand-600 text-sm hover:underline mt-4"
                  >
                    Change mobile number
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-brand-600 hover:underline">
                  Register Now
                </Link>
              </p>

              {/* Note for demo mode */}
              <p className="mt-4 text-xs text-gray-500 bg-gray-100 p-2 rounded">
                Demo Mode: Use any mobile number and OTP "1234" to log in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
