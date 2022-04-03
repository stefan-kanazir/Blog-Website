import React from 'react'
import { MdOutlineFeaturedVideo } from 'react-icons/md'

const FeatureBox = ({title}) => {
    return (
        <article className="flex gap-4">
            <div className="min-w-3rem w-12 h-12 bg-gray-800 rounded-full grid place-items-center">
                <MdOutlineFeaturedVideo className="text-xl text-white"/>
            </div>
            <div>
                <h3 className="font-semibold text-2xl mb-2">{title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
            </div>
        </article>
    )
}

export default FeatureBox
