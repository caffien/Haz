import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomePage from './HomePage';
import SideBar from './SideBar';

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomePage },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;
