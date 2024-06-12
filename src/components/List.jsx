const List = ({ date, day, time, season, genre }) => {
  return (
    <ul className="list">
      <li className="list__item">
        <span>Date:</span> {date}
      </li>
      <li className="list__item">
        <span>On air:</span> {day}
      </li>
      <li className="list__item">
        <span>Time:</span> {time}
      </li>
      <li className="list__item">
        <span>Season: </span>
        {season}
      </li>
      <li className="list__item">
        <span>Genre:</span> {genre}
      </li>
    </ul>
  );
};

export default List;
