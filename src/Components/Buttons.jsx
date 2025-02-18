import { transform } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";


const ButtonsStyle = {
glocyButtons: `px-5 py-2 rounded-3xl shadow-lg text-white font-semibold transition-all duration-300 backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20`,
}

export const EmailMe = () => {
    return(
        <button className={ButtonsStyle.glocyButtons}>
            Email Me
          </button>
    )
}



export const ContactMe = () => {
    return(
        <div>
            <button className="bg-emerald-200 text-amber-500 font-semibold py-2 px-6 rounded-4xl shadow-md hover:bg-amber-500 hover:text-white transition-all duration-300">
            Contact me
            </button>
        </div>
    );
};



export const moreInfo = () => {
    return(
        <div>
            <button className="bg-white text-amber-500 font-semibold py-2 px-6 rounded-4xl shadow-md hover:bg-amber-500 hover:text-black transition-all duration-300">More Info</button>
        </div>
    )
};

export const MailLogo = () => {
    return(
        <div>
           <button className={ButtonsStyle.glocyButtons}>sachinarora8279@gmail.com</button>
        </div>
    )
}