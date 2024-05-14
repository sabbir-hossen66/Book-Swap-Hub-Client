import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

import loginLottie from '../../assets/photos/banner/Animation - 1715583388356.json'
import Lottie from "lottie-react";
import { GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/cordova";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext)

  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const [googleUser, setGoogleUser] = useState(null)
  console.log(googleUser);

  const provider = new GoogleAuthProvider();

  // sign in button's function
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const response = result.user;
        setSuccess(response)
        // navigate(location?.state ? location.state : "/")
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for sign Up',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate(location?.state ? location.state : "/")
      })
      .catch(error => {
        const errorMessege = error.messege;

        setError(errorMessege)
      })


  }

  // googleSign in
  const handleGoogleSign = () => {
    // e.preventDefault();
    googleSignIn(provider)
      .then(result => {
        const googleUser = result.user;
        setGoogleUser(googleUser);
        navigate(location?.state ? location.state : "/")
        Swal.fire({
          title: 'Successfully Google Login!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })

      })
      .catch(error => {
        const googleError = error.message;
        setGoogleUser(googleError);
      })
  }

  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className="container flex-cols-1 lg:flex items-center justify-center min-h-screen px-6 mx-auto">
        <Lottie className="w-[420px] mr-16" animationData={loginLottie} />

        <form onSubmit={handleSignIn} className="w-full max-w-md">


          <h1 className="mt-3 text-2xl font-semibold text-[#3B82F6] capitalize sm:text-3xl ">
            sign In</h1>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>

            <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" required />

          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>

            <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" required />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign in
            </button>

            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

            {/* <button onClick={handleGoogleSign} className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

              <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
              </svg>

              <span className="mx-2">Sign in with Google</span>
            </button> */}

            <div className="flex flex-col w-full max-w-xs gap-y-5">
              <button onClick={handleGoogleSign} className="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                <svg className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3033_94454)">
                    <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                    <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                    <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04" />
                    <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3033_94454">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span>Sign in with Google</span>
              </button>
            </div>




            <div className="mt-6 text-center ">
              <Link to={'/register'}>
                <button href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                  Don’t have an account yet? Sign up
                </button>
              </Link>
            </div>
          </div>
          {
            error ? <p className="text-red-500 text-xl">{error}</p> :
              success && <p className="text-2xl text-green-500">{success}</p>
          }
        </form>
      </div>
    </section>
  );
};

export default Login;






