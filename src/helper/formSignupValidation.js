export const isValidPhoneNumber = (phoneNumber) => {
    return phoneNumber && phoneNumber.length >= 13;
};

export const isValidLicenseKey = (licenseKey) => {
    return !!licenseKey;
};

export const isValidTime = (time) => {
    return !!time;
};

export const validateForm = (formFields) => {
    const { phoneNumber, licenseKey, openingTime, closingTime } = formFields;

    if (!isValidPhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number with at least 13 characters.');
        return false;
    }

    if (!isValidLicenseKey(licenseKey)) {
        alert('Please enter a license key.');
        return false;
    }

    if (!isValidTime(openingTime)) {
        alert('Please enter an opening time.');
        return false;
    }

    // Check for closing time presence
    if (!isValidTime(closingTime)) {
        alert('Please enter a closing time.');
        return false;
    }

    // If all fields are valid, return true
    // return true;
};
