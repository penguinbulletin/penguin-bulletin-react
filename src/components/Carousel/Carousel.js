import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';

// ensure both versions have the same total width
function Carousel({ version }) {
  return (
    <>
      <div className="logos">
        {version == 1 && <>
          <div className="logos-slide">
            <img src={require("./images/00011-1708643940.png")} />
            <img src={require("./images/00032-4225888734.png")} />
            <img src={require("./images/423CCC087099C4FBA91A740FE9BFE23D11745D63122BF1A7BE3447576C70D7BA.jpg")} />
            <img src={require("./images/00001-1380118209.png")} />
            <img src={require("./images/00035-3215713467.png")} />
            <img src={require("./images/00045-4027083201.png")} />
            <img src={require("./images/00039-1407073935.png")} />
            <img src={require("./images/00023-1226184068.png")} />
            <img src={require("./images/00047-3369223760.png")} />
            <img src={require("./images/00007-2888668801.png")} />
            <img src={require("./images/00001-2387014993.png")} />
            {/* <img src={require("./images/00007-1015468391.png")} /> */}
            <img src={require("./images/00026-125597338.png")} />
          </div>
          <div className="logos-slide">
            <img src={require("./images/00011-1708643940.png")} />
            <img src={require("./images/00032-4225888734.png")} />
            <img src={require("./images/423CCC087099C4FBA91A740FE9BFE23D11745D63122BF1A7BE3447576C70D7BA.jpg")} />
            <img src={require("./images/00001-1380118209.png")} />
            <img src={require("./images/00035-3215713467.png")} />
            <img src={require("./images/00045-4027083201.png")} />
            <img src={require("./images/00039-1407073935.png")} />
            <img src={require("./images/00023-1226184068.png")} />
            <img src={require("./images/00047-3369223760.png")} />
            <img src={require("./images/00007-2888668801.png")} />
            <img src={require("./images/00001-2387014993.png")} />
            {/* <img src={require("./images/00007-1015468391.png")} /> */}
            <img src={require("./images/00026-125597338.png")} />
          </div>
        </>}
        {version == 2 && <>
          <div className="logos-slide">
            <img src={require("./images/00022-1905461262.png")} />
            <img src={require("./images/00019-2465253653.png")} />
            <img src={require("./images/00001-1111242243.png")} />
            <img src={require("./images/00016-3673961484.png")} />
            <img src={require("./images/00078-1685108821.png")} />
            <img src={require("./images/00016-626031399.png")} />
            <img src={require("./images/00003-1380118211.png")} />
            <img src={require("./images/77409FBA2D04BC95BF36557E0A3F93CAC067AFCE032396940DDCCBCB6959B173.jpg")} />
            <img src={require("./images/00033-403745536.png")} />
            <img src={require("./images/00024-4087651057.png")} />
            <img src={require("./images/00040-3791836701.png")} />
            <img src={require("./images/00041-3625628304.png")} />
          </div>
          <div className="logos-slide">
            <img src={require("./images/00022-1905461262.png")} />
            <img src={require("./images/00019-2465253653.png")} />
            <img src={require("./images/00001-1111242243.png")} />
            <img src={require("./images/00016-3673961484.png")} />
            <img src={require("./images/00078-1685108821.png")} />
            <img src={require("./images/00016-626031399.png")} />
            <img src={require("./images/00003-1380118211.png")} />
            <img src={require("./images/77409FBA2D04BC95BF36557E0A3F93CAC067AFCE032396940DDCCBCB6959B173.jpg")} />
            <img src={require("./images/00033-403745536.png")} />
            <img src={require("./images/00024-4087651057.png")} />
            <img src={require("./images/00040-3791836701.png")} />
            <img src={require("./images/00041-3625628304.png")} />
          </div>
        </>}
      </div>

    </>
  );
};

export default Carousel;