import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

interface Person {
  id: number;
  email: string;
  first_name: string;
  avatar: string;
}

function App() {
  const [persons, setPersons] = useState<Person[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const data = (await axios.get("https://reqres.in/api/users/")).data
        .data as Person[];
      data.map((el) => el.avatar);
      setPersons(data);
    };
    fetchImages();
  }, []);
  return (
    <div className="App">
      {persons.map((person) => (
        <React.Fragment key={person.id}>
          <p>{person.email}</p>
          <img src={person.avatar} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
