import { makeObservable, observable, action } from 'mobx';

class AuthStore {
    formFields = {
        restaurantName: '',
        licenseKey: '',
    };
    errors = '';

    constructor() {
        makeObservable(this, {
            formFields: observable,
            errors: observable,
            setFormField: action,
            clearFormFields: action,
            setError: action,
        });
    }

    setFormField(field, value) {
        this.formFields[field] = value;
    }

    clearFormFields() {
        this.formFields = {
            restaurantName: '',
            licenseKey: '',
        };
    }

    setError(errors) {
        this.errors = errors;
    }
}

export const authStore = new AuthStore();
