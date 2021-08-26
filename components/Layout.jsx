import React from 'react'
import Head from 'next/head'

export default function Layout({children, center}) {
    return (
        <>
            <Head>
                <title>Mi floristería</title>
                <link rel="icon" href="/favicon.ico" />
            </ Head>

            <div className="flex flex-col items-center min-h-screen w-full bg-white">

                <nav className="flex flex-row w-full justify-between w-100 bg-white shadow-md p-6">
                    <span className="text-black text-2xl">La Floristería</span>
                    <ul className="hidden md:flex flex-row text-black gap-12 text-2xl">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contacto</li>
                    </ul>
                </nav>

                <div className={"container flex flex-col py-8 flex-1" + (center ? ' items-center justify-center' : '')}>
                    { children }
                </div>

                <footer className="bg-gray-900 text-white flex flex-row justify-center items-center p-12 gap-12 w-full">
                    <span>TailwindCSS + NextJS</span>
                    <span>© Website creado por Alejandro Navarro Laguna y Pablo Asenjo Serrano</span>
                </footer>
            </div>
        </>
    )
}
