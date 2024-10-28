import Image from "next/image";

export default function Featured(){
    return(
        <div className="Featured">
        <div className="image1">
           <Image src={"/new clothing  (Poster)_20241028_000615_0000.png"} alt="Ahmed" width={300} height={200}/>
        </div>
        <div className="video1">
            <video autoPlay loop muted>
        <source src="Beige Modern Minimalist Live Selling Fashion Tiktok Story_20241027_231949_0001.mp4" type="video/mp4"/>
        Browser Doesnt Load This Video
       </video>
        </div>
        <div className="image2">
    <Image src={"/Brown Warm Simple Minimalist Modern Fashion Discount Promotion Poster_20241027_231559_0000.png"} alt="Ahmed" width={300} height={200}/>
       </div>
       <div className="featuredbutton">
<button>Check Out</button>
       </div>
       
       <div className="featuredbutton1">
<button>Check Out</button>
       </div>
       
       <div className="featuredbutton2">
<button>Check Out</button>
       </div>
        </div>
    )
}