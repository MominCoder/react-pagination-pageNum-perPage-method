const Beer = ({ name, tagline, image_url }) => {
  return (
    <div className="beer">
      <div>
        <img src={image_url} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default Beer;
