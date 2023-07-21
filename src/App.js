import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import TrainList from "./components/TrainList";
import TrainDetails from "./components/TrainDetails";
import "./App.css";

const API_BASE_URL = "http://your-backend-api-url"; // Replace with your backend API URL

function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchAllTrains();
  }, []);

  const fetchAllTrains = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trains`);
      setTrains(response.data);
    } catch (error) {
      console.error("Error fetching trains:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/">
            <TrainList trains={trains} />
          </Route>
          <Route path="/train/:trainId">
            <TrainDetails />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App