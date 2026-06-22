function Header({ scores }) {
  return (
    <div className="header-div">
      <div className="name-rules">
        <h1 className="title">Memory Game</h1>
        <p className="rules">
          Click an image to gain points. But not the same image more than once!
        </p>
      </div>
      <div className="scores">
        <p>Current Score: {scores.score}</p>
        <p>Best Score: {scores.best} </p>
      </div>
    </div>
  );
}

export default Header;
