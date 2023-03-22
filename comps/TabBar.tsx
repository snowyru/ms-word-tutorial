import { motion } from "framer-motion";

export default function TabBar() {
    return (
       <>
            <motion.div className="flex grid grid-cols-14 flex text-2xl w-full h-7 pl-2 p-1 text-center bg-slate-100 text-sm">
                {/* LEFT */}
                <motion.div className="text-left">
                    File
                </motion.div>
                <motion.div className="text-left">
                    Home
                </motion.div>
                <motion.div className="text-left">
                    Insert
                </motion.div>
                <motion.div className="text-left">
                    Draw
                </motion.div>
                <motion.div className="text-left">
                    Desgin
                </motion.div>
                <motion.div className="text-left">
                    Layout
                </motion.div>
                <motion.div className="text-left">
                    References
                </motion.div>
                <motion.div className="text-left">
                    Mailings
                </motion.div>
                <motion.div className="text-left">
                    Review
                </motion.div>
                <motion.div className="text-left">
                    View
                </motion.div>
                <motion.div className="text-left">
                    Help
                </motion.div>

                {/* //RIGHT */}                
                Bar file insert draw design layout
            </motion.div>
            <motion.div className="absoloute grid right-0" >
                <motion.div className="text-right">
                    Coments
                </motion.div>
                <motion.div className="text-right">
                    Editing
                </motion.div>
                <motion.div className="text-right">
                    Share
                </motion.div>
            </motion.div>
       </>
    );
}
