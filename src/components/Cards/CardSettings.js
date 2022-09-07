import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import Cookies from "cookie";
import { useRecoilValue } from "recoil";
import axios from "axios";

import { userState } from "components/State/Provider";
import { ApiInfo } from "utils/config";


export default function CardSettings() {
  const user = useRecoilValue(userState);
  const [popoverShow, setPopoverShow] = useState(false);
  const [popoverText, setPopoverText] = useState('クリックでurlをコピーできます');
  const [popoverIconShow, setPopoverIconShow] = useState(false);
  const [access_token, setAccessToken] = useState('');
  const [secret, setSecret] = useState('');
  const btnRef = React.createRef();
  const popoverRef = React.createRef();

  // ツールチップを表示
  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top"
    });
    setPopoverShow(true);
  };

  // ツールチップを非表示
  const closeTooltip = () => {
    setPopoverShow(false);
    setPopoverText('クリックでurlをコピーできます');
    setPopoverIconShow(false);
  };

  // URLをコピー
  const doCopy = () => {
    const inviteUrl = document.getElementById('invite-url').value;
    navigator.clipboard.writeText(inviteUrl);
    setPopoverText('コピーしました');
    setPopoverIconShow(true);
    setTimeout(() => {
      closeTooltip();
    }, 1000);
  }

  const saveButton = () => {
    const params = {
      user_id: user.id,
      channel_access_token: access_token,
      channel_secret: secret
    }
    axios.post(`${ApiInfo.baseUrl}${ApiInfo.version}/user/settings`, params, {withCredentials: true})
      .then((response) => {
        if (response.data.status !== 200) {
          throw new Error();
        }
        console.log("saved");
      }).catch((err) => {
        alert('保存に失敗しました');
        console.error(err);
      });
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full my-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
            <i className="fas fa-cog"></i>
              {" "}設定
            </h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={saveButton}
            >
              保存する
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.name}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user.email}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              公式LINEアカウント設定
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    channel_access_token
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => {setAccessToken(e.target.value)}}
                    value={access_token}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    channel_secret
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => {setSecret(e.target.value)}}
                    value={secret}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                  <input 
                    type="text" 
                    id="invite-url"
                    disabled
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-blueGray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="http://localhost:3000/admin/settings"
                  />
                  <span 
                    className="cursor-pointer z-10 h-full leading-snug font-normal absolute text-center text-blueGray-400 bg-transparent rounded text-base items-center justify-center w-10 right-0 pr-3 py-3 "
                    onMouseEnter={openTooltip}
                    onMouseLeave={closeTooltip}
                    onClick={doCopy}
                    ref={btnRef}
                  >
                    <i className="fas fa-clone"></i>
                  </span>
                  <div
                    className={
                      (popoverShow ? "" : "hidden ") +
                      "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                    }
                    ref={popoverRef}
                  >
                    <p
                      className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    >
                      <i className={(popoverIconShow ? "" : "hidden ") + "fas fa-check"}></i>
                      {" "}{popoverText}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="New York"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="United States"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                    and Open Source."
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}