import Image from "next/image";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/login/page";
import Navbar from "./components/Navbar";

export default async function Home() {

  return (
    <div >  
      <Navbar/>  
    <Signup/>
   {/* <Login/> */}
   {/* home page */}
    </div>
  );
}
