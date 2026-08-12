import "./Card.css";

import imgCard from "../assets/rainbowCity.jpg"

const Card = () => {
  return (
    <section>
      <article className="card">
        <img src={imgCard} className="img-card"/>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo
          fugiat suscipit obcaecati ex ratione quos est, minus placeat? Esse
          sint, nobis dignissimos molestias excepturi vitae minus vel non
          nostrum!
        </p>
      </article>
      <hr />
    </section>
  );
};

export default Card;
