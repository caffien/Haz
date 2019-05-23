import React from 'react';
import { View, Text } from 'react-native';
import BottomDrawer from './BottomDrawer';

const TAB_BAR_HEIGHT = 110;

const BottomDrawerComponent = (props) => {
    return (
        <BottomDrawer
            containerHeight={props.containerHeight}
            offset={TAB_BAR_HEIGHT}
            roundedEdges
            shadow
        >
            {props.children}
        </BottomDrawer>
    );
};

export default BottomDrawerComponent;
