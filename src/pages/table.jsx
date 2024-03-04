import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState();
  console.log("inputdata", inputData);
  const token = localStorage.getItem("accessToken");
  console.log(token, "token");
  const getCurd = async () => {
    const config = {
      method: "get",
      url: "http://curdapi.pythonanywhere.com/api/curd",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios(config);
      setData(response?.data);
      console.log(response, "responsetable");
    } catch (err) {
      console.log(err, "responsetable");
    }
  };

  useEffect(() => {
    getCurd();
   
  }, []);

  const DeleteData = async (id) => {
    const config = {
      method: "delete",
      url: `http://curdapi.pythonanywhere.com/api/curd/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios(config);
      console.log(response, "responsetable");
      getCurd();
    } catch (err) {
      console.log(err, "responsetable");
    }
  };


  return (
    <>
     <style>{`
      body {
        background-color: #4BE1EC;
      }
    `}
    </style>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex justify-between  dark:bg-gray-900 px-5 my-5">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <input
              type="text"
              id="table-search"
              class="block my-2 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-60 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
              onChange={(e) => setInputData(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center gap-2">

          <button
        onClick={() => navigate("/addcrud")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add +
      </button>
      <button
        onClick={()=>navigate("/login")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Logout
      </button>
      </div>

        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-5 py-3">
                id
              </th>
              <th scope="col" class="px-5 py-3">
                First Name
              </th>
              <th scope="col" class="px-5 py-3">
                Last Name
              </th>
              <th scope="col" class="px-5 py-3">
                Contact
              </th>
              <th scope="col" class="px-5 py-3">
                Dob
              </th>
              <th scope="col" class="px-5 py-3">
              Address
              </th>
              <th scope="col" class="px-5 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((value, index) => {
              return (
                <tr
                  key={index}
                  class="text-[#003CC5] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#6699FF] dark:hover:bg-gray-600"
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>

                  <td class="px-6 py-4">{value.id}</td>
                  <td class="px-6 py-4">{value.first_name}</td>
                  <td class="px-6 py-4">{value.last_name}</td>
                  <td class="px-6 py-4">{value.Contact}</td>
                  <td class="px-6 py-4">{value.Dob}</td>
                  <td class="px-6 py-4">{value.Address}</td>
                  <td class="px-6 py-4">
                    <div className="flex gap-3">
                      <div
                        onClick={() => navigate(`editcrud/${value.id}`)}
                        class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </div>
                      <div
                        onClick={() => DeleteData(value.id)}
                        class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
