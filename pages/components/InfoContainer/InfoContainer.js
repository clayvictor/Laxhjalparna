export default function InfoContainer(props) {
  return (
    // Imports the data from Content.js and displays the information
    // Background color
    <div id="info" className={`info-container ${props.bg}`}>
      <div className="content">
        {/* Icon */}
        <i className={[props.icon]}></i>
        {/* Title */}
        <h2>{props.title}</h2>
        {/* Text */}
        <p>{props.text}</p>
      </div>
    </div>
  );
}
