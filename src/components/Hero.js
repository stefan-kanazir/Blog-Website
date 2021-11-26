import React from "react";
import Button from "./atoms/Button";
import HeroImage from "../assets/HeroImage.svg";

const Hero = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 py-40">
            <div className="w-3/4">
                <h1 className="mb-6 text-5xl font">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <p className="mb-10 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque dolor, mollis in malesuada molestie, imperdiet ac dolor. Fusce dignissim nunc ut enim facilisis, a facilisis</p>
                <Button text="learn more" url="/blog"/>
            </div>
            <div className="">
                <img src={HeroImage} alt="Hero image"/>
            </div>
        </section>
    )   
}

export default Hero;