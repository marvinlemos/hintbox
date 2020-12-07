import React from 'react'
import Link from 'next/link'


const Survey = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Hints and opinions</h1>
            <p className='text-center mb-6'>
                Help us to improve our service.<br/>Share you opinion with us.
            </p>

            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Name:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-5/6' />
            </div>

            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Email:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-5/6' />
            </div>

        </div>
    )
}

export default Survey