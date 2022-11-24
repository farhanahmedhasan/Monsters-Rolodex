import CardItem from "../card-item/CardItem";
import "./card-list-style.css";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <CardItem key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
