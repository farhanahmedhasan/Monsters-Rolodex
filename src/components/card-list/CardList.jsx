import { Component } from "react";

import CardItem from "../card-item/CardItem";
import "./card-list-style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <CardItem key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
