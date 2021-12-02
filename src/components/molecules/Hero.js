import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/HeroBanner.png";
import { HiArrowNarrowRight } from "react-icons/hi"
import { PrimaryButton, TertiaryButton } from '../atoms';

const Hero = () => {
    return (
        <section className="mb-24 py-20 xl:py-32 bg-gray-800">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-24 mx-auto">
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-6xl font text-gray-100">Lorem ipsum dolor sit <span className="underline text-yellow-400">amet consectetur</span>, adipiscing elit</h1>
                    <p className="py-8 lg:py-12 text-xl text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque dolor, mollis in malesuada molestie, imperdiet ac dolor. Fusce dignissim nunc ut enim facilisis, a facilisis</p>
                    <div className="flex gap-4">
                        <Link to="/blog">
                            <PrimaryButton $light={true}>Learn more</PrimaryButton>
                        </Link>
                        <Link to="/about">
                            <TertiaryButton $light={true}>How it works <HiArrowNarrowRight className="ml-2 "/></TertiaryButton>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <img src={HeroImage} alt="Hero"/>
                </div>
            </div>
        </section>
    )   
}

export default Hero;