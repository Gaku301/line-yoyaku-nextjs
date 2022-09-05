import React from "react";

// import Admin from "layouts/Admin.js";
import CardSettings from "components/Cards/CardSettings.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Settings() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full py-24">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4">
              <CardSettings />
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

// Settings.layout = Admin;
