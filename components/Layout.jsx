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
                    <ul className="flex flex-row text-black gap-4 text-2xl capitalize">
                        <li>elem</li>
                        <li>elem</li>
                        <li>elem</li>
                    </ul>
                </nav>

                <div className={"container flex flex-col mt-8 flex-1" + (center ? ' items-center justify-center' : '')}>
                    { children }
                </div>
            </div>
        </>
    )
}
