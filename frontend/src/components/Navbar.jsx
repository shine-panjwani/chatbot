import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"
export  const styles =
  "relative px-5 py-2 text-base font-medium text-gray-100 border border-gray-700 rounded-full transition-all duration-300  hover:border-gray-500";
export default function Navbar(){
    const navigate = useNavigate();
    return(<>
     <div className="flex items-center h-20 justify-between  relative rounded-2xl m-3">
            <div className="mx-7">Your AI Buddy</div>
            <div className="flex justify-center items-center gap-8 mx-7">
              <motion.button
                className={styles}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={()=>{
                  navigate("/signup")
                }}
              >
                <>Signup</>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className={styles}
                onClick={()=>{
                  navigate("/login")
                }}
              >
                Login
              </motion.button>
            </div>
          </div></>)
}