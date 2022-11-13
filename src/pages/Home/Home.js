import React from 'react'
import classNames from 'classnames'


export function Home() {

    return (
        <div className={classNames(
            'text-blue-500 hover:text-red-500 focus:text-cyan-300 sm:text-green-500 md:text-blue-500 lg:text-gray-500 xl:text-yellow-500',
            'font-bold italic',
            'p-2 m-4 w-20 z-100',
            'border-2 border-gray-500 border-dotted md:border-dashed md:border-red-600',
            'rounded-md',
            (1 + 2 === 4) ? 'bg-green-300' : 'bg-red-200'
        )}>Home</div>
    )
}
