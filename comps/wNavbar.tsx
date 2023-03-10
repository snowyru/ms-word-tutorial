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
                    <p className="">searchicon Search</p>
                </motion.div>

                <motion.div className="">
                    <p className="">UserName usericon</p>
                </motion.div>

                <motion.div className="">
                    <p className="">newfeatureicon ribbonbaricon minmaxcloseicons</p>
                </motion.div>


            </motion.div>
        </>
    );
}