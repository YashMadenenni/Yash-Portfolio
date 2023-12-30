import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ThemeToggle = () => {

    const [isDark, setisDark] = useState(1);


//     const [darkMode, setDarkMode] = useState(false);

//     // Effect to set dark mode preference on initial load
//     useEffect(() =>{
//         const savedTheme = localStorage.getItem('theme');

//         if (savedTheme) {
//             setDarkMode(savedTheme === "true");
//         }
//     }, []);

//     // Effect to update local storage when dark mode state changes
//     useEffect(() =>{
//         localStorage.setItem('theme', darkMode.toString() );
//         if (darkMode === "true") {
//             // console.log(darkMode);
//             document.documentElement.classList.add('dark')
//         } else {
//             // console.log(darkMode);
//           document.documentElement.classList.remove('dark')

//         }    
        
//     }, [darkMode]);

//     // Handler to toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode((prevDarkMode) => !prevDarkMode);
//   };

  return (
    <div className=" flex gap-2 fixed  bottom-4 sm:right-12 right-2 z-20 text-white">
            <button className={` w-7 h-7 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
            ${isDark === 1?'border-4':''} hover:border-4 hover:border-secondary`} 
            onClick={()=>{
                // toggleDarkMode
                setisDark(1)
                document.documentElement.classList.remove('dark')} } />
            <button className={` w-7 h-7 rounded-xl bg-gradient-to-r from-red-800 via-red-500 to-green-800 
            hover:border-4 hover:border-secondary ${isDark === 2?'border-4':''} `}
            onClick={()=>{
                // toggleDarkMode
                setisDark(2)
             document.documentElement.classList.add('dark') }}/>

            <Link className="text-[10px] text-center" to= '/' onClick={()=>{ window.scrollTo(0,0)}}>
            <Icon icon="icons8:up-round" color="white" width="30" height="30" />
            Top
            </Link>
          </div>
  );

}


export default ThemeToggle; 