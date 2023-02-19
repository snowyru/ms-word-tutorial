import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import {motion, useInView} from 'framer-motion';
import WordHome from '../public/WordHome.png';
import { useEffect, useRef } from 'react';

export default function Home() {

  const ref=useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log('Element in view: ', isInView)
  }, [isInView])


  return (
    <>
      {/* <motion.div className="bg-red-300 fixed justify-center items-center text-center inset-1/4 h-fit z-40" >
          <h1 className='text-4xl font-bold underline '>Screen size not just right, yet...</h1>
          <p className='text-2xl' >Please adjust your screen size zoom</p>
          <p className='text-2xl' >To do this please :</p>
          <p className='text-2xl' >Please hold ctrl on the bottom left of the keyboard while scrolling with the wheel on the mouse</p>
          <p className='text-2xl' >Still struggling? Ask for help!</p>
      </motion.div> */}
    {/* Instruction side card */}
      <motion.div ref={ref} className='fixed border-blue-500 border-4 w-[407px] h-[720px] left-0 ml-24 mt-36 p-4'>
        <h1 className='text-4xl font-old underline' >Instructions</h1>
      </motion.div>
    {/* Word env */}
      <motion.div className="fixed border-red-500 border-4 w-[1280px] h-[720px] right-0 mr-24 mt-36" 
        style={{}}
      >
        <Image src={WordHome} fill alt="..." />
      </motion.div>
    </>

  )
}
