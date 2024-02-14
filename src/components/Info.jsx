function Info({ title, details }) {
  return (
    <div className="info--container">
      <h2 className="info--title">{title}</h2>
      <p className="info--details">{details}</p>
    </div>
  );
}

export default Info;
