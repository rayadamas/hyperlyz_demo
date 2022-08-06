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
          <div className="fileDrop">
            <div className="dropSplash">
            <div className="audioLoad">
              <div class="flex justify-center items-center w-full">
                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-300 rounded-lg border-2 border-black border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">  Click to upload audio</span> (or drag and drop)  </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden"/>
                </label>
                <img src="../public/assets/analyzer.png" className="dropzone-image" />
                
              </div> 
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Home;
