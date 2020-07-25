import axios from "axios";

const url = `https://disease.sh/v3/covid-19`;

export const getCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchData = async (country) => {
  let changeUrl = url;

  if (country === "worldwide") {
    changeUrl = `${url}/all`;
  } else {
    changeUrl = `${url}/countries/${country}`;
  }

  try {
    const { data } = await axios.get(changeUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/historical/all?lastdays=120`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
