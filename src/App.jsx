function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-400 via-pink-500 to-red-500 p-4 sm:p-6 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full floating-bg blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full floating-bg2 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300/20 rounded-full floating-bg blur-xl"></div>

      <div className="backdrop-blur-md bg-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30 form-container button-glow">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-white drop-shadow-lg animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}>Welcome Back</h2>
        <form>
          <div className="mb-4 sm:mb-5">
            <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Email</label>
            <input
              type="email"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-300 text-sm sm:text-base input-focus"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 sm:mb-7">
            <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Password</label>
            <input
              type="password"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-300 text-sm sm:text-base input-focus"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition duration-300 shadow-lg text-sm sm:text-base"
          >
            Login
          </button>
        </form>
        <p className="text-center text-white/80 mt-4 text-xs sm:text-sm">Don't have an account? <a href="#" className="text-white font-semibold underline">Sign up</a></p>
      </div>
    </div>
  )
}

export default App
