import React from "react";
import { useState } from "react";
// import Header from "../comp/Header";
const AllPage = () => {
  const [Down, setdown] = useState(false);

  return (
    <>
      {/*  all pages  */}

      <div>
        <p className=" w-100 ps-4 pt-4 pb-3 pe-4 ">
          <a
            className="btn btn-primary list text-start w-100"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => setdown(!Down)}
          >
            SHOP BY CATEGORIES
            <span className={Down ? "listIcon" : ""}>^</span>
          </a>


          <div className="collapse text-black" id="collapseExample">
            <ul class="list-group list-group-flush">
              <li class="list-group-item list-group-item-action text-black">
                <a className="text-black" href="/">
                  An item
                </a>
              </li>
              <li class="list-group-item list-group-item-action">
                <a href="/" className="text-black">
                  A second item
                </a>
              </li>
              <li class="list-group-item list-group-item-action">
                <a href="/" className="text-black">
                  A third item
                </a>
              </li>
              <li class="list-group-item list-group-item-action">
                <a href="/" className="text-black">
                  A fourth item
                </a>
              </li>
              <li class="list-group-item list-group-item-action">
                <a href="/" className="text-black">
                  And a fifth one
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>
      
      {/* end all pages  */}
    </>
  );
};

export default AllPage;
