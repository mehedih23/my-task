import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
    return (
        <div class="hero min-h-screen" style={{ "backgroundImage": "url(https://i.ibb.co/LhYsJB6/glenn-carstens-peters-RLw-UC03-Gwc-unsplash.jpg)" }}>
            <div class="hero-overlay bg-opacity-40"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome To <span className='text-accent'>MY TASK</span></h1>
                    <p class="mb-5">ToDo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list.</p>
                    <button className='btn bg-primary border-2 tracking-widest'>
                        <Link to='login'>Login</Link>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default HomeBanner