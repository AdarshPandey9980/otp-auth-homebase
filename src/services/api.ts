
// This file would handle all API calls

// In a real application, these functions would make actual API calls.
// For this demo, we'll simulate API calls with delays and mock data.

/**
 * Sends OTP to the provided mobile number
 */
export const sendOtp = async (mobile: string): Promise<{ success: boolean }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, this would make a fetch/axios call to your backend
  console.log(`API call: Sending OTP to ${mobile}`);
  
  // Always succeed in demo
  return { success: true };
};

/**
 * Verify the OTP for login/registration
 */
export const verifyOtp = async (mobile: string, otp: string): Promise<{ 
  success: boolean;
  userData?: any;
}> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, this would make a fetch/axios call to your backend
  console.log(`API call: Verifying OTP ${otp} for ${mobile}`);
  
  // For demo, only "1234" is the correct OTP
  if (otp === "1234") {
    return { 
      success: true,
      userData: {
        id: "user_" + Math.random().toString(36).substring(2, 9),
        name: "Demo User",
        email: "user@example.com",
        mobile: mobile
      }
    };
  }
  
  return { success: false };
};

/**
 * Register a new user with the provided data
 */
export const registerUser = async (userData: {
  name: string;
  email: string;
  mobile: string;
  profileImage?: File;
}): Promise<{ success: boolean }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real app, this would make a fetch/axios call to your backend
  console.log(`API call: Registering user:`, userData);
  
  // Always succeed in demo
  return { success: true };
};

/**
 * Upload a profile image
 */
export const uploadProfileImage = async (imageFile: File): Promise<{
  success: boolean;
  imageUrl?: string;
}> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // In a real app, this would upload the file to your server or cloud storage
  console.log(`API call: Uploading profile image:`, imageFile.name);
  
  // Return a dummy URL for demo
  return { 
    success: true,
    imageUrl: URL.createObjectURL(imageFile)
  };
};

/**
 * Get user data
 */
export const getUserData = async (userId: string): Promise<{
  success: boolean;
  user?: any;
}> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would fetch user data from your backend
  console.log(`API call: Getting user data for ID:`, userId);
  
  // Return dummy data for demo
  return { 
    success: true,
    user: {
      id: userId,
      name: "Demo User",
      email: "user@example.com",
      mobile: "1234567890",
      profileImage: "https://api.dicebear.com/7.x/initials/svg?seed=DU&backgroundColor=0ea5e9"
    }
  };
};
