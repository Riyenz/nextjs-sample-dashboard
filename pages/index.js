import AuthenticatedLayout from "../layouts/authenticated-layout";
import Head from "next/head";
import Link from "next/link";
import Icon from "../components/icon";

export default function Home() {
  return (
    <AuthenticatedLayout className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between items-start space-x-0 space-y-8 xl:flex-row xl:space-y-0 xl:space-x-8 mb-8">
        <div className="bg-[#FDFDFF] p-7 rounded-[13px] w-full min-w-[340px]">
          <div className="flex justify-between mb-10 items-center">
            <p className="font-bold text-[20px]">Friends</p>
            <div>
              <Icon name="more" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium text-[20px]">271 people</p>
            <div className="flex justify-between">
              <p className="font-medium text-[#979797] text-[20px]">+ 0,7% </p>
              <Icon className="ml-2 mt-1.5 w-[11] h-[12]" name="arrowup" />
            </div>
          </div>
        </div>
        <div className="bg-[#FDFDFF] p-7 rounded-[13px] w-full min-w-[340px]">
          <div className="flex justify-between mb-10 items-center">
            <p className="font-bold text-[20px]">Unique visitors</p>
            <Icon name="more" />
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-[20px]">69 people</p>

            <div className="flex">
              <p className="font-medium text-[#979797] text-[20px]">- 1,7%</p>
              <Icon className="ml-2 mt-1.5 w-[11] h-[12]" name="arrowdown" />
            </div>
          </div>
        </div>
        <div className="bg-[#FDFDFF] p-7 rounded-[13px] w-full min-w-[340px]">
          <div className="flex justify-between mb-10 items-center">
            <p className="font-bold text-[20px]">Followers</p>
            <Icon name="more" />
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-[20px]">288 people</p>
            <div className="flex justify-between">
              <p className="font-medium text-[#979797] text-[20px]">+ 1% </p>
              <Icon className="ml-2 mt-1.5 w-[11] h-[12]" name="arrowup" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start space-x-0 space-y-8 xl:space-x-8 xl:space-y-0 xl:flex-row mb-8">
        <div className="bg-[#FDFDFF] p-7 rounded-[13px] w-full xl:w-9/12 min-h-[242px]">
          <div className="flex justify-between mb-10 items-center">
            <p className="font-bold text-[20px] whitespace-nowrap">
              Audience reach
            </p>
            <div className="ml-auto hidden xl:block">
              <select className="text-[12px] bg-transparent mr-2">
                <option>31/01/2020 - 06/02/2020</option>
              </select>
              <input type="checkbox" className="mr-1 accent-[#7f7fd5]"></input>
              <label className="text-[12px] font-semibold mr-2">Total</label>

              <input type="checkbox" className="mr-1 accent-[#E786D7]"></input>
              <label className="text-[12px] font-semibold">Follower</label>
            </div>
          </div>
        </div>
        <div className="bg-[#FDFDFF] p-7 rounded-[13px] w-full xl:w-3/12 h-[242px]">
          <div className="flex justify-between mb-10 items-center">
            <p className="font-bold text-[20px]">Reach by device</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start space-x-0 space-y-8 xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="bg-[#FDFDFF] p-7 rounded-[7px] w-full h-[242px]">
          <div className="flex justify-between items-center">
            <p className="font-bold text-[20px]">Gender/Age</p>
            <div className="flex justify-between">
              <p className="text-[12px] font-semibold mr-10">Women</p>
              <p className="text-[12px] font-semibold mx-5">Men</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FDFDFF] p-7 rounded-[7px] w-full h-[242px]">
          <div className="flex justify-between items-center">
            <p className="font-bold text-[20px]">Geo</p>
            <div className="flex justify-between">
              <p className="text-[12px] font-semibold mr-10">Country</p>
              <p className="text-[12px] text-[#979797] font-medium mx-5">
                City
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-4 gap-x-12 gap-y-5">
            <div>
              <div className="flex justify-between">
                <p className="text-[12px] font-medium mb-1">Russia</p>
                <p className="text-[12px] font-medium text-[#979797]">97%</p>
              </div>
              <div className="w-full h-[10px] text-[#eff3f9] bg-[#eff3f9] rounded-[9px]">
                <div
                  className="h-[10px] text-[#7f7fd5] bg-[#7f7fd5] rounded-[9px]"
                  style={{
                    width: "97%",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-[12px] font-medium mb-1">China</p>
                <p className="text-[12px] font-medium text-[#979797]">0,26%</p>
              </div>
              <div className="w-full h-[10px] text-[#eff3f9] bg-[#eff3f9] rounded-[9px]">
                <div
                  className="h-[10px] text-[#7f7fd5] bg-[#7f7fd5] rounded-[9px]"
                  style={{
                    width: "0.26%",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-[12px] font-medium mb-1">Ukraine</p>
                <p className="text-[12px] font-medium text-[#979797]">0,20%</p>
              </div>
              <div className="w-full h-[10px] text-[#eff3f9] bg-[#eff3f9] rounded-[9px] ">
                <div
                  className="h-[10px] text-[#7f7fd5] bg-[#7f7fd5] rounded-[9px]"
                  style={{
                    width: "0.20%",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-[12px] font-medium mb-1">USA</p>
                <p className="text-[12px] font-medium text-[#979797]">0,20%</p>
              </div>
              <div className="w-full h-[10px] text-[#eff3f9] bg-[#eff3f9] rounded-[9px] ">
                <div
                  className="h-[10px] text-[#7f7fd5] bg-[#7f7fd5] rounded-[9px]"
                  style={{
                    width: "0.20%",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-[12px] font-medium mb-1">Mongolia</p>
                <p className="text-[12px] font-medium text-[#979797]">0,13%</p>
              </div>
              <div className="w-full h-[10px] text-[#eff3f9] bg-[#eff3f9] rounded-[9px] ">
                <div
                  className="h-[10px] text-[#7f7fd5] bg-[#7f7fd5] rounded-[9px]"
                  style={{
                    width: "0.13%",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-[12px] font-medium mb-1">Other</p>
                <p className="text-[12px] font-medium text-[#979797]">1,37%</p>
              </div>
              <div className="w-full h-[10px] text-[#eff3f9] bg-[#eff3f9] rounded-[9px] ">
                <div
                  className="h-[10px] text-[#7f7fd5] bg-[#7f7fd5] rounded-[9px]"
                  style={{
                    width: "1.37%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
