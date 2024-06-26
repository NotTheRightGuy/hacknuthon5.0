"use client";

import { useState, useRef, useEffect } from "react";
import Icon from "../../public/icon";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Sidebar() {
    const asideRef = useRef(null);

  const { user, isSignedIn } = useUser() || "";

  const [name, setName] = useState("Jeet Gajjar");
  const [email, setEmail] = useState("jeetgajjar@gmail.com");

    const variants = {
        initial: {
            width: "5rem",
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.aside
            className="z-[1000] h-screen overflow-clip fixed   left-0 bg-[#F9FAFB] border-[#CDD7E1] border-r "
            variants={variants}
            initial="initial"
            id="drawer-navigation"
            whileHover={{ width: "250px" }}
        >
            <div
                className={`overflow-y-auto overflow-x-hidden px-4 h-full bg-[#F9FAFB] dark:bg-gray-800 flex flex-col justify-between`}
            >
                <ul className="space-y-2 pt-4">
                    <Link href={"/"}>
                        <Icon />
                    </Link>
                    <Link
                        href={"/dashboard"}
                        className="flex items-center p-2 text-base font-medium
            text-gray-900 rounded-lg dark:text-white hover:bg-gray-100
            dark:hover:bg-gray-700 group"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.5 18H16.125L13.65 13.5C14.025 13.125 14.25 12.6 14.25 12C14.25 10.725 13.275 9.75 12 9.75C10.725 9.75 9.75 10.725 9.75 12C9.75 12.6 9.975 13.125 10.35 13.5L7.875 18H7.5C6.225 18 5.25 18.975 5.25 20.25C5.25 21.525 6.225 22.5 7.5 22.5C8.775 22.5 9.75 21.525 9.75 20.25C9.75 19.65 9.525 19.125 9.15 18.75L11.625 14.175H12.375L14.85 18.75C14.475 19.125 14.25 19.65 14.25 20.25C14.25 21.525 15.225 22.5 16.5 22.5C17.775 22.5 18.75 21.525 18.75 20.25C18.75 18.975 17.775 18 16.5 18ZM12 11.25C12.45 11.25 12.75 11.55 12.75 12C12.75 12.45 12.45 12.75 12 12.75C11.55 12.75 11.25 12.45 11.25 12C11.25 11.55 11.55 11.25 12 11.25ZM7.5 21C7.05 21 6.75 20.7 6.75 20.25C6.75 19.8 7.05 19.5 7.5 19.5C7.95 19.5 8.25 19.8 8.25 20.25C8.25 20.7 7.95 21 7.5 21ZM16.5 21C16.05 21 15.75 20.7 15.75 20.25C15.75 19.8 16.05 19.5 16.5 19.5C16.95 19.5 17.25 19.8 17.25 20.25C17.25 20.7 16.95 21 16.5 21Z"
                                fill="black"
                            />
                            <path
                                d="M18.6 6.825C17.925 3.75 15.225 1.5 12 1.5C8.775 1.5 6.075 3.75 5.4 6.825C3.15 7.275 1.5 9.3 1.5 11.625C1.5 14.325 3.675 16.5 6.375 16.5H6.75V15H6.375C4.5 15 3 13.5 3 11.625C3 9.9 4.35 8.4 6.075 8.25H6.75L6.825 7.65C7.125 4.95 9.375 3 12 3C14.625 3 16.875 4.95 17.175 7.575L17.25 8.25L17.85 8.325C19.575 8.475 20.925 9.975 20.925 11.7C20.925 13.575 19.425 15.075 17.55 15.075H17.25V16.575H17.625C20.325 16.575 22.5 14.4 22.5 11.7C22.5 9.3 20.85 7.275 18.6 6.825Z"
                                fill="black"
                            />
                        </svg>
                        <span className="ml-3 absolute left-20 w-[250px]">
                            Querix
                        </span>
                    </Link>

                    <Link
                        href={"/dashboard/chat-history"}
                        className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 21C9.7 21 7.696 20.2377 5.988 18.713C4.28 17.1883 3.30067 15.284 3.05 13H5.1C5.33333 14.7333 6.10433 16.1667 7.413 17.3C8.72167 18.4333 10.2507 19 12 19C13.95 19 15.6043 18.321 16.963 16.963C18.3217 15.605 19.0007 13.9507 19 12C18.9993 10.0493 18.3203 8.39533 16.963 7.038C15.6057 5.68067 13.9513 5.00133 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H9V10H3V4H5V6.35C5.85 5.28333 6.88767 4.45833 8.113 3.875C9.33833 3.29167 10.634 3 12 3C13.25 3 14.421 3.23767 15.513 3.713C16.605 4.18833 17.555 4.82967 18.363 5.637C19.171 6.44433 19.8127 7.39433 20.288 8.487C20.7633 9.57967 21.0007 10.7507 21 12C20.9993 13.2493 20.762 14.4203 20.288 15.513C19.814 16.6057 19.1723 17.5557 18.363 18.363C17.5537 19.1703 16.6037 19.812 15.513 20.288C14.4223 20.764 13.2513 21.0013 12 21ZM14.8 16.2L11 12.4V7H13V11.6L16.2 14.8L14.8 16.2Z"
                                fill="#555E68"
                            />
                        </svg>

                        <span className="ml-3 absolute left-20">History</span>
                    </Link>

                    <Link
                        href={"/dashboard/settings"}
                        className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.1401 12.94C19.1801 12.64 19.2001 12.33 19.2001 12C19.2001 11.68 19.1801 11.36 19.1301 11.06L21.1601 9.47999C21.3401 9.33999 21.3901 9.06999 21.2801 8.86999L19.3601 5.54999C19.2401 5.32999 18.9901 5.25999 18.7701 5.32999L16.3801 6.28999C15.8801 5.90999 15.3501 5.58999 14.7601 5.34999L14.4001 2.80999C14.3601 2.56999 14.1601 2.39999 13.9201 2.39999H10.0801C9.84011 2.39999 9.65011 2.56999 9.61011 2.80999L9.25011 5.34999C8.66011 5.58999 8.12011 5.91999 7.63011 6.28999L5.24011 5.32999C5.02011 5.24999 4.77011 5.32999 4.65011 5.54999L2.74011 8.86999C2.62011 9.07999 2.66011 9.33999 2.86011 9.47999L4.89011 11.06C4.84011 11.36 4.80011 11.69 4.80011 12C4.80011 12.31 4.82011 12.64 4.87011 12.94L2.84011 14.52C2.66011 14.66 2.61011 14.93 2.72011 15.13L4.64011 18.45C4.76011 18.67 5.01011 18.74 5.23011 18.67L7.62011 17.71C8.12011 18.09 8.65011 18.41 9.24011 18.65L9.60011 21.19C9.65011 21.43 9.84011 21.6 10.0801 21.6H13.9201C14.1601 21.6 14.3601 21.43 14.3901 21.19L14.7501 18.65C15.3401 18.41 15.8801 18.09 16.3701 17.71L18.7601 18.67C18.9801 18.75 19.2301 18.67 19.3501 18.45L21.2701 15.13C21.3901 14.91 21.3401 14.66 21.1501 14.52L19.1401 12.94ZM12.0001 15.6C10.0201 15.6 8.40011 13.98 8.40011 12C8.40011 10.02 10.0201 8.39999 12.0001 8.39999C13.9801 8.39999 15.6001 10.02 15.6001 12C15.6001 13.98 13.9801 15.6 12.0001 15.6Z"
                                fill="#636B74"
                            />
                        </svg>

                        <span className="ml-3 absolute left-20">Settings</span>
                    </Link>
                    <Link
                        href={"/dashboard/profile"}
                        className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                        <svg
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1"
                        >
                            <g clipPath="url(#clip0_41_4232)">
                                <path
                                    d="M18.6242 11.0823C18.7014 10.6637 18.7014 10.2363 18.6242 9.81766L19.3902 9.37531C19.4792 9.32484 19.5178 9.22094 19.4881 9.12297C19.2892 8.48172 18.9478 7.89984 18.5025 7.41891C18.4342 7.34469 18.3244 7.32688 18.2353 7.37734L17.4694 7.81969C17.1458 7.54359 16.7747 7.32984 16.3739 7.18734V6.30266C16.3739 6.20172 16.3027 6.11266 16.2047 6.09188C15.5427 5.94344 14.8688 5.94938 14.2394 6.09188C14.1414 6.11266 14.0702 6.20172 14.0702 6.30266V7.18734C13.6694 7.32984 13.2983 7.54359 12.9747 7.81969L12.2088 7.37734C12.1227 7.32688 12.0098 7.34469 11.9416 7.41891C11.4963 7.89984 11.1548 8.48172 10.9559 9.12297C10.9263 9.22094 10.9678 9.32484 11.0539 9.37531L11.8198 9.81766C11.7427 10.2363 11.7427 10.6637 11.8198 11.0823L11.0539 11.5247C10.9648 11.5752 10.9263 11.6791 10.9559 11.777C11.1548 12.4183 11.4963 12.9972 11.9416 13.4811C12.0098 13.5553 12.1197 13.5731 12.2088 13.5227L12.9747 13.0803C13.2983 13.3564 13.6694 13.5702 14.0702 13.7127V14.5973C14.0702 14.6983 14.1414 14.7873 14.2394 14.8081C14.9014 14.9566 15.5753 14.9506 16.2047 14.8081C16.3027 14.7873 16.3739 14.6983 16.3739 14.5973V13.7127C16.7747 13.5702 17.1458 13.3564 17.4694 13.0803L18.2353 13.5227C18.3214 13.5731 18.4342 13.5553 18.5025 13.4811C18.9478 13.0002 19.2892 12.4183 19.4881 11.777C19.5178 11.6791 19.4762 11.5752 19.3902 11.5247L18.6242 11.0823ZM15.225 11.8898C14.4294 11.8898 13.7852 11.2427 13.7852 10.45C13.7852 9.65734 14.4323 9.01016 15.225 9.01016C16.0177 9.01016 16.6648 9.65734 16.6648 10.45C16.6648 11.2427 16.0206 11.8898 15.225 11.8898ZM7.15 7.6C9.24891 7.6 10.95 5.89891 10.95 3.8C10.95 1.70109 9.24891 0 7.15 0C5.05109 0 3.35 1.70109 3.35 3.8C3.35 5.89891 5.05109 7.6 7.15 7.6ZM13.1231 14.3242C13.0548 14.2886 12.9866 14.247 12.9213 14.2084L12.6867 14.345C12.5086 14.4459 12.3067 14.5023 12.1048 14.5023C11.7812 14.5023 11.4695 14.3658 11.2469 14.1283C10.7036 13.5405 10.288 12.825 10.0534 12.062C9.89016 11.5366 10.1098 10.9814 10.5848 10.7053L10.8194 10.5688C10.8164 10.4916 10.8164 10.4144 10.8194 10.3372L10.5848 10.2006C10.1098 9.9275 9.89016 9.36938 10.0534 8.84391C10.0802 8.75781 10.1188 8.67172 10.1484 8.58563C10.0356 8.57672 9.92578 8.55 9.81 8.55H9.31422C8.65516 8.85281 7.92188 9.025 7.15 9.025C6.37813 9.025 5.64781 8.85281 4.98578 8.55H4.49C2.28719 8.55 0.5 10.3372 0.5 12.54V13.775C0.5 14.5617 1.13828 15.2 1.925 15.2H12.375C12.6748 15.2 12.9539 15.105 13.1825 14.9477C13.1469 14.8348 13.1231 14.7191 13.1231 14.5973V14.3242Z"
                                    fill="#525252"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_41_4232">
                                    <rect
                                        width="19"
                                        height="15.2"
                                        fill="white"
                                        transform="translate(0.5)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>

            <span className="ml-3 absolute left-20">Profile</span>
          </Link>
        </ul>
        <ul className="flex flex-row gap-x-8 mt-2 py-3 px-1 items-center border-t border-gray-200 ">
          <div>
            {/* <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_3_188)">
                                <rect
                                    width="48"
                                    height="48"
                                    rx="24"
                                    fill="#E3EFFB"
                                />
                                <path
                                    d="M18.8192 18.9091H20.788V28.1903C20.788 29.0298 20.6218 29.7479 20.2894 30.3445C19.9613 30.9411 19.4989 31.397 18.9023 31.7124C18.3058 32.0234 17.6069 32.179 16.8058 32.179C16.0685 32.179 15.4059 32.0447 14.8178 31.7763C14.234 31.5078 13.7717 31.1179 13.4308 30.6065C13.0941 30.0909 12.9258 29.4645 12.9258 28.7273H14.8881C14.8881 29.0895 14.9712 29.4027 15.1374 29.6669C15.3079 29.9311 15.5401 30.1378 15.8342 30.2869C16.1325 30.4318 16.4734 30.5043 16.8569 30.5043C17.2745 30.5043 17.6282 30.4169 17.918 30.2422C18.212 30.0632 18.4357 29.8011 18.5891 29.456C18.7425 29.1108 18.8192 28.6889 18.8192 28.1903V18.9091ZM32.5222 23.0447C32.3986 22.657 32.2324 22.3097 32.0236 22.0028C31.8191 21.6918 31.574 21.4276 31.2885 21.2102C31.003 20.9886 30.677 20.8203 30.3105 20.7053C29.9483 20.5902 29.5499 20.5327 29.1152 20.5327C28.378 20.5327 27.7132 20.7223 27.1209 21.1016C26.5286 21.4808 26.0598 22.0369 25.7147 22.7699C25.3738 23.4986 25.2033 24.3913 25.2033 25.4482C25.2033 26.5092 25.3759 27.4062 25.7211 28.1392C26.0662 28.8722 26.5392 29.4283 27.1401 29.8075C27.7409 30.1868 28.4249 30.3764 29.1919 30.3764C29.9036 30.3764 30.5236 30.2315 31.052 29.9418C31.5847 29.652 31.9959 29.2429 32.2857 28.7145C32.5797 28.1818 32.7267 27.5554 32.7267 26.8352L33.2381 26.9311H29.4924V25.3011H34.638V26.7905C34.638 27.8899 34.4036 28.8445 33.9348 29.6541C33.4703 30.4595 32.8269 31.0817 32.0044 31.5206C31.1863 31.9595 30.2488 32.179 29.1919 32.179C28.0073 32.179 26.9675 31.9062 26.0726 31.3608C25.182 30.8153 24.4874 30.0419 23.9888 29.0405C23.4902 28.0348 23.2409 26.8416 23.2409 25.4609C23.2409 24.4169 23.3858 23.4794 23.6756 22.6484C23.9654 21.8175 24.3723 21.1122 24.8965 20.5327C25.4249 19.9489 26.0449 19.5036 26.7566 19.1967C27.4725 18.8857 28.2544 18.7301 29.1025 18.7301C29.8098 18.7301 30.4682 18.8345 31.0776 19.0433C31.6912 19.2521 32.2367 19.5483 32.714 19.9318C33.1955 20.3153 33.5939 20.7713 33.9093 21.2997C34.2246 21.8239 34.4377 22.4055 34.5485 23.0447H32.5222Z"
                                    fill="#12467B"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_188">
                                    <rect
                                        width="48"
                                        height="48"
                                        rx="24"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg> */}
            <UserButton />
          </div>
          <div className="overflow-clip">
            <div>
              <p>{isSignedIn && user.fullName || " "}</p>
              <p className="text-gray-500 text-xs">{isSignedIn && user.emailAddresses[0].emailAddress}</p>
            </div>
          </div>
        </ul>
      </div>
    </motion.aside>
  );
}
