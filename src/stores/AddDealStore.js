import { makeObservable, observable, action } from 'mobx';

class AddDealStore {
    DealFields = {
        name: '',
        price: '',
        description: '',
        dealImage: null
    };

    constructor() {
        makeObservable(this, {
            DealFields: observable,
            setName: action,
            setPrice: action,
            setDescription: action,
            setDealImage: action,
            resetForm: action
        });
    }

    setName(value) {
        this.DealFields.name = value;
    }

    setPrice(value) {
        this.DealFields.price = value;
    }

    setDescription(value) {
        this.DealFields.description = value;
    }

    setDealImage(image) {
        this.DealFields.dealImage = image;
    }
    resetForm() {
        this.DealFields = {
            name: '',
            price: '',
            description: '',
            dealImage: null
        };
    }
}

const addDealStore = new AddDealStore();
export default addDealStore;
