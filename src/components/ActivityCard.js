import React from "react";

const ActivityCard = ({ selectedActivity }) => {
  console.log(selectedActivity.max_speed);
  console.log(selectedActivity.average_speed);

  function convertSpeed(speed) {
    const converted = parseFloat(speed) * 3.6;
    const result = converted.toFixed(2);
    return result;
  }

  function secondsToDaysHoursMins(seconds) {
    var days = Math.floor(seconds / (24 * 60 * 60));
    seconds -= days * (24 * 60 * 60);
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return (
      (0 < days ? days + " day, " : "") +
      hours +
      "h, " +
      minutes +
      "m and " +
      seconds +
      "s"
    );
  }

  return (
    <div>
      <p>Av Speed: {convertSpeed(selectedActivity.average_speed)} km/hr</p>
      <p>
        Moving Time: {secondsToDaysHoursMins(selectedActivity.moving_time)}{" "}
        km/hr
      </p>
      <p>
        Elapsed Time: {secondsToDaysHoursMins(selectedActivity.elapsed_time)}{" "}
        seconds
      </p>
      <p>Max Speed: {convertSpeed(selectedActivity.max_speed)} km/hr</p>
      <p>Av Watts: {selectedActivity.average_watts} w</p>
    </div>
  );
};

export default ActivityCard;
