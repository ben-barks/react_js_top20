import React from 'react';

const Song = (props) => {
  const top20 = props.songsList.map((song, index) =>{
    return <li value={index} key={index}>
      <h3>#{index + 1} - {song.title}</h3>
      <h4>Performed by {song['im:artist']}</h4>
      <img src="{song['im:image'][1].label}" alt="album cover"></img>
      <audio
      controls
      src="{song.link[1].attributes.href}">
          Your browser does not support the
          <code>audio</code> element.
      </audio>
      </li>
  })
  return(
    <ul>
      {top20}
    </ul>
  )
}

export default Song;

const PokemonDetail = (props) => {
  return (
    <div className='pokemon-detail'>
      <h1 className='pokemon-title'>#{props.pokemon.id}: {props.pokemon.name}</h1>
      <img
        className='pokemon-image' src={props.pokemon.image}
        alt={props.pokemon.name + ' image'}
      />
      <h4 className='pokemon-type'>{props.pokemon.types.join(' / ')}</h4>
    </div>
  );
};
