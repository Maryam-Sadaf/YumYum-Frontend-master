import { authStore } from "../stores/authStore";

export const validateForm = () => {
  const { restaurantName, licenseKey } = authStore.formFields;

  if (!restaurantName || !licenseKey) {
    authStore.setError('Please fill in all fields');
    return false;
  }

  if (!restaurantName) {
    authStore.setError('Please enter a valid Restaurant name');
    return false;
  }

  // Add additional validation logic for the license key
  if (!isValidLicenseKey(licenseKey)) {
    authStore.setError('Please enter a valid License key');
    return false;
  }
  
  authStore.setError('');
  return true;
};
const isValidLicenseKey = (licenseKey) => {
  // Example validation logic: Check if the license key has a minimum length of 6 characters
  return licenseKey.length >= 6;
};
