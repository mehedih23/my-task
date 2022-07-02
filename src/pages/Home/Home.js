import React from 'react'
import Add from '../../components/Add'
import HomeBanner from '../../components/HomeBanner'
import Navbar from '../../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeBanner />
            <Add />
        </div>
    )
}

export default Home