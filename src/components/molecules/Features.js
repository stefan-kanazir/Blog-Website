import React from 'react'
import FeatureBox from '../atoms/FeatureBox'

const Features = () => {
    return (
        <section>
            <h2 className="text-5xl mb-16 font-semibold">Benefits of working with us</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                <FeatureBox title = "Time zones ain’t no thing" />
                <FeatureBox title = "Full spectrum of services" />
                <FeatureBox title = "Impossible? We’re on it" />
                <FeatureBox title = "Flexible work terms" />
            </div>
        </section>
    )
}

export default Features
