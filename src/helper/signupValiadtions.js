import formStore from '../stores/signUp';

export const validateForm = () => {
    const { formData } = formStore;

    if (!formData.ownerName || !formData.restaurantName || !formData.restaurantEmail || !formData.address) {
        formStore.setError('Please fill in all fields');
        return false;
    }
    if (!formData.restaurantEmail.includes('@')) {
        formStore.setError('Please enter a valid email address');
        return false;
    }
    formStore.clearFormData();
    return true;
};