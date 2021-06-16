import './BannerImage.css';

function BannerImage(props) {
  return (
    <div className="bi-container">
      <h2 className="bi-title">{props.title}</h2>
      <img className="bi-image" src={props.image} alt={props.title}></img>
    </div>
  );
}

export default BannerImage;