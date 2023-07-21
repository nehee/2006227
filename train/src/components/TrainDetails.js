import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // Add custom styles for TrainDetails component if needed
});

function TrainDetails() {
  const classes = useStyles();
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    fetchTrainDetails();
  }, []);

  const fetchTrainDetails = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trains/${trainId}`);
      setTrain(response.data);
    } catch (error) {
      console.error("Error fetching train details:", error);
    }
  };

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <p>Train Name: {train.name}</p>
      <p>Departure Time: {train.departureTime}</p>
      {/* Display other train details */}
    </div>
  );
}

export default TrainDetails;