import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ActivityMap from "../components/ActivityMap";
import ActivityCard from "../components/ActivityCard";
const polyline = require("@mapbox/polyline");

const startDateFormat = stDt => {
  let formatted = [];
  const dateArr = stDt.split(/\D+/g);
  formatted.push(dateArr[0], dateArr[1], dateArr[2]);
  return formatted.reverse().join("/");
};

const Home = ({ activities }) => {
  const [selectedActivity, setSelectedActivity] = useState([]);
  const [selectedActivityPolyline, setSelectedActivityPolyline] = useState([]);

  const distanceArray = activities.map(activity =>
    (activity.distance / 1000).toFixed(1)
  );

  const datesArr = activities.map(activity =>
    startDateFormat(activity.start_date)
  );

  function findActivityObjectFromDistance(item) {
    let itemDistance = item[0]._chart.data.datasets[0].data[item[0]._index];
    let activityIndex = distanceArray.indexOf(itemDistance);

    let decodedPolyline = polyline.decode(
      activities[activityIndex].map.summary_polyline
    );

    setSelectedActivity(activities[activityIndex]);

    return setSelectedActivityPolyline(decodedPolyline);
  }

  const data = {
    labels: datesArr,
    datasets: [
      {
        label: "Distance in KM",
        data: distanceArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    onClick: (e, item) => {
      findActivityObjectFromDistance(item);
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <div>
      <h1>Your last 30 rides</h1>
      <Bar data={data} options={options} />
      <ActivityMap
        selectedActivityPolyline={selectedActivityPolyline}
        selectedActivity={selectedActivity}
      />

      <ActivityCard />
    </div>
  );
};

export default Home;
