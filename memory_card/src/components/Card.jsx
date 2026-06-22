function Card({ id, name, image }) {
  return (
    <div key={id} className="card-div">
      <img className="card-img" src={image}></img>
      <p className="card-name">{name}</p>
    </div>
  );
}

export default Card;
