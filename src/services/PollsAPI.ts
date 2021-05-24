import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", //modificar para usar variable de entorno
});

interface IPollResult {
  published_at: string; //cambiar a Date
  url: string;
  question: string;
  choices: {
    url: string;
    votes: number;
    choice: string;
  }[];
}

const apiRequest = async () => {
  const { data } = await instance.get("/polls");
  const pollsArr: Array<IPollResult> = data;
  return pollsArr;
};

export default apiRequest;
