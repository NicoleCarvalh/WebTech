import imgCard from "../assets/cardImg.jpg";

const ImgCard = (props) => {
  return (
    <div className="image-card">
      <img src={imgCard} className="image-card-img" alt={props.caption || "Imagem"}/>
      <p className="image-card-caption">{props.caption}</p>
    </div>
  );
};

export default ImgCard;
