import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <p className='mt-12 text-center'>
                Help us to improve our service. <br/>Share your opinion with us.
            </p>
            <div className='text-center my-12'>
                <Link href='/survey'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Share my hint or opinion</a>
                </Link>
            </div>
            <p className='my-12 text-center'>
            Your hint or opinion worths <br/>10% discount on your next meal.
            </p>
        </div>
        
    )
}

export default Index