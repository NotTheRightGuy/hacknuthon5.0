"use client"

import {motion, AnimatePresence} from "framer-motion";
import { useState, useEffect } from "react";
import GreenDot from "@/public/green-dot";
import { useUser} from '@clerk/nextjs'

export default function Navbar(props:any) {
    const [dropDownMenu, setDropDownMenu] = useState(false);

    const [currSelectedDatabase, setCurrSelectedDatabase] = useState("SQL Main");

    return (
        <div className="flex w-full justify-between p-4 items-center">
            <div className="flex ">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15.5V11H10.5V15.5H14.25V9.5H16.5L9 2.75L1.5 9.5H3.75V15.5H7.5Z" fill="#636B74" />
                </svg>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.27875 5L6.22125 6.0575L9.65625 9.5L6.22125 12.9425L7.27875 14L11.7788 9.5L7.27875 5Z" fill="#636B74" />
                </svg>

                <p className="text-blue-500 text-sm">
                    {props.currPage}
                </p>

            </div>
            <motion.div
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    setDropDownMenu(!dropDownMenu);
                }}
                className="border-[#D1D5DB] relative border-solid border-2 rounded-xl px-2 p-1 flex items-center gap-1 cursor-pointer select-none"
            >
                <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.5 7.25L9 11.75L13.5 7.25"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {currSelectedDatabase}
                <div className="animate-pulse">
                    <GreenDot />
                </div>
                <AnimatePresence>
                        <motion.div
                            className={`${dropDownMenu
                                    ? "absolute top-12 right-1 bg-white w-36"
                                    : "hidden"
                                } border-[1px] border-solid border-[#D1D5DB] rounded-lg`}
                        >
                            <h3 className="p-2 w-max">{currSelectedDatabase}</h3>
                            <hr />
                            <div className="flex flex-col px-1 p-1">
                                <p className="hover:bg-[#D1D5DB] px-1 rounded" onClick={()=>{
                                    setCurrSelectedDatabase("SQL Main")
                                    setDropDownMenu(false)
                                }}>
                                    SQL Main
                                </p>
                                <p className="hover:bg-[#D1D5DB] px-1 rounded" onClick={()=>{
                                    setCurrSelectedDatabase("PostgreSQL")
                                    setDropDownMenu(false)
                                }}>
                                    PostgreSQL
                                </p>
                                <p className="hover:bg-[#D1D5DB] px-1 rounded"
                                onClick={
                                    ()=>{
                                        setCurrSelectedDatabase("MongoDB")
                                        setDropDownMenu(false)
                                    }
                                
                                }>
                                    MongoDB
                                </p>
                            </div>
                        </motion.div>
                </AnimatePresence>
            </motion.div>

        </div>
    )
}