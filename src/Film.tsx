import React from 'react';

interface Props {
  film: FilmType;
}

interface FilmType { 
  title: string;
  watchDate: string;
  point: number;
  note: string;
}

const Film: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h2>{props.film.title}</h2>
      <p>鑑賞日: {props.film.watchDate}</p>
      <p>評: {'★'.repeat(props.film.point)}</p>
      <p>感想: {props.film.note}</p>
    </div>
  )
}

export default Film
