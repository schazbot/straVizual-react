import React from "react";
import Activity from "../components/Activity";

const Home = ({ activities }) => {
  return (
    <div>
      <h1>Your last 30 activities</h1>
      {activities.map(activity => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default Home;
