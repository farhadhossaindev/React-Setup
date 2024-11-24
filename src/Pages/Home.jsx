import React from 'react'

function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-[90vh] bg-gray-100 text-black">
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold text-blue-500 mb-4 uppercase">
                        Welcome to React Project
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Setup your project with React, Vite, DaisyUI, and NextUI, React Router Dom
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-primary text-white px-6 py-2 rounded-lg shadow-lg">
                        Get Started
                    </button>
                    <button className="btn btn-outline text-blue-500 border-blue-500 px-6 py-2 rounded-lg shadow-lg">
                        Learn More
                    </button>
                </div>
            </div>


        </>
    )
}
export default Home