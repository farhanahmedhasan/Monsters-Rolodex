import { Component } from "react";

import axios from "axios";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
      loading: true,
    };
  }

  async componentDidMount() {
    this.mounted = true;
    try {
      const res = axios.get("https://jsonplaceholder.typicode.com/users");
      const { data } = await res;

      if (this.mounted) {
        this.setState({ monsters: data });
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();
    this.setState({ searchString });
  };

  render() {
    const { monsters, searchString, loading } = this.state;
    const { onSearchChange } = this;

    const searchedMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox
          className="monsters-search-box"
          placeholder={"Search monsters"}
          onChangeHandler={onSearchChange}
        />

        <CardList monsters={searchedMonsters} />

        {loading && <h1>Loading....</h1>}

        {searchedMonsters.length === 0 && !loading && <h1>Sorry We couldn't find any monsters</h1>}
      </div>
    );
  }
}

export default App;
