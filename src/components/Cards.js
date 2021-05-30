const Cards = (props) => {
  const { characters, handleClick } = props;

  return (
    <div className="cards">
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
    //add onClick, key, and id
    <div className="card" id={id} onClick={handleClick}>
      <div>
        <img src={picture} />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Cards;
