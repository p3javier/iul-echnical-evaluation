import React from "react";

export const ChoicesList = (choices: {
  choices: { url: string; votes: number; choice: string }[];
}) => {
  const choicesArr = choices.choices;
  const listOfComponentChoices = choicesArr.map((elem) => {
    return (
      <li>
        {elem.choice}
        {":  "}
        {elem.votes === 1 ? elem.votes + " vote" : elem.votes + " votes"}
      </li>
    );
  });
  return <>{listOfComponentChoices}</>;
};
