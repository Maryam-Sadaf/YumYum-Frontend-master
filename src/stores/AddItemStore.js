import { makeObservable, observable, action } from 'mobx';

class AddItemStore {
    ItemFields = {
        name: '',
        price: '',
        description: '',
        dealImage: null
    };

    constructor() {
        makeObservable(this, {
            ItemFields: observable,
            setName: action,
            setPrice: action,
            setDescription: action,
            setDealImage: action,
            resetForm: action
        });
    }

    setName(value) {
        this.ItemFields.name = value;
    }

    setPrice(value) {
        this.ItemFields.price = value;
    }

    setDescription(value) {
        this.ItemFields.description = value;
    }

    setDealImage(image) {
        this.ItemFields.dealImage = image;
    }

    resetForm() {
        this.ItemFields = {
            name: '',
            price: '',
            description: '',
            dealImage: null
        };
    }
}

const addItemStore = new AddItemStore();
export default addItemStore;
