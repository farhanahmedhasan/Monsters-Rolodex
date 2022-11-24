import { useState, useEffect } from "react";

import axios from "axios";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [searchedMonsters, setSearchedMonsters] = useState(monsters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = axios.get("https://jsonplaceholder.typicode.com/users");
        const { data } = await res;
        setMonsters(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newSearchedMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    setSearchedMonsters(newSearchedMonsters);
  }, [monsters, searchField]);

  console.log(searchedMonsters);

  const handleSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        placeholder={"Search monsters"}
        onChangeHandler={handleSearchChange}
      />

      <CardList monsters={searchedMonsters} />

      {loading && <h1>Loading....</h1>}

      {searchedMonsters.length === 0 && !loading && (
        <h1>Sorry We couldn't find any monsters</h1>
      )}
    </div>
  );
};

export default App;
