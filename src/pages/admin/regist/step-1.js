import { useRouter } from "next/router";
import FooterSmall from "components/Footers/FooterSmall";


export default function Step_1() {
  const router = useRouter();
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-blueGray-500 text-2xl">
                          公式LINEアカウントを <br/><strong>お持ちでない方</strong>
                        </h6>
                      </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-center mt-6 w-4/5 justify-center">
                        <button
                          className="bg-blueGray-50 text-buleGray-800 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                        >
                          公式LINEアカウントを作成せず始める
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 mt-3"
                          type="button"
                        >
                          公式LINEアカウントを作成する
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-blueGray-500 text-2xl">
                          公式LINEアカウントを<br/><strong>既に持っている方</strong>
                        </h6>
                      </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10">
                      <div className="text-center mt-6 w-4/5 justify-center">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                          // step-2へ遷移
                          onClick={() => {router.push('/admin/regist/step-2')}}
                        >
                          公式LINEアカウントを連携する
                        </button>
                      </div>
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