import Lottie from 'lottie-react';
import lottiePhoto from '../../assets/photos/banner/Animation - 1715582454787.json'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // dynamic error
  const [nameErr1, setNameErr] = useState('')
  const [nameErr2, setNameErr1] = useState('')
  const [urlErr, setUrlErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [PasswordErr, setPasswrodErr] = useState('')


  const handleSignUP = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const name1 = form.get('name')
    const name2 = form.get('name')
    const email = form.get('email')
    const photo = form.get('photoUrl')
    const phone = form.get('phoneNumber')
    const password = form.get('password')

    console.log(name1, name2, email, photo, phone, password);

    // creating user
    createUser(email, password)
      .then(result => {
        const response = result.user;
        console.log(response);
        setSuccess(response)
        // navigate(location?.state ? location.state : "/login")
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for sign Up',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate(location?.state ? location.state : "/login")
      })
      .catch(error => {
        const errorMessege = error.messege;
        setError(errorMessege)
      })


    // dynamic error set
    if (!name1) {
      setNameErr('Please fullfill your name')
      return;
    }
    setNameErr('')
    if (!name2) {
      setNameErr1('Please fullfill your name')
      return;
    }
    setNameErr('')

    if (!photo == 'text') {
      setUrlErr('Please give us an url')
      return;
    }
    setUrlErr('')
    if (!email) {
      setEmailErr('please write your email')
      return;
    }
    setEmailErr('')

    if (password.length < 6) {
      setPasswrodErr('Create atleast 6 digit password')
      return;
    }

    else if (!/[A-Z]/.test(password)) {
      setPasswrodErr('Atleast one letter should be Uppercase')
      return
    }

    else if (!/[a-z]/.test(password)) {
      setPasswrodErr('Atleast one letter should e Lowercase')
      return;
    }
    setPasswrodErr('')

  }

  return (
    <div>

      <section className="bg-white dark:bg-gray-900">


        <div className="flex justify-center min-h-screen">
          {/* <div className="hidden bg-cover lg:block lg:w-2/5" style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
          </div> */}

          <div className="flex items-center w-full max-w-7xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <div className=' flex-cols-1 lg:flex justify-center items-center'>

                <div>
                  <Lottie className='w-[320px]' animationData={lottiePhoto} />
                </div>
                <h1 className="text-2xl font-semibold tracking-wider text-[#5D9AE5] capitalize">
                  Get your free account now.
                </h1>
              </div>

              <form onSubmit={handleSignUP} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-[#5D9AE5]">First Name</label>
                  <input type="text" placeholder="John" name='name' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  <p className=' text-red-500'>{nameErr1}</p>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-[#5D9AE5]">Last name</label>
                  <input type="text" placeholder="Snow" name='name' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  <p className=' text-red-500'>{nameErr2}</p>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-[#5D9AE5]">Email address</label>
                  <input type="email" placeholder="Enter Your Email" name="email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  <p className=' text-red-500'>{emailErr}</p>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-[#5D9AE5]">Password</label>
                  <input type="password" placeholder="Enter your password" name="password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  <p className=' text-red-500'>{PasswordErr}</p>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-[#5D9AE5]">Photo Url</label>
                  <input type="photoUrl" placeholder="submit your photoUrl" id='photoURL' name="photoUrl" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  <p className=' text-red-500'>{urlErr}</p>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-[#5D9AE5]">Phone number</label>
                  <input type="text" placeholder="XXX-XX-XXXX-XXX" name='phoneNumber' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>



                {/* <div>
                  <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">Confirm password</label>
                  <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div> */}

                <button
                  className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd" />
                  </svg>
                </button>
                {
                  error ? <p className="text-red-500">{error}</p> :
                    success && <p className="text-2xl text-green-500">{success}</p>
                }
              </form>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Register;