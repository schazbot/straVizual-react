import React, { useState } from "react";
import { HorizontalBar } from "react-chartjs-2";
import ActivityMap from "../components/ActivityMap";
import ActivityCard from "../components/ActivityCard";
import Header from "../components/Header";
const polyline = require("@mapbox/polyline");

const startDateFormat = stDt => {
  let formatted = [];
  const dateArr = stDt.split(/\D+/g);
  formatted.push(dateArr[0], dateArr[1], dateArr[2]);
  return formatted.reverse().join("/");
};

const Home = ({ activities }) => {
  const [selectedActivity, setSelectedActivity] = useState(null);
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

  function randomColor() {
    const colorArray = [
      "rgba(255, 99, 132, 0.3)",
      "rgba(54, 162, 235, 0.3)",
      "rgba(255, 206, 86, 0.3)",
      "rgba(75, 192, 192, 0.3)",
      "rgba(153, 102, 255, 0.3)",
      "rgba(255, 159, 64, 0.3)"
    ];

    let randomColors = [];
    for (let i in distanceArray) {
      randomColors.push(
        colorArray[Math.floor(Math.random() * colorArray.length)]
      );
    }
    return randomColors;
  }

  const data = {
    labels: datesArr,
    datasets: [
      {
        label: "Distance in KM",
        data: distanceArray,
        backgroundColor: randomColor(),
        borderColor: randomColor(),
        borderWidth: 1
      }
    ]
  };

  const options = {
    onClick: (e, item) => {
      if (item[0] === undefined) {
        return null;
      } else {
        findActivityObjectFromDistance(item);
      }
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

  const boundsIndex = selectedActivityPolyline.length / 2;
  const boundsOptions = selectedActivityPolyline[boundsIndex];

  return (
    <div>
      <Header />

      <h4>Your last 10 rides</h4>
      <p>Click a bar to see map and stats</p>
      <HorizontalBar data={data} options={options} />
      {selectedActivity && <ActivityCard selectedActivity={selectedActivity} />}
      {selectedActivity && (
        <ActivityMap
          selectedActivityPolyline={selectedActivityPolyline}
          selectedActivity={selectedActivity}
          bounds={boundsOptions}
        />
      )}
    </div>
  );
};

export default Home;
