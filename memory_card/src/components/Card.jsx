function Card({ id, name, image, handleClick }) {
  return (
    <div className="card-div" onClick={() => handleClick(id)}>
      <img className="card-img" src={image}></img>
      <p className="card-name">{name}</p>
    </div>
  );
}

export default Card;
