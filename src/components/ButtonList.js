import React from "react";
import Button from "./Button";

const buttonLabels = [
  "Gaming",
  "Songs",
  "Politics",
  "Cricket",
  "Live",
  "Cooking",
  "Travel",
  "Technology",
  "Comedy",
  "Education",
  "Fitness",
];

const ButtonList = () => {
  return (
    <div className="overflow-x-scroll">
      <div className="flex p-4" style={{ whiteSpace: "nowrap" }}>
        {buttonLabels.map((label, index) => (
          <Button key={index} name={label} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
