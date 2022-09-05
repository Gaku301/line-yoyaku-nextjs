import React from "react";

import CardTable from "components/Cards/CardTable.js";
import CardNews from "components/Cards/CardNews";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar"
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Tables() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full py-24">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <CardNews />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
              <CardTable />
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
