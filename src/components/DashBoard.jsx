import React, { useState, useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const profileImgUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkeJNkHylu-0u54GJxFSnEQ_ethWMv2mpxg&s";

const username = "aryan";

function DashBoard() {
  const [Search, setSearch] = useState("");
  const ref = useRef(null);
  const navigate = useNavigate();

  const SidebarLink = ({ to, iconPath, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-[#5B4EF9] text-sm text-white w-full py-4 px-4 rounded-md"
          : "w-full text-sm text-gray-400 py-4 px-4 rounded"
      }
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#e8eaed"
        >
          <path d={iconPath} />
        </svg>
        {label}
      </div>
    </NavLink>
  );
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current);

    if (ref.current && ref.current.value) {
      navigate(`/Profile/${ref.current.value}`);
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="h-full w-1/5 bg-primary flex flex-col items-center text-white">
        <div className="w-[80%] h-full relative">
          {/* Profile Section */}
          <NavLink to={`/Profile/${username}`}>
            <div className="bg-back mt-5 mb-12 p-2 w-full rounded-lg">
              <div className="w-[100%] flex items-center justify-start">
                <img
                  src={profileImgUrl}
                  alt="Profile"
                  className="w-[30%] h-16 object-cover rounded-lg"
                />
                <p className="text-sm font-Montserrat text-gray-400 mx-4">
                  Aryan Kanyawar
                </p>
              </div>
            </div>
          </NavLink>

          <p className="text-xs my-5 font-Montserrat">MENU</p>

          {/* Menu Items */}
          <div className="flex flex-col font-Montserrat">
            <SidebarLink
              to="/"
              iconPath="M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z"
              label="Home"
            />
            <SidebarLink
              to="/Posts"
              iconPath="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z"
              label="Posts"
            />
            <SidebarLink
              to="/Donation"
              iconPath="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"
              label="Donation"
            />
            <SidebarLink
              to="/Alumnis"
              iconPath="M96-192v-92q0-25.78 12.5-47.39T143-366q54-32 114.5-49T384-432q66 0 126.5 17T625-366q22 13 34.5 34.61T672-284v92H96Zm648 0v-92q0-42-19.5-78T672-421q39 8 75.5 21.5T817-366q22 13 34.5 34.67Q864-309.65 864-284v92H744ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm336-144q0 60-42 102t-102 42q-8 0-15-.5t-15-2.5q25-29 39.5-64.5T600-624q0-41-14.5-76.5T546-765q8-2 15-2.5t15-.5q60 0 102 42t42 102ZM168-264h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-264Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21ZM384-264Zm0-360Z"
              label="Alumnis"
            />
            <SidebarLink
              to="/Settings"
              iconPath="m403-96-22-114q-23-9-44.5-21T296-259l-110 37-77-133 87-76q-2-12-3-24t-1-25q0-13 1-25t3-24l-87-76 77-133 110 37q19-16 40.5-28t44.5-21l22-114h154l22 114q23 9 44.5 21t40.5 28l110-37 77 133-87 76q2 12 3 24t1 25q0 13-1 25t-3 24l87 76-77 133-110-37q-19 16-40.5 28T579-210L557-96H403Zm59-72h36l19-99q38-7 71-26t57-48l96 32 18-30-76-67q6-17 9.5-35.5T696-480q0-20-3.5-38.5T683-554l76-67-18-30-96 32q-24-29-57-48t-71-26l-19-99h-36l-19 99q-38 7-71 26t-57 48l-96-32-18 30 76 67q-6 17-9.5 35.5T264-480q0 20 3.5 38.5T277-406l-76 67 18 30 96-32q24 29 57 48t71 26l19 99Zm18-168q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102q0 60 42 102t102 42Zm0-144Z"
              label="Settings"
            />
          </div>

          {/* Logout Button */}
          <NavLink to={`/Profile/${username}`}>
            <button className="absolute text-gray-400 bottom-12 bg-back flex p-4 items-center justify-between rounded-lg w-full h-[60px]">
              <p>Logout</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#e8eaed"
              >
                <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h264v72H216Zm440-161-51-51 122-122H384v-72h343L605-646l51-51 198 198-198 198Z" />
              </svg>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 h-screen overflow-y-auto no-scrollbar">
        <div className="w-full h-20 py-8 flex items-start justify-between">
          <div className="mx-10 bg-primary w-[300px] h-[45px] rounded-md pr-4">
            <form
              action=""
              className="flex justify-between items-center w-full h-full"
              onSubmit={handleSearchSubmit}
            >
              <input
                id="Search"
                type="text"
                value={Search}
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                ref={ref}
                className="bg-primary h-full w-[200px] text-gray-300 rounded-md p-4"
              />
              <label htmlFor="Search" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#e8eaed"
                >
                  <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
                </svg>
              </label>
            </form>
          </div>
          <div className="flex w-[300px] h-[45px] gap-2">
            <button onClick={()=>navigate()}>
              <div className="bg-primary flex justify-center items-center p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M240-384h336v-72H240v72Zm0-132h480v-72H240v72Zm0-132h480v-72H240v72ZM96-96v-696q0-29.7 21.15-50.85Q138.3-864 168-864h624q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H240L96-96Zm114-216h582v-480H168v522l42-42Zm-42 0v-480 480Z"/></svg>
              </div>
            </button>
            <button onClick={()=>navigate()}>
              <div className="bg-primary flex justify-center items-center p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M192-216v-72h48v-240q0-87 53.5-153T432-763v-53q0-20 14-34t34-14q20 0 34 14t14 34v53q85 16 138.5 82T720-528v240h48v72H192Zm288-276Zm-.21 396Q450-96 429-117.15T408-168h144q0 30-21.21 51t-51 21ZM312-288h336v-240q0-70-49-119t-119-49q-70 0-119 49t-49 119v240Z"/></svg>
              </div>
            </button>
            <button onClick={()=>navigate('/Settings')}>
              <div className="bg-primary flex justify-center items-center p-3 rounded-lg">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#e8eaed"
                >
                  <path d="m403-96-22-114q-23-9-44.5-21T296-259l-110 37-77-133 87-76q-2-12-3-24t-1-25q0-13 1-25t3-24l-87-76 77-133 110 37q19-16 40.5-28t44.5-21l22-114h154l22 114q23 9 44.5 21t40.5 28l110-37 77 133-87 76q2 12 3 24t1 25q0 13-1 25t-3 24l87 76-77 133-110-37q-19 16-40.5 28T579-210L557-96H403Zm59-72h36l19-99q38-7 71-26t57-48l96 32 18-30-76-67q6-17 9.5-35.5T696-480q0-20-3.5-38.5T683-554l76-67-18-30-96 32q-24-29-57-48t-71-26l-19-99h-36l-19 99q-38 7-71 26t-57 48l-96-32-18 30 76 67q-6 17-9.5 35.5T264-480q0 20 3.5 38.5T277-406l-76 67 18 30 96-32q24 29 57 48t71 26l19 99Zm18-168q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102q0 60 42 102t102 42Zm0-144Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full h-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
