import React from 'react'
import Layout from '/components/Layout'
import Image from 'next/image'

export default function index() {
  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full justify-around h-full">
        <div className="flex flex-col gap-12 px-6">
          <h1 className="text-3xl bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
            Bienvenido a nuestro blog
          </h1>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl text-primary font-semibold">Últimas entradas del blog</h2>
            <div className="flex flex-col gap-4">
              <div className="blog-head">
                <h3 className="blog-title-preview">Como regar tus plantas</h3>
                <span className="italic">20/08/2021</span>
                <p>Una entrada con informacion acerca de como regar tus maravillosas plantas</p>
              </div>

              <div className="blog-head">
                <h3 className="blog-title-preview">Como regar tus plantas</h3>
                <span className="italic">20/08/2021</span>
                <p>Una entrada con informacion acerca de como regar tus maravillosas plantas</p>
              </div>

              <div className="blog-head">
                <h3 className="blog-title-preview">Como regar tus plantas</h3>
                <span className="italic">20/08/2021</span>
                <p>Una entrada con informacion acerca de como regar tus maravillosas plantas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover">
        <Image  src="/images/flowers.png" width="512" height="512" alt="Some flowers" />
        </div>
      </div>
    </Layout>
  )
}
