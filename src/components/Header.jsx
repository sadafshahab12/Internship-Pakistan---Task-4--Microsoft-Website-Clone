import { useState } from "react";

const Header = () => {
    const [hideHeader, setHideHeader] = useState(false);
    const handleNoThanks = ()=>{
setHideHeader(true)
    }
  return (
    <div className={` justify-between items-center px-20 shadow-md z-10 py-5 mb-4 bg-white ${hideHeader ? "hidden" : "ml:flex"} hidden `}>
      <div className=" flex items-center gap-5">
        <img src="/copilot.png" alt="copilot logo" />
        <div>
          <p className="font-semibold text-18">
            Take the power of Copilot on the go with the free mobile app
          </p>
          <p className="text-13">
            Create images and get tailored answers based on your interests and
            needs anytime, anywhere
          </p>
        </div>
      </div>
      <div className={`flex items-center gap-8 `}>
        <p className="underline cursor-pointer text-14" onClick={handleNoThanks}>No, thanks</p>

        <button className="bg-blue py-1 px-4 text-white hover:underline cursor-pointer w-40 text-15">
          {" "}
          <a href="https://www.microsoft.com/microsoft-copilot/for-individuals/copilot-app?form=MY02FX&OCID=MY02FX">
            Get Copilot app
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
