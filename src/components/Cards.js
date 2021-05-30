import './Cards.css';

const Cards = (props) => {
  const { characters, handleClick } = props;

  return (
    <div className="Cards">
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            picture={character.picture}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

const Card = (props) => {
  const { name, picture, id, handleClick } = props;

  return (
    <div className="card" id={id} onClick={handleClick}>
      <div className="card-img" id={id}>
        <img src={picture} id={id} />
      </div>
      <div id={id}>{name}</div>
    </div>
  );
};

export default Cards;
