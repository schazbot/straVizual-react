import React from "react";

const ActivityCard = ({ selectedActivity }) => {
  return (
    <div>
      <p>Av Speed:{selectedActivity.average_speed}</p>
      <p>Elapsed Time:{selectedActivity.elapsed_time}</p>
      <p>Max Speed:{selectedActivity.max_speed}</p>
      <p>Av Watts:{selectedActivity.average_watts}</p>
    </div>
  );
};

export default ActivityCard;
