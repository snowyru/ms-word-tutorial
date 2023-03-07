"use client";
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from "next/font/google";
import styles from '@/styles/Home.module.css';
import {motion, useInView} from 'framer-motion';
import WordHome from '../public/WordHome.png';
import { useEffect, useRef, useState } from 'react';
import useWindowsDimensions from '../comps/useWindowDimensions';

interface ScreenSize{
  width: number;
  height: number;
}

export default function Home() {

  const {height, width} = useWindowsDimensions();
  
  const isScreenSmall = width<1200 && height<700 ;

  return (
    <>
    <motion.div className="grid grid-rows-3 grid-flow-col w-screen h-screen p-10 bg-blue-100" >
      {isScreenSmall && 
      <motion.div className="bg-red-300 fixed justify-center items-center text-center inset-1/4 h-fit z-40" >
          <h1 className='text-4xl font-bold underline underline-offset-4 pt-4'>Hey, your screen is too small, please maximise your window</h1>
          {height}' x '{width}
          <p className='text-2xl text-left px-4' >If this message is still here please adjust your screen size zoom</p>
          <p className='text-2xl text-left px-4' >To do this :</p>
          <p className='text-2xl text-left px-4' >Push and hold ctrl on the bottom left of the keyboard while scrolling with the wheel on the mouse</p>
          <p className='text-2xl text-left px-4 pb-4' >Still struggling? Ask for help!</p>
      </motion.div>
      }
    {/* Instruction side card */}
      <motion.div className=' relative border-blue-500 border-4 p-4 '>
        <h1 className='text-4xl font-bold underline p-2' >Instructions :</h1>
          <p className='text-2xl p-2'>1. Create a header</p>
      </motion.div>
    {/* Word env */}
      <motion.div className=" row-span-3 col-span-8 relative border-red-500 border-4 " 
        style={{}}
      >
        <Image src={WordHome} fill alt="..." />
      </motion.div>
    </motion.div>
    </>

  )
}
