import React from 'react';
import '../../css/CarsModels.css';

const CarsModels = () => {
  return (
    <div className="types-of-cars">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <h3>Types Of Cars</h3>
            <ul className="list-unstyled three-columns ps-5">
              <li><a href={'/hatchbacks'}>Hatchback</a></li>
              <li><a href={'/mpv'}>MPV</a></li>
              <li><a href={'/sedan'}>Sedan</a></li>
              <li><a href={'/vans'}>Van</a></li>
              <li><a href={'/trucks'}>Truck</a></li>
              <li><a href={'/suv'}>SUV</a></li>
              <li><a href={'/convertibles'}>Convertible</a></li>
              <li><a href={'/coupe'}>Coupe</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CarsModels;
