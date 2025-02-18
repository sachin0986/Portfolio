import { transform } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";


const ButtonsStyle = {
glocyButtons: `px-5 py-2 rounded-3xl shadow-lg text-white font-semibold transition-all duration-300 backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20`,
}

export const EmailMe = () => {
    return(
        <button className={ButtonsStyle.glocyButtons}>
            <span className="text-[#BFFF00]">Email Me</span>
          </button>
    )
}



export const ContactMe = () => {
    return(
        <div>
            <Link target="_blank" to="/contact">
            <button className={ButtonsStyle.glocyButtons}>
                <span className="text-[#BFFF00]">Contact me</span>
            </button>
            </Link>
            
        </div>
    );
};



export const moreInfo = () => {
    return(
        <div>
            <button className={ButtonsStyle.glocyButtons}>
                <span className="text-[#BFFF00]">More Info</span></button>
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