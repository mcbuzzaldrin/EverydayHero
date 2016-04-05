"use strict";

import React, {
  Component,
  Navigator,
} from 'react-native';

import NavbarComponent from './NavbarComponent';
import NavViewComponent from './NavViewComponent';

const NavBarRouteMapper = {

  LeftButton(route, navigator, index, navState) {
    let {NavBar, NavView, ...routeData} = route;
    if (NavBar.LeftButton) {
      return <NavBar.LeftButton
        routeData={routeData}
        navigator={navigator}
        index={index}
        navState={navState}
        {...routeData} />
    }
  },

  RightButton(route, navigator, index, navState) {
    let {NavBar, NavView, ...routeData} = route;
    if (NavBar.RightButton) {
      return <NavBar.RightButton
        routeData={routeData}
        navigator={navigator}
        index={index}
        navState={navState}
        {...routeData}/>
    }
  },

  Title(route, navigator, index, navState) {
    let {NavBar, NavView, ...routeData} = route;
    if (NavBar.Title) {
      return <NavBar.Title
        routeData={routeData}
        navigator={navigator}
        index={index}
        navState={navState}
        {...routeData} />
    }
  },

};

export default class NavigationRouter extends Component {

  static defaultProps = {
    navBarStyle: {},
    style: {flex: 1}
  };

  render() {

    return (
      <Navigator
        style={this.props.style}
        initialRoute={this.props.initialRoute}
        renderScene={(route, navigator) => {
          let {NavView, NavBar, ...routeData} = route;
          return (
            <NavView
              navigator={navigator}
              {...routeData}
            />
          );
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavBarRouteMapper}
            style={this.props.navBarStyle} />
        }
      />
    );

  }

}
