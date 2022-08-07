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
          <div className="mt-0 sm:mt-10 border-2 border-spacing-1.5 flex flex-col flex-wrap items-center">
          <div className="fileDrop">
            <div className="fileDrop__content">
            <img className="audioDrop"
            src="../public/assets/zorb_purp.png" 
            style={{
              width: 400,
              maxWidth: "95vw",
              height: 400,
              filter: "blur(10px)",
              display: "flex", justifyContent: "center",
              
            }}
            />
            </div>
            
            <span
            style={{ opacity: 1, zIndex: 1, display: 'flex', justifyContent: 'center', color: "white", pointerEvents: "none" }}
            > 

            Drop audio

            </span>
            <span style={{ margin: 3/12 ,color: "white", opacity: "0.75", pointerEvents: "none",display: "flex", justifyContent:"center"}}> .mp3 accepted
            </span>
            <div class="flex items-center justify-center">
            <input type="file" hidden="" accept=".mp3" />
            </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

export default Home;
