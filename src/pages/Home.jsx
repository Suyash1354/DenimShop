    import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

    const Home = () => {

        const BgRef = useRef(null)

        useGSAP(()=>{

            const tl = gsap.timeline()

            tl.fromTo(BgRef.current,
                { scale: 1.1, filter: "blur(10px)", opacity: 0 }, 
            { scale: 1, filter: "blur(0px)", opacity: 1, duration: 1}
            )
        })
    return (
        <section className='w-full h-screen relative overflow-hiddens'>
    <div className="CONTAINER w-full h-screen">
        <div ref={BgRef} className="BG-IMAGE w-full h-screen z-0 ">
            <img className='lg:w-full lg:h-screen w-full h-screen object-cover ' src="/images/Firefly.png" alt="" />
        </div>
        <div className="w-full h-screen absolute inset-0 z-40  ">
            <img className='lg:w-full lg:h-screen w-full h-screen  object-cover pointer-events-none' src="/images/BG-PNG-CROP.png" alt="" />
        </div>

        <div className="TEXT w-full h-screen absolute inset-0 z-10">
            <div className="NAV-TEXT w-full h-screen  text-[3vw] md:text-[2vw] lg:text-[0.9vw] flex justify-between py-4 px-6 z-50 font-[WeissenhofGrotesk-Regular] text-[#242424] ">
                <h1>FLAGSHIP STORE FRANCE</h1>
                <h1>Maison Noiré 1998</h1>
            </div>
            <div className="HEADINF w-full h-screen absolute inset-0 flex justify-center items-center z-10 overflow-hidden ">
                <h1 className='lg:text-[40vw] md:text-[80vw] text-[90vw] -translate-y-20 md:-translate-y-0 font-[Galgo] text-[#242424]'>NOIRÉ</h1>

                <div className="SUB-TEXT w-full h-screen absolute lg:top-50 md:top-60 top-45c:\Users\Sergio\Downloads\Firefly.png flex justify-center">
                    <h1 className='text-[3vw] lg:w-40  lg:h-8 flex justify-center md:text-[3vw] lg:text-[1vw] font-[WeissenhofGrotesk-Regular] text-[#242424] '>TIMELESS DENIM</h1>
                </div>
            </div>
        </div>
    </div>
        </section>
    )
    }

    export default Home