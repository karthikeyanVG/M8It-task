import React from "react";

const CompanyInfo = () => {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-start pb-10 p-5 gap-2">
            <p className=" text-gray-500 dark:text-gray-400">
           <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> Company:</span> M8 IT Solutions Pvt Ltd
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> Address:</span>  3rd Floor, Vue Grande, 339, Chinnaswamy Road, Siddhapudur, Balasundaram Layout, B.K.R Nagar, Coimbatore, Tamil Nadu 641044
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> Phone:</span> 1231231233
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Email:</span> abc@gmail.com 
            </p>
            <div className="flex mt-4 items-center space-x-3 md:mt-6">
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
    </div>
  );
};

export default CompanyInfo;

