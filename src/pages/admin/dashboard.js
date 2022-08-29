import React from "react";
import axios from "axios";

import Admin from "layouts/Admin.js";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import { ApiInfo } from "utils/config";


export default function Dashboard() {
  // テスト用コード
  const hoge = () => {
    axios.get(`${ApiInfo.baseUrl}${ApiInfo.version}/user`, {withCredentials: true})
      .then((response) => {
        console.log(response.data);
      }).catch((err) => {
        console.error(err);
      })
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <button 
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
            type="button"
            onClick={hoge}
          >
            Large
          </button>
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}



Dashboard.layout = Admin;
