import React, { useRef } from 'react';
import '../menu/menu.scss';
import './additem.scss';
import { observer } from 'mobx-react-lite';
import menuStore from '../../stores/MenuStore';
import addItemStore from '../../stores/AddItemStore';
import menuImage from '../../assets/empty menu.png';
import InputMask from 'react-input-mask';

const Menu = observer(() => {
    const fileInputRef = useRef(null);

    const handleButtonClick = (button) => {
        menuStore.setSelectedButton(button);
        menuStore.toggleAddButton();
        console.log(button);
    };

    const handleAddItemClick = () => {
        menuStore.setShowMenuPopup(true);
        menuStore.setShowDealPopup(false);
    };

    const handleAddDealClick = () => {
        menuStore.setShowDealPopup(true);
        menuStore.setShowMenuPopup(false);
    };

    const handleClosePopup = () => {
        menuStore.setShowMenuPopup(false);
        menuStore.setShowDealPopup(false);
    };

    const handleAddItem = () => {
        menuStore.setShowMenuPopup(false);
        handleClosePopup();
        console.log('Added Item:', addItemStore.name, addItemStore.price, addItemStore.description);
    };

    const handleAddDeal = () => {
        menuStore.setShowDealPopup(false);
        handleClosePopup();
        console.log('Added Deal:', addItemStore.ItemFields.name, addItemStore.ItemFields.price, addItemStore.ItemFields.description);
        // addItemStore.resetForm();
    };

    const handleUploadImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'image/jpeg') {
            // File is a JPG image, you can upload it here
            console.log('Uploaded JPG image:', file);
        } else {
            // Invalid file type, show error message or handle accordingly
            console.log('Please upload a JPG image.');
        }
    };

    return (
        <>
            <div>
                <div className="menu-wrapper">
                    <div className="button-group1">
                        <button
                            className={menuStore.selectedButton === 'allItems' ? 'selected menu-button1' : 'menu-button1'}
                            onClick={() => handleButtonClick('allItems')}
                        >
                            All Items
                        </button>
                        <button
                            className={menuStore.selectedButton === 'allDeals' ? 'selected menu-button2' : 'menu-button2'}
                            onClick={() => handleButtonClick('allDeals')}
                        >
                            All Deals
                        </button>
                    </div>
                    {(menuStore.selectedButton === 'allItems' && menuStore.addButtonState === 'addItem') && (
                        <div className="button-group2">
                            <button className="add-item-button" onClick={handleAddItemClick}>Add Item</button>
                        </div>
                    )}
                    {(menuStore.selectedButton === 'allDeals' && menuStore.addButtonState === 'addDeal') && (
                        <div className="button-group2">
                            <button className="add-deal-button" onClick={handleAddDealClick}>Add Deal</button>
                        </div>
                    )}
                </div>
                {!menuStore.showMenuPopup && !menuStore.showDealPopup && (
                    <div className="center-image">
                        <img src={menuImage} alt='Menu' className="menu-image" />
                    </div>
                )}
                {menuStore.showMenuPopup && (
                    <div className="popup-overlay">
                        <div className="popup">
                            <h2 className='menu-heading'>Add Item</h2>
                            <div className='input-colomn-items'>
                                <div className="input-row-items">
                                    <label htmlFor="itemName">Name:</label>
                                    <input
                                        className='menu-input'
                                        id="itemName"
                                        required
                                        type="text"
                                        value={addItemStore.ItemFields.name}
                                        onChange={(e) => addItemStore.setName(e.target.value)}
                                    />
                                </div>
                                <div className="input-row-items">
                                    <label htmlFor="itemPrice">Price:</label>
                                    <InputMask
                                        type='text'
                                        className='menu-input'
                                        required
                                        mask="RS 999999"
                                        maskChar="_"
                                        value={addItemStore.ItemFields.price}
                                        onChange={(e) => addItemStore.setPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="input-row-items">
                                <label htmlFor="itemDescription">Description:</label>
                                <input
                                    required
                                    className='menu-input'
                                    id="itemDescription"
                                    value={addItemStore.ItemFields.description}
                                    onChange={(e) => addItemStore.setDescription(e.target.value)}
                                />
                            </div>
                            <div className='img-upload'>
                                <span className="img-items" onClick={handleUploadImageClick}>Upload Item image</span>
                            </div>
                            <input
                                type="file"
                                required
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                accept="image/jpeg"
                                onChange={handleFileChange}
                            />
                            {addItemStore.ItemFields.dealImage && <img src={URL.createObjectURL(addItemStore.ItemFields.dealImage)} alt='upload' />}
                            <div className="button-row">
                                <button className="cancel-button" onClick={handleClosePopup}>Cancel</button>
                                <button className="add-button" onClick={handleAddItem}>Add Item</button>
                            </div>
                        </div>
                    </div>
                )}
                {menuStore.showDealPopup && (
                    <div className="popup-overlay">
                        <div className="popup">
                            <h2 className='menu-heading'>Add Deal</h2>
                            <div className='input-colomn-items'>
                                <div className="input-row-items">
                                    <label htmlFor="dealName">Name:</label>
                                    <input
                                        className='menu-input'
                                        required
                                        id="dealName"
                                        type="text"
                                        value={addItemStore.ItemFields.name.startsWith('Deal ') ? addItemStore.name : 'Deal '}
                                        onChange={(e) => {
                                            const newValue = e.target.value.trim();
                                            addItemStore.setName(newValue);
                                        }}
                                    />
                                </div>
                                <div className="input-row-items">
                                    <label htmlFor="dealPrice">Price:</label>
                                    <InputMask
                                        type='text'
                                        className='menu-input'
                                        required
                                        mask="RS 999999"
                                        maskChar="_"
                                        value={addItemStore.ItemFields.price}
                                        onChange={(e) => addItemStore.setPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="input-row-items">
                                <label htmlFor="dealDescription">Description:</label>
                                <input
                                    type='text-area'
                                    className='menu-input'
                                    required
                                    id="dealDescription"
                                    value={addItemStore.ItemFields.description}
                                    onChange={(e) => addItemStore.setDescription(e.target.value)}
                                />
                            </div>
                            <div className='img-upload'>
                                <span className="img-items" onClick={handleUploadImageClick}>Upload Deal image</span>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                accept="image/jpeg"
                                value={addItemStore.ItemFields.dealImage}
                                onChange={handleFileChange}
                            />
                            {addItemStore.ItemFields.dealImage && <img src={URL.createObjectURL(addItemStore.ItemFields.dealImage)} alt="Uploaded" />} 

                            <div className="button-row">
                                <button className="cancel-button" onClick={handleClosePopup}>Cancel</button>
                                <button className="add-button" onClick={handleAddDeal}>Add Deal</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
});

export default Menu;
