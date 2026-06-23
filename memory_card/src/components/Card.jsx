function Card({ id, name, image, handleClick }) {
  const capitlizeName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="card-div" onClick={() => handleClick(id)}>
      <img className="card-img" src={image}></img>
      <p className="card-name">{capitlizeName}</p>
    </div>
  );
}

export default Card;
