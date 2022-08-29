import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { ApiInfo } from "utils/config";

export default function Navbar() {
  const router = useRouter();
  const handleLogout = (e) => {
    e.preventDefault();
    // Logout
    axios.post(`${ApiInfo.baseUrl}${ApiInfo.version}/logout`, {}, {withCredentials: true})
      .then((response) => {
        if (response.data.status !== 200) {
          throw new Error();
        }
        // Cookieの削除
        axios.get('/api/logout')
          .then(response => console.log(response))
          .catch(error => console.log(error))
        router.push('/auth/login');
      }).catch((err) => {
        alert('ログアウトに失敗しました\n' + err);
        console.error(err);
      });
  }
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-blueGray-800 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a 
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={handleLogout}
                >
                  ログアウト
                </a>
              </li>
            </ul>
          </div>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
