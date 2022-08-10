import React from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";


const NotificationDropdown = () => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top"
    });
    setPopoverShow(true);
  };
  const closeTooltip = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <Link href="/admin/line-friend-detail">
        <a
          className="text-blueGray-500 py-1 px-3"
          href="#pablo"
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
          ref={btnRef}
        >
          <i className="fas fa-ellipsis-v"></i> 
        </a>
      </Link>
      <div
        className={
          (popoverShow ? "" : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
        ref={popoverRef}
      >
        <p
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          詳細を確認する
        </p>
      </div>
    </>
  );
};

export default NotificationDropdown;
