const Error = () => {
  return (
    <>
      <div className="min-h-[76vh] flex items-center justify-center bg-gradient-to-r from-green-500 to-purple-600 animate-gradient">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-white">404</h1>
          <p className="text-2xl md:text-3xl font-light text-white mt-4 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-md shadow hover:bg-gray-200 transition duration-300"
          >
            Go to Home
          </a>
        </div>
      </div>
    </>
  );
};
export default Error;
