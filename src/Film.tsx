import React from 'react';

interface Props {
  title: string;
  watchDate: string;
  point: number;
  note: string;
}

const Film: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>鑑賞日: {props.watchDate}</p>
      <p>評: {'★'.repeat(props.point)}</p>
      <p>感想: {props.note}</p>
    </div>
  )
}

export default Film
