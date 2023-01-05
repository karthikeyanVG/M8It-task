import React, { useEffect, useState } from "react";
import { getallImg,postImg } from "../service/ApiService";

const Galary = () => {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getFetchImage();
  }, []);

  const getFetchImage = async () => {
    let result;
    try {
      setIsLoading(true);
      result = await getallImg();
      // console.log("result: ", result[0].image);
      let data = result[0].image;
      setImage(data);
    } catch (error) {
      console.log("error: ", error);
    }
    setIsLoading(false);
  };

  const onAddClick = () => {
    setShow(true);
  };


  return isLoading ? (
    <p>loading.....</p>
  ) : (
    <div>
      {!show && (
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {image.map((img) => {
            return (
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg  h-full w-full" src={img} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Galary;
