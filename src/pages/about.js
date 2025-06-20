import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useInsertionEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/profilepicportfolio.jpeg"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

// 3 hooks by framer motion
// set and get state | pass to multiple components to synchronise motion across them 
const motionValue = useMotionValue(0);
// a motion value that animates to its target with a spring
const springValue = useSpring(motionValue, {duration: 3000})
// a simple state hook for when an element is within the viewport
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
},[isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        // console.log(latest)
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
},[springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Shifana S Shafeek | About Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

            <main className="flex w-full flex-col items-center justify-center
            dark:text-light
            ">
                <Layout className="pt-16">
                <AnimatedText text="Passion Fuels Purpose!" 
                className="mb-16 
                lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8
                "/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className="col-span-3 flex flex-col items-start justify-start
                    xl:col-span-4
                    md:order-2 md:col-span-8
                    ">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75
                        dark:text-light/75
                        ">
                            Biography</h2>

                        <p className="font-medium">
                        Hi, I’m Shifana S Shafeek — a Computer Science and Engineering student at NIT Calicut who enjoys turning caffeine and curiosity into code.
                        </p>

                        <p className="my-4 font-medium">
                        I’ve worked on a range of academic and personal projects, including GreenLens, a sustainability-focused tech initiative, and internal student activity portals to streamline campus workflows.
                        </p>

                        <p className="my-4 font-medium">
                        I'm also exploring the entrepreneurial side of tech through Havenore, my personal venture in the real estate space. Currently in its early stages, Havenore reflects my interest in combining technology with practical, real-world solutions — and is something I’m building independently from the ground up.
                        </p>

                        <p className="my-4 font-medium">
                        My technical strengths lie in C, C++, and foundational web development. I focus on writing clean, functional code and building systems that are efficient and purposeful.
                        </p>

                        <p className="font-medium">
                        Right now, I’m focused on learning by doing — solving problems, shipping projects, and growing as a developer and entrepreneur along the way.
                        </p>
                    </div>
                
                    <div 
                    className="col-span-3 relative h-max rounded-2xl 
                    border-2 border-solid border-dark bg-light p-8
                    dark:bg-dark dark:border-light
                    xl:col-span-4
                    md:order-1 md:col-span-8
                    ">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                        dark:bg-light"  /> 
                        <Image src={profilePic} alt="Shifana" className="w-full h-auto rounded-2xl" 
                        priority
                        sizes='(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw'
                        />
                    </div>

                    <div 
                    className="col-span-2 flex flex-col items-end justify-between
                    xl:col-span-8 xl:flex-row xl:items-center
                    md:order-3
                    ">
                        <div 
                        className="flex flex-col items-end justify-center 
                        xl:items-center
                        ">
                            <span 
                            className="inline-block text-7xl font-bold
                            md:text-6xl sm:text-5xl xs:text-4xl
                            ">
                                <AnimatedNumbers value={50}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75
                            dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm
                            ">
                                satisfied clients</h2>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span 
                            className="inline-block text-7xl font-bold
                            md:text-6xl sm:text-5xl xs:text-4xl
                            ">
                                <AnimatedNumbers value={40}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75
                            dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm
                            ">
                                projects completed</h2>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold
                            md:text-6xl sm:text-5xl xs:text-4xl
                            ">
                                <AnimatedNumbers value={4}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75
                            dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm
                            ">
                                Years of experience</h2>
                        </div>
                    </div>
                </div>

                <Skills />
                <Experience />
                <Education />
                </Layout>
            </main>
        </>
    )
}

export default about;
