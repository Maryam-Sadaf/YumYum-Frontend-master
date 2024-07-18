import { makeObservable, observable, action, computed } from 'mobx';
class AppStore {
    formFields = {
        licenseKey: '',
        phoneNumber: '',
        openingTime: '',
        closingTime: ''
    };
    constructor() {
        makeObservable(this, {
            formFields: observable,
            currentTime: computed, // Declare currentTime as a computed property
            setFormField: action,
            clearFormFields: action,
        });
    }
    // Function to set form field values
    setFormField(field, value) {
        this.formFields[field] = value;
    }
    // Function to clear form fields
    clearFormFields() {
        this.formFields = {
            licenseKey: '',
            phoneNumber: '',
            openingTime: '',
            closingTime: ''
        };
    }
    // Computed property to get the current time in HH:mm format
    get currentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
}
const appStore = new AppStore();
export default appStore;
