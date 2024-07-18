// RestaurantFormStore.js
import { makeObservable, observable, action } from 'mobx';

class FormStore {
  formData = {
    ownerName: '',
    restaurantName: '',
    restaurantEmail: '',
    address: '',
  };

  constructor() {
    makeObservable(this, {
      formData: observable,
      setFormData: action,
      clearFormData: action,
      setError:action,
    });
  }

  setFormData(field, value) {
    this.formData[field] = value;
  }
  clearFormData() {
    this.formData = {
      ownerName: '',
      restaurantName: '',
      restaurantEmail:'',
      address:'',
    };
  }
  setError(errors) {
    this.errors = errors;
  }
}

const formStore = new FormStore();
export default formStore;
