import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../service/ApiService";
const GetProfile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate()
  useEffect(() => {
    getFetchUser();
  }, []);

  const getFetchUser = async () => {
    let result;
    try {
      setIsLoading(true);
      result = await getUser();
      console.log('result: ', result);
      setName(result.name)
      setEmail(result.email)
      setPhone(result.phone)
    } catch (error) {}
    setIsLoading(false);
  };
  const onLogOutClick =()=>{
    localStorage.clear()
    navigation('/*')
  }

  return isLoading ? <p className=" text-center">Loading....</p> : (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://t3.ftcdn.net/jpg/01/65/63/94/360_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{phone}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={()=>onLogOutClick()}
            >
              Log Out
            </a>
            <a
              href="/Home"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Back
            </a>
          </div>
        </div>
      </div>
    </div>
  ) 
};

export default GetProfile;
