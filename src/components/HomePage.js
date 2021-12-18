import '../sass/components/_homePage.scss';
import '../sass/main.scss';

import Logo from './shared/Logo';

import React from 'react';

export default function HomePage() {
    return (
        <div className="container">
            <section>
                <h1 className="home-text">Hi there!</h1>
                <h1 className="home-text">I'm <strong className="home-text__highlight">TS</strong></h1>
            </section>
            <section>
                <Logo />
            </section>
        </div>
    );
}