import Featured from "./components/Featureditem"
import Header from "../app/components/Header"
import Image from "next/image"
export default function Home(){
  return(
  <div className="Parentcontent">
    <div className="content">
      <div className="man">
      <Image src={"/man.png"} alt="Ahmed" width={327} height={100}/>
    </div>
       <div className="salestext">
        <h3>Fashion Sale</h3>
       </div>
       <div className="saleshead">
       <h1>50% OFF On Special Items</h1>
       </div>
       <div className="salesparagraph">
       <p>Hi My Name Is Ahmed,In The Opening Of
       This Store I Decided To Give 50% Discount On Special Items So Dont Lose This Opportunity And Avail It Quality Items For Quality People!!!</p>
       </div>
       <div className="button">
         <button>Explore More</button>
       </div>
       <Featured/>
    </div>
  </div>
  )}