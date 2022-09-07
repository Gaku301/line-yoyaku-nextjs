import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import axios from "axios";

import FooterSmall from "components/Footers/FooterSmall";
import { ApiInfo } from "utils/config";


export default function Register() {
  const [access_token, setAccessToken] = useState('');
  const [secret, setSecret] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      user_id: '',
      channel_access_token: access_token,
      channel_secret: secret
    }
    axios.post(`${ApiInfo.baseUrl}${ApiInfo.version}/user/create-line-bot`, params, {withCredentials: true})
      .then((response) => {
        if (response.data.status !== 200) {
          throw new Error();
        }
        setTimeout(() => {
          router.push('/admin/tables');
        }, 1000);
      }).catch((err) => {
        alert('保存に失敗しました')
        console.log(err);
      });
  }

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-blueGray-500 text-xl font-bold">
                          LINE-YOYAKU
                        </h6>
                      </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-4">
                          channel_access_token と channel_secret とは？
                        </label>
                        <p>
                          <a 
                            className="text-emerald-500 font-bold hover:underline text-center"
                            target="_blank"
                            rel="noreferrer"
                            href="https://manager.line.biz/"
                          >
                            公式LINEアカウント管理画面
                          </a>
                          から取得できます
                        </p>
                      </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form onSubmit={handleSubmit}>
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                            channel_access_token
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Channel Access Token"
                            onChange={(e) => {setAccessToken(e.target.value)}}
                            value={access_token}
                            required
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                            channel_secret
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Channel Secret"
                            onChange={(e) => {setSecret(e.target.value)}}
                            value={secret}
                            required
                          />
                        </div>

                        <div className="text-center mt-6 w-full justify-center">
                          <button
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-1/2 ease-linear transition-all duration-150"
                            type="submit"
                          >
                            連携する
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
