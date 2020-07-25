import React, { useState, useEffect } from "react";
import { getCountries, fetchData } from "./api";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";
import { InfoBox, Map, Table, LineGraph } from "./components";
import "./App.css";
import { sortData } from "./util";
import "leaflet/dist/leaflet.css";
import covidImage from "./images/covid.png";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCountries();
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
        cases: country.cases,
      }));
      setCountries(countries);
      setCountryInfo(await fetchData("worldwide"));
      setMapCountries(data);
      const sortedData = sortData(data, casesType);
      setTableData(sortedData);
    };
    fetchAPI();
  }, [casesType]);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const data = await fetchData(countryCode);
    setCountryInfo(data);
    setCountry(countryCode);
    if (countryCode === "worldwide") {
      setMapCenter([34.80746, -40.4796]);
    } else {
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
    }
    setMapZoom(4);
  };

  return (
    <div className="app">
      <div className="app-left">
        <div className="app-header">
          <img className="image" src={covidImage} alt="COVID-19" />
          <FormControl className="app-dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country, i) => (
                <MenuItem key={i} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app-stats">
          <InfoBox
            classTitle="cases"
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Infected"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            classTitle="recovered"
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            classTitle="deaths"
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <div className="app-right">
        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <h3 style={{ textTransform: "capitalize" }}>
              Live cases {casesType === "cases" ? "infected" : casesType} by
              Country
            </h3>
            <Table countries={tableData} casesType={casesType} />
          </CardContent>
        </Card>
        <Card className="app-graph">
          <CardContent>
            <h3 style={{ marginBottom: 5, textTransform: "capitalize" }}>
              {casesType === "cases" ? "infected" : casesType} cases throughout
              the world
            </h3>
            <LineGraph className="line-graph" casesType={casesType} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
