import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch } from "react-icons/fa6";
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"

const RightSideNavbar = () => {
  return (
    <div className="">
      <div className="p-2">
        <h3 className="text-xl font-semibold mb-2 ">Login with</h3>
        <button className="btn btn-outline w-full text-blue-600 text-center">
          <FaGoogle />
          Login with google
        </button>
        <button className="btn btn-outline my-2 w-full text-center">
          <FaGithub />
          Login with google
        </button>
      </div>

      <div className="p-2">
        <h3 className="text-xl font-semibold mb-2 ">Find us on</h3>
        <a href="" target="_blank" className="border p-2 rounded-t-lg w-full flex items-center justify-start text-lg">
          <FaFacebook className="mr-3"/>
          <span>Facebook</span>
        </a>
        <a href="" target="_blank" className="border-x p-2 w-full flex items-center justify-start text-lg">
          <FaTwitch className="mr-3"/>
          <span>Twitter</span>
        </a>
        <a href="https://console.firebase.google.com/project/react-dragon-61d36/authentication/providers" target="_blank" className="border p-2 rounded-b-lg w-full flex items-center justify-start text-lg">
          <FaInstagram className="mr-3"/>
          <span>Instagram</span>
        </a>
      </div>
      {/* Q-zone */}
      <div className="p-2 mx-2  rounded-md mt-3 border bg-[#F3F3F3]">
        <h3 className="text-xl font-semibold mb-2 ">Q Zone</h3>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
    
      </div>


    </div>
  );
};

export default RightSideNavbar;
