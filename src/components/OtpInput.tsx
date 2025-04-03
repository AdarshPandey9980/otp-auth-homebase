
import React, { useState, useRef, useEffect } from 'react';

interface OtpInputProps {
  length: number;
  onComplete: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    // Only accept digits
    if (!/^\d*$/.test(value)) return;
    
    // Update the OTP array
    const newOtp = [...otp];
    // Take only the last character if multiple are pasted
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    // Move to next input if current one is filled
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input when backspace is pressed on an empty input
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Only proceed if pasted data has enough digits
    if (!/^\d+$/.test(pastedData)) return;
    
    const digits = pastedData.split('').slice(0, length);
    const newOtp = [...otp];
    
    // Fill as many inputs as we have digits
    digits.forEach((digit, idx) => {
      newOtp[idx] = digit;
    });
    
    setOtp(newOtp);
    
    // Focus the next empty input or the last one
    const nextEmptyIndex = newOtp.findIndex(val => val === '');
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[length - 1]?.focus();
    }
    
    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  return (
    <div className="flex justify-center space-x-3">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-14 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          autoComplete="one-time-code"
        />
      ))}
    </div>
  );
};

export default OtpInput;
