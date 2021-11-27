import React from "react";
import Button from "./atoms/Button";
import SecondaryButton from "./atoms/SecondaryButton";
import HeroImage from "../assets/HeroBanner.png";

const Hero = () => {
    return (
        <section className="mb-24 py-20 xl:py-32 bg-gray-800">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-24 mx-auto">
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-6xl font text-gray-100">Lorem ipsum dolor sit <span className="underline text-yellow-400">amet consectetur</span>, adipiscing elit</h1>
                    <p className="py-8 lg:py-12 text-xl text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque dolor, mollis in malesuada molestie, imperdiet ac dolor. Fusce dignissim nunc ut enim facilisis, a facilisis</p>
                    <div className="flex">
                        <Button text="learn more" url="/blog"/>
                        <SecondaryButton text="how it works" url="/about" className="ml-4" />
                    </div>
                </div>
                <div className="">
                    <img src={HeroImage} alt="Hero image"/>
                </div>
            </div>
        </section>
    )   
}

export default Hero;