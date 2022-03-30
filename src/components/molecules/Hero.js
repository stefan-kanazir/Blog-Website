import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/HeroBanner.png";
import { HiArrowNarrowRight } from "react-icons/hi"
import { PrimaryButton, TertiaryButton } from '../atoms';

const Hero = () => {
    return (
        <section className="mb-24 py-20 xl:py-24 bg-gray-800">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-24 mx-auto">
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-6xl font text-gray-100">Welcome to the <span className="text-yellow-400">SmartCommerce</span> blog</h1>
                    <p className="py-8 lg:py-12 text-xl text-gray-200">We provide actionable insights to help you stay on the cutting edge of ecommerce. Join our thought leadership community to get ecommerce tips, trends and news delivered right to your inbox.</p>
                    <div className="flex gap-4">
                        <Link to="/blog">
                            <PrimaryButton $light={true}>Get started</PrimaryButton>
                        </Link>
                        <Link to="/about">
                            <TertiaryButton $light={true}>How it works <HiArrowNarrowRight className="ml-2 "/></TertiaryButton>
                        </Link>
                    </div>
                </div>
                <img src={HeroImage} alt="Ecommerce statistic"/>
            </div>
        </section>
    )   
}

export default Hero;