import React from 'react';
import FilmItem from './filmItem';

class ShowtimesContainer extends React.Component {
  render() {
    const filmItems = this.props.data.map((film) => {
      return <FilmItem title={film} />
    })
    return (
      <div className='showtimes-container'>
        <h2>UK Opening This Week</h2>
        {filmItems}
        <a href='stuff'>See more openings this week >></a>
        <hr/>
        <button id='showtimes-button'>Get Showtimes >></button>
      </div>
    )
  }
}

export default ShowtimesContainer;