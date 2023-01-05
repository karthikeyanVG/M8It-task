import React, { useEffect, useState } from "react";
import { getPost } from "../service/ApiService";

const Profile = () => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const getPostApi = async () => {
    let result;
    try {
      setisLoading(true);
      result = await getPost();
      // console.log("result: ", result);
      setData(result);
    } catch (error) {
      setisLoading(false);
      console.log("error: ", error);
    }
    if (result.length > 0) {
      setisLoading(false);
    }
  };
  useEffect(() => {
    getPostApi();
    // console.log("data", data);
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="mt-50 text-center ">Loading.....</p>
      ) : (
        <div className="flex flex-row flex-wrap gap-4 p-10">

          {data.map((e) => {
            return (
              <a href="#"
                class="block w-60 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                 No: {e.id}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                 Name: {e.title}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Profile;
