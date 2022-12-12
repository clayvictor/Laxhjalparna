export default function InfoContainer(props) {
  return (
    <div className={`info-container ${props.bg}`}>
      <div className="content">
        <i className={[props.icon]}></i>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
