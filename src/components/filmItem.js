import React from 'react';
import pennant from '../pennant.png';

class FilmItem extends React.Component {
  render() {
    return (
      <div className='film-item'>
        <img className='pennant-image' src={pennant} alt=''/>
        <h5 className='film-title'>{this.props.title}</h5>
        <h6 className='showtime-link'>Showtimes</h6>
      </div>
    )
  }
}

export default FilmItem;