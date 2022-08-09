import React from "react";

// layout for page
import Admin from "layouts/Admin";
import CardSettings from "components/Cards/CardSettings";

export default function LineFriendDetail() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}

LineFriendDetail.layout = Admin;
