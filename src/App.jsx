import axios from "axios";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  async componentDidMount() {
    this.mounted = true;
    try {
      const res = axios.get("https://jsonplaceholder.typicode.com/users");
      const { data } = await res;

      if (this.mounted) {
        this.setState({ monsters: data });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    this.setState({ searchString });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearch } = this;

    const searchedMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="text"
          placeholder="search monsters"
          onChange={onSearch}
        />
        {searchedMonsters.map((monster) => {
          const { name, id } = monster;
          return <h1 key={id}>{name}</h1>;
        })}

        {searchedMonsters.length === 0 && <h1>Sorry We couldn't find any monsters</h1>}
      </div>
    );
  }
}

export default App;
