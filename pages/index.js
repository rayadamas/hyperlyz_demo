import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useAccount } from "wagmi";
import { useState, useEffect } from "react";

const Home = () => {
  const [userAddress, setUserAddress] = useState("");

// get account hook
const { data: account, isError: accountError, isLoading: accountLoading } = useAccount();

const getCurrentUserAddress = () => {
  const currentUserAddress = account ? account.address.toString() : ""
  setUserAddress(currentUserAddress);
  console.log("Current user address: ", currentUserAddress)
} 

useEffect(() => {
  getCurrentUserAddress(),
  [account]
})

  return (
    <div className="text-[#1a1b0a] bg-[url('../public/assets/background.jpg')] bg-cover  min-h-screen h-screen">
      <Head>
        <meta name="description" content="Feel the music, see the music." />
        <meta name="og:title" content="hype" />
      </Head>    
      <Header />
      <main className="h-full flex flex-col flex-wrap items-center justify-center  ">
        <div className="mt-0 sm:mt-10 flex flex-col flex-wrap items-center">
          <div className=" text-center mb-10 py-8 px-4 border-[20px] border-double border-[#4d44a6] bg-[#183eb6] text-[#000000] font-bold font-roboto text-5xl sm:text-7xl h-fit  w-9/12 lg:w-fit flex flex-row justify-center items-center" >
            Hyperlyz
          </div>

          <div className="fileDrop">
            <div className="dropSplash">
            <div className="audioLoad">
              <img src="..public/assets/analyzer.png" style={{width: "100%", height: "auto"}}/>
              </div>
            </div>
          </div>

          <div className=" py-8 border-[16px] border-double border-[#4d44a6] mt-5 sm:mt-20 bg-[#183eb6] text-[#000000] h-fit w-7/12 flex flex-row flex-wrap justify-center ">
            <div className="mx-2 sm:mx-0 text-center font-roboto font-bold text-3xl sm:text-5xl w-fit flex flex-row justify-center " >
              visulize
            </div>
            <div className="basis-full h-0"></div>
            <Link href="/decisions">
              { userAddress === "" ? (
              <button disabled={true}  className="rounded-3xl font-bold text-xl sm:text-2xl mt-5 py-3 p-3 w-fit h-fit  flex flex-row justify-center justify-items-center border-[4px] border-solid border-[#119ac1] text-[#000000] bg-[#183eb6]" >
                C L O S E D
              </button>
              ) : (
              <button  disabled={false} className="rounded-3xl font-bold text-xl sm:text-2xl mt-5 py-3 p-3 w-fit h-fit  flex flex-row justify-center justify-items-center border-[4px] border-solid  border-[#119ac1] bg-[#183eb6] text-[#000000] hover:text-[#5fa6bb]" >
                E N T E R
              </button>
              )}        
            </Link>
          </div> 
        </div>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
