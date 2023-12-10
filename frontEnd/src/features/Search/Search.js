import React from "react";

export default function Search() {
  return (
    <>
      <div className="bg-[#ccdce1] h-96 px-5 flex flex-col pt-16 gap-5 sm:items-center sm:px-96 sm:text-center sm:gap-5 sm:h-[28rem]">
        <h1 className="font-semibold text-2xl sm:text-5xl sm:leading-snug">
          Jobs for Unemployed Youth No Experience? No Problem
        </h1>
        <p>Empowering Youth through No Experience Job Opportunity</p>
        <button className="bg-blue-700 text-white px-3 py-2 w-fit rounded-lg sm:text-lg">
          Find a Job
        </button>
      </div>
      {/* SearchBox */}
      <div className="mx-5 -mt-24 bg-white p-10 rounded-xl shadow-xl sm:w-fit sm:mx-auto">
        <form className="flex flex-wrap justify-center gap-y-4 gap-x-6 sm:flex-row">
          <div className="relative flex items-center">
            <input
              className="border p-3 rounded-xl border-gray-600"
              type="text"
              placeholder="Search for jobs"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute right-3 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          {/* <div className="flex gap-2"> */}
          <select
            className="bg-white p-3 pr-8 border border-gray-600 rounded-xl"
            name=""
            id=""
          >
            <option value="">Industry</option>
            <option value="">Industry</option>
            <option value="">Industry</option>
          </select>
          <select
            className="bg-white p-3 pr-8 border border-gray-600 rounded-xl"
            name=""
            id=""
          >
            <option value="">Location</option>
            <option value="">Industry</option>
            <option value="">Industry</option>
          </select>
          {/* </div> */}
          <button className="bg-blue-700 text-white px-5 py-2 rounded-2xl">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
