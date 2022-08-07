export default function Footer() {
   return (
      <div className=" fixed bottom-0 left-0  font-bold justify-center items-center border-t-1 border-solid border-t-white">
         <div className="bg-black text-white pt-2 pb-0 px-3 w-fit">
            <a
               href="https://github.com/Valcoholics/hyperlyz_demo"
            >
               Project Details
            </a>
         </div>         
         
         <div className="bg-black text-white py-2 px-3">
            <a
               href="https://etherscan.io/address/0x7e6663e45ae5689b313e6498d22b041f4283c88a"
            >
               Etherscan 
            </a>
         </div>
      </div>      
   )
}