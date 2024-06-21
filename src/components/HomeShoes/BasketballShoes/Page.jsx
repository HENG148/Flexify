// import React, { useState } from 'react'
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { Product } from "../../../data/Product";
// import { Button } from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

export default function BasketballShoes() {

  const recommendData = Product.find(type => type.recommend)?.recommend || [];
  
  return (
    <>
      <div>
        <div className='flex items-center gap-4'>
          <p className='text-[1.1rem]'>Recommend for Basketball Players</p>
          <Tooltip title='These Product are inspired by your previous browsing history' arrow>
            <div>
              <HiMiniQuestionMarkCircle className='text-[1.3rem]'/>
            </div>
          </Tooltip>
        </div>

        <div>
          <div className="w-full flex items-center gap-[3rem]">
            {recommendData.map((items, idx) => (
              <div className='w-full' key={idx}>
                <Link to={items.path}>
                  <img className="hover:scale-[1.15] duration-[0.3s]" src={items.image} alt={items.title} width={items.width} />
                  <p>{items.title} </p>
                  <p>{items.low} </p>
                  <p className='text-[1.3rem] font-price text-price font-semibold pl-1'>{items.price} </p>
                </Link>
              </div>
            ))}
            {/* {Recommend.map((ball, idx) => (
              <div className="w-full" key={idx} >
                <Link to={ball.path}>
                  <img className="hover:scale-[1.15] duration-[0.3s]" src={ball.image} alt={ball.title} width={ball.width} />
                  <p>{ball.title} </p>
                  <p>{ball.low} </p>
                  <p className='text-[1.3rem] font-price text-price font-semibold pl-1'>{ball.price} </p>
                </Link>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}