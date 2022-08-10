import React from "react";

// layout for page
import Admin from "layouts/Admin";
import CardUserDetail from "components/Cards/CardUserDetail";

export default function LineFriendDetail() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardUserDetail />
        </div>
      </div>
    </>
  );
}

LineFriendDetail.layout = Admin;
