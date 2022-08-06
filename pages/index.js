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
          <div className="dropSplash"
          style={{
            overflow: "hidden",
            height: "min-content",
            width: "auto",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            top: "50%",
            left: "50%",
            background: "white"
          }}
          >
          <img className="audioDrop"
          src="../public/assets/zorb_purp.png"
          style={{
            width: 400,
            maxWidth: "95vw",
            height: "auto",
            filter: "blur(10px)"
          }}
          />
          </div>
          <div style={{ zIndex: 1, pointerEvents: "none" }}>
            <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z"
                fill="white"
              />
              <path 
                d= "M34.5 50.0859V20.4141H38.5078V50.0859H34.5ZM21.6562 37.2422V33.2578H51.3516V37.2422H21.6562Z" 
                fill="#B7B7B7"
              />
            </svg>
          </div>
          <span
          style={{ opacity: 1, zIndex: 1, color: "white", pointerEvents: "none" }}
          > 
          Turn on, tune in, drop audio
          </span>
          <span style={{ color: "white", opacity: "0.75", pointerEvents: "none" }}> .mp3 &amp; .wav accepted
          </span>
          <input type="file" hidden="" accept=".png, .jpg, .mp3, .wav" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
