import React from "react";

// components

export default function CardNews() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h6 className="text-blueGray-700 text-xl font-bold">お知らせ</h6>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className="w-full mt-4">
            <div className="flex relative w-full">
              <p className="block text-blueCray-600 text-md font-bold w-1/6 mx-4">2022/8/7</p>
              <p className="block text-blueCray-600 text-md w-5/6">こちらはお知らせです。ダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみー</p>
            </div>
            <hr className="mt-3 border-b-1 border-blueGray-300" />
          </div>
          <div className="w-full mt-4">
            <div className="flex relative w-full">
              <p className="block text-blueCray-600 text-md font-bold w-1/6 mx-4">2022/8/4</p>
              <p className="block text-blueCray-600 text-md w-5/6">こちらはお知らせです。ダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみー</p>
            </div>
            <hr className="mt-3 border-b-1 border-blueGray-300" />
          </div>
          <div className="w-full mt-4">
            <div className="flex relative w-full">
              <p className="block text-blueCray-600 text-md font-bold w-1/6 mx-4">2022/8/1</p>
              <p className="block text-blueCray-600 text-md w-5/6">こちらはお知らせです。ダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみーダミーダミーだみー</p>
            </div>
            <hr className="mt-3 border-b-1 border-blueGray-300" />
          </div>
        </div>
      </div>
    </>
  );
}