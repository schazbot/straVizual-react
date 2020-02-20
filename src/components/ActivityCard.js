import React from "react";

const ActivityCard = ({ selectedActivity }) => {
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
    <div className="activity-card">
      <div className="activity-header">
        <h4>
          <strong id="activity-name">{selectedActivity.name}</strong>
        </h4>
        <p>
          <strong>Date: </strong>
          {selectedActivity.start_date}
        </p>
      </div>
      <div className="activity-body">
        <p>
          <strong>Av Speed: </strong>
          <br />
          {convertSpeed(selectedActivity.average_speed)} km/hr
        </p>
        <p>
          <strong>Moving Time: </strong> <br />
          {secondsToDaysHoursMins(selectedActivity.moving_time)}
        </p>
        <p>
          <strong>Max Speed: </strong> <br />
          {convertSpeed(selectedActivity.max_speed)} km/hr
        </p>
        <p>
          <strong>Elevation Gain: </strong> <br />
          {selectedActivity.elev_high}m
        </p>
      </div>
      <div className="activity-footer">
        <a href="#nav">
          <p>
            click to jump to map<span>🧭</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default ActivityCard;
