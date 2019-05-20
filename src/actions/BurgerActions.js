import NavigationService from '../NavigationService';

export const changeBurgerMenuStatus = () => {
    return {
        type: 'CHANGE_BURGER_MENU_STATUS',
    };
};

export const setBurgerMenuStatus = (isOpen) => {
    return {
        type: 'SET_BURGER_MENU_STATUS',
        payload: isOpen
    };
};

export const setBurgerMenuItem = (item) => {
    return {
        type: 'SET_BURGER_MENU_ITEM',
        payload: item
    };
};
export const navBurgerMenuItem = (item) => {
    console.log('before');
    NavigationService.navigate(item);
    console.log('after');

    return {
        type: 'NAVIGATE_BURGER_MENU_ITEM'
    };
};
