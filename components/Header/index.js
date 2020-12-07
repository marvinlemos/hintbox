import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <React.Fragment>
            <div className='bg-gray-200 p-4 shadow-md'>
                <div className='container mx-auto '>
                    <Link href='/'>
                        <a><img className='mx-auto' src='/images/logo_hintbox.png' alt='Hintbox' /></a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-300 p-4 shadow-md text-center'>
                <Link href='/about'>
                    <a className='px-2 hover:underline'>Sobre</a>
                </Link>
                <Link href='/contact'>
                    <a className='px-2 hover:underline'>Contact</a>
                </Link>
                <Link href='/survey'>
                    <a className='px-2 hover:underline'>Survey</a>
                </Link>
            </div>
        </React.Fragment> //Agrupar os dois divs na mesma estrutura
    )
}

export default Header
