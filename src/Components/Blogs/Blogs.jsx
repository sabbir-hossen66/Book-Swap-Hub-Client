

const Blogs = () => {
  return (
    <div>
      {/* <h2>Hello blogs</h2> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold  text-gray-800  capitalize lg:text-3xl dark:text-white">From the BookSwapHub</h1>

            <p className="max-w-lg mx-auto mt-4 text-yellow-500">
              Books are more than mere objects; they are portals to distant realms, windows into the minds of their creators.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/HKmp4Yt/dang-nguy-n-I1v-t-KAJzzc-unsplash.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Join the Conversation at our Book Swap Hub
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Yet perhaps the greatest gift of books lies not in what they contain, but in the connections they foster. Through literature.
                </p>

                <p className="mt-3 text-sm text-blue-500">21 October 2024</p>
              </div>
            </div>

            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/qB8YxG7/pexels-koshevaya-k-2365312-4031547.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Embracing the Spirit of Book Swapping
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Books are not merely vessels of entertainment; they are also fountains of knowledge, repositories of history.
                </p>

                <p className="mt-3 text-sm text-blue-500">20 October 2024</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/kVLr2p2/pexels-karolina-grabowska-4468170.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Inside Our Book Swap Community
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  In a world where time races by and distractions clamor for our attention, there exists a sanctuary of serenity.
                </p>

                <p className="mt-3 text-sm text-blue-500">22 October 2024</p>
              </div>
            </div>

            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/7rx51Zs/jaredd-craig-HH4-WBGNyltc-unsplash.jpg" alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  Exploring the World of Literary Exchange
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  We are transported to lands unknown, encountering heroes, villains, and everything in between. We walk beside them.
                </p>

                <p className="mt-3 text-sm text-blue-500">23 October 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;