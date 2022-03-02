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
      <div className="flex flex-col justify-between items-start space-x-0 space-y-8 xl:flex-row xl:space-y-0 xl:space-x-8">
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

            <div className="flex justify-between">
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
    </AuthenticatedLayout>
  );
}
