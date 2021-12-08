import React from 'react';
import Film from './Film';

interface Props {
  list: FilmType[];
};

interface FilmType {
  id: number;
  title: string;
  watchDate: string;
  point: number;
  note: string;
}

const List: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {props.list.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  )
}

export default List;
