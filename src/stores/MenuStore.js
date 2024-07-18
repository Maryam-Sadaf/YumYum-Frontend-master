// MenuStore.js
import { makeObservable, observable, action } from 'mobx';

class MenuStore {
    selectedButton = 'allItems'; 
    addButtonState = 'addItem';
    showMenuPopup = false;
    showDealPopup = false;

    constructor() {
        makeObservable(this, {
            selectedButton: observable,
            addButtonState: observable,
            setSelectedButton: action,
            toggleAddButton: action,
            
            showMenuPopup: observable,
            showDealPopup: observable,
            setShowMenuPopup: action,
            setShowDealPopup: action,
        });
    }
     
    setShowMenuPopup = (value) => {
        this.showMenuPopup = value;
    };

    setShowDealPopup = (value) => {
        this.showDealPopup = value;
    };


    setSelectedButton(button) {
        this.selectedButton = button;
    }

    toggleAddButton() {
        if (this.selectedButton === 'allDeals') {
            this.addButtonState = 'addDeal';
        } else {
            this.addButtonState = 'addItem';
        }
    }
}

const menuStore = new MenuStore();
export default menuStore;
