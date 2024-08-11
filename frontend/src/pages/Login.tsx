import GoogleLogo from "../assets/google.png";
import reachbox from "../assets/reachbox.svg";

function Login() {
  const handleLogin = () => {
    const redirectTo = encodeURIComponent("http://localhost:5173/onebox");
    const googleLoginUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirectTo}`;
    window.location.href = googleLoginUrl;
  };

  return (
    <div className="w-full h-[100vh] bg-black overflow-hidden">
      <div className="w-full h-[10vh] flex justify-center items-center border-b border-[#25262B]">
        <img
          src={reachbox}
          alt=""
          className="w-[
156.77px] h-[24px]"
        />
      </div>

      <div className="w-full h-[85vh] flex justify-center items-center">
        <div className="w-[460px] h-[312px]  border border-gray-500 bg-[#111214] rounded-[17px] flex flex-col justify-between items-center">
          <div className="w-[380px] h-[103px]  m-4">
            <div className="w-full h-[31px] text-center text-[#FFFFFF] text-[20px] font-[600]">
              Create a new account
            </div>
            <button  onClick={handleLogin} className="w-full h-[48px] relative bottom-0 flex justify-center items-center border border-[#707172] rounded-[4px] mt-[32px]">
              <div>
                <img src={GoogleLogo} alt="" className=" w-[20px] h-[20px] mr-1 text-[16px]" />
              </div>
              <div className="text-[16px] text-[#FFFFFF]">
                {" "}
                Sign Up with Google
              </div>
            </button>
          </div>

          <div className="w-[380px] h-[97px]  mb-[40px] mt-[24px]">
            <div className="w-full flex justify-center">
              <button className="w-[195px] h-[48px] m-auto text-[#FFFFFF] bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-[4px]">
                Create an Account
              </button>
            </div>
            <div className="w-full text-[#909296] text-center mt-[24px] text-[16px] font-sans ">
              Already have an account? Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[32px] bg-[#121212] text-[#5C5F66] text-center text-[12px] font-[400] font-sans pt-1">

      © 2023 Reachinbox. All rights reserved.
      </div>
    </div>
  );
}

export default Login;