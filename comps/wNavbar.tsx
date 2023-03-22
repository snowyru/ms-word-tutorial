import { motion } from "framer-motion";

export default function WNavbar() {
    return (
        <>
            <motion.div className='grid grid-cols-7 flex text-2xl w-full h-7 pl-2 p-1 text-center bg-slate-100 text-sm'
            >
                <motion.div className="text-left">
                    <p className="">Auto save</p>
                </motion.div>

                <motion.div className="text-left">
                    <p className=" ">Saveicon u/ricon</p>
                </motion.div>

                <motion.div className="">
                    <p className=" ">Document name</p>
                </motion.div>

                <motion.div className="col-span-2">
                    <motion.div className="flex text-left pl-2 p-[0.5px] bg-grey-800" style={{backgroundColor:"#bebeb6"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>

                        <p className="pl-1">Search</p>
                    </motion.div>
                </motion.div>

                <motion.div className=""
                style={{marginRight:"-0.5rem"}} >
                    <p className="">UserName usericon</p>
                </motion.div>

                <motion.div className="flex pl-1 absolute justify-end right-0">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 px-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="px-1" viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 px-1">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                </motion.div>


            </motion.div>
        </>
    );
}