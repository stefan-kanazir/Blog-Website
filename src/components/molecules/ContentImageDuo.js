import React from 'react'
import { SecondaryButton } from '../atoms/Buttons'

const ContentImageDuo = ({reverse, image}) => {
    return (
        <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 mt-24 items-center`}>
            <div className="w-full md:w-1/2 h-full rounded-xl md:overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">                
                    <img className="w-full h-full object-center object-cover" src={`/images/${image}.jpg`} alt="Shopify" />
                </div>
            </div>
            <article className="md:w-1/2 md:p-12 lg:p-16">
                <h3 className="text-3xl lg:text-5xl font-semibold mb-8">Heading</h3>
                <p className="md:text-lg mb-8 md:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                <SecondaryButton>How it works</SecondaryButton>
            </article>
        </section>
    )
}

export default ContentImageDuo