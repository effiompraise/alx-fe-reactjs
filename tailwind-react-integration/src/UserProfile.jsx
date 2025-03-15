function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
          John Doe
        </h1>
        <p className="text-gray-600 text-sm sm:text-sm md:text-base leading-relaxed">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;