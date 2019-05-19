const INITIAL_STATE = {
    isOpen: false,
    selectedItem: 'HomePage',

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_BURGER_MENU_STATUS':
            return { ...state, isOpen: !(state.isOpen) };
        case 'SET_BURGER_MENU_STATUS':
            return { ...state, isOpen: action.payload };
        case 'SET_BURGER_MENU_ITEM':
            return { ...state, selectedItem: action.payload };
        case 'NAVIGATE_BURGER_MENU_ITEM':
            return { ...state };
        default:
            return state;
    }
};
