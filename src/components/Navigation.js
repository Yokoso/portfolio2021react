import '../sass/components/_navigation.scss';


import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

import React, { useState } from 'react';

export default function Navigation(props) {

    var jsonData = require('./shared/dummyDatabase.json');


    // console.log(jsonData.{props}.links.title);
    // fetch jsondata do navdata

    const [navData] = useState(jsonData.navigation.links);

    const [navigationType] = useState(props.navigationType);

    console.log(props.navigationType);

    const navRender = navData.map((navDataItem) =>
        <li key={navDataItem.id} className="navigation--link">
            {navDataItem.icon}
            <Link 
                to={ navDataItem.id === 1 ? '/' : navDataItem.title } 
                className={`navigation--link-a navigation--link-a__${navigationType}`}
            >
                {navDataItem.title.toUpperCase()}
            </Link>
        </li>
    );

    return (
        <Router>
            <ul className="navigation--list">
                {navRender}
            </ul>
        </Router>
    );
}

