// CardGrid.js

import React from 'react';
import './Cards.css'; // Make sure to import your CSS file
import volcano from '../assets/volcano.png';
import mountain from '../assets/mountain.png';
import ocean from '../assets/ocean.png';
import forest from '../assets/forest.png';

const Cards = () => {
  return (
    <section className='home'>
    <section className="hero-section">
      <div className="card-grid">
        <a className="card" href="#">
          <div className="card__background" style={{ backgroundImage: `url(${volcano})` }}></div>
          <div className="card__content">
            <p className="card__category">Volcano Card</p>
            <h3 className="card__heading">Guardians of Earth</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{ backgroundImage: `url(${mountain})` }}></div>
          <div className="card__content">
            <p className="card__category">Mountain Card</p>
            <h3 className="card__heading">Frozen Majesty</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{ backgroundImage: `url(${ocean})` }}></div>
          <div className="card__content">
            <p className="card__category">Ocean Card</p>
            <h3 className="card__heading">Life Beneath Waves</h3>
          </div>
        </a>
        <a className="card" href="#">
          <div className="card__background" style={{ backgroundImage: `url(${forest})` }}></div>
          <div className="card__content">
            <p className="card__category">Forest Card</p>
            <h3 className="card__heading">Sylvan Haven</h3>
          </div>
        </a>
      </div>
    </section>
    </section>
  );
};

export default Cards;
