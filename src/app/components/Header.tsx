import Image from "next/image"
import Link from "next/link"
export default function Header(){
    return(
        <>
        <div className="NavBar">
             <ul className="NavContent">
             <Link href={"/"}><li className="Home">Home</li></Link>
             <Link href={"/products"}><li className="Products">Products</li></Link>
             <Link href={"/About-Us"}><li className="Aboutus">About us</li></Link>
             <Link href={"/Services"}><li className="Services">Services</li></Link>
             <Link href={"/Contact"}><li className="Contactus">Contact us</li></Link>
            </ul>
            <h1 className="Logo">Ahmed<span className="elec">Fashion</span></h1>
            <Image src={"/af.webp"} alt="Ahmed" width={50} height={100} className="af"></Image>
            <Image src={"/search2.png"} alt="Ahmed" width={30} height={100} className="search2"/>
            <Image src={"/2343790.png"} alt="Ahmed" width={30} height={100} className="mail"/>
            <Image src={"/cart-transformed.png"} alt="Ahmed" width={30} height={100} className="cart"/>
            </div>
        </>
    )
}