import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CountryProps {
  name: {
    common: String;
  };
}

export const Country = () => {
  const [countryList, setCountryList] = useState<CountryProps[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCountry = (name?: string) => {
    axios
      .get(
        `${
          name
            ? `https://restcountries.com/v3.1/name/${name}`
            : "https://restcountries.com/v3.1/all"
        }`
      )
      .then((res) => {
        setCountryList(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);

    getCountry();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setCountryList([]);

    const timeOut = setTimeout(() => {
      getCountry(searchValue);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [searchValue]);

  return (
    <div className="container">
      <h1 className="container-title">
        Country list
        <Link className="container-icon" to="/">
          <svg
            width={7}
            height={12}
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1L1.35355 5.64645C1.15829 5.84171 1.15829 6.15829 1.35355 6.35355L6 11"
              stroke="#262626"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </h1>
      <div className="countrylist">
        <div className="countrylist-form">
          <input
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span className="countrylist-add">
            <svg
              width={7}
              height={12}
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1L1.35355 5.64645C1.15829 5.84171 1.15829 6.15829 1.35355 6.35355L6 11"
                stroke="#6561f5"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </div>
        <div>
          {isLoading ? (
            <p className="countrylist-item__loading">Loading...</p>
          ) : (
            countryList.map((country, i) => (
              <p key={i} className="countrylist-item">
                {country.name.common}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
