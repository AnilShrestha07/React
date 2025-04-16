const NotFound = ()=>{
    return(
        <>
         <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 px-4">
            <h1 className="text-9xl font-bold text-teal-600">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-center text-lg mt-2 max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>
            <a
                href="/"
                className="mt-6 inline-block bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-all"
            >
                Go Back Home
            </a>
        </div>
        </>
    )
}

export default NotFound