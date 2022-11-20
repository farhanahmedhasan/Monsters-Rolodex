import { Component } from "react";

import "./card-item-style.css";

class CardItem extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div key={id} className="card-container">
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardItem;
