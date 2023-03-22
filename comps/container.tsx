import { motion } from 'framer-motion';
import Image from 'next/image';
import WordHome from '../public/WordHome.png';
import WNavbar from './wNavbar';
import TabBar from './TabBar';

export default function Container() {
    return (
        <>
            <motion.div className=" row-span-3 col-span-8 relative bg-white">
                <WNavbar/>
                <TabBar/>
            </motion.div>
        </>
    );
}