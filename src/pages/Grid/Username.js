import React from 'react'
import classNames from 'classnames';

const colors = ['bg-yellow-100', 'bg-red-100', 'bg-green-100', 'bg-blue-100', 'bg-pink-100']

export function Username(params) {
    const value = params.value;
    const char = value[0].toUpperCase()

    const col = colors[Math.floor(Math.random() * 5)]

    return (
        <div className='flex flex-row justify-start items-center gap-x-2'>
            <div className={classNames('w-8 h-8 rounded-full flex flex-row justify-center items-center', col)}>{char}</div>
            <div>{value}</div>
        </div>
    )
}