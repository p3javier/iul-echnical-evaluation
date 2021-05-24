import React from "react";
import apiRequest from "../services/apiRequest";
import AcordionElement from "../AcordionElement/AcordionElement";

export default async function apiHandler() {
  const data = await apiRequest();
  //@ts-ignore
  const result = data.map((element) => <AcordionElement element={element} />);
  return result;
}
