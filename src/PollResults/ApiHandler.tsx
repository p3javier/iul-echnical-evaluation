import React from "react";
import apiRequest from "../services/PollsAPI";
import AcordionElement from "../AcordionElement/AcordionElement";
import { v4 as uuidv4 } from "uuid";

export default async function apiHandler() {
  const data = await apiRequest();

  const result = data.map((element) => (
    <AcordionElement key={uuidv4()} element={element} />
  ));
  return result;
}
