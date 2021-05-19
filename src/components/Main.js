import React from "react";
import Card from "./Card";
import { Todo } from "../utils/data";
const Main = () => {
  return (
    <div className="mt-8 mx-16">
      <h1 className="text-2xl font-medium">Task Manager</h1>
      <div className="flex flex-row justify-between mt-8">
        <Card title="To do" addBtn datas={Todo} />
        <Card title="In Progress" />
        <Card title="In Review" />
        <Card title="Done" />
      </div>
    </div>
  );
};

export default Main;
