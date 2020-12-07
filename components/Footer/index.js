import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
            Developed by 
            Marvin Lemos / {' '}
            <a className='hover:underline' href='https://www.linkedin.com/in/marvin-lemos-289425a/'>Linkedin</a> / {' '}
            <a className='hover:underline' href='https://github.com/marvinlemos'>Github</a>

            <div className='mt-2'>
                <img className='inline p-4' src='/images/logo_fsm_week.png' />
                <img className='inline p-4' src='/images/logo_devpleno.png' />
            </div>
            </div>
        </div>
    )
}

export default Footer