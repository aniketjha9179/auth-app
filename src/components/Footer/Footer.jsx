/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
  

<footer className="bg-white">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://github.com/aniketjha9179/auth-app" className="flex items-center">
                  <Logo />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap mb-1 hover:text-white  hover:bg-[#F24877] ml-2 rounded-md  p-1 ">
                  upper</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline"> f</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow Me</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/aniketjha9179" className="hover:underline ">
                            <img
                            className=' relative  h4 w-4  transition-all hover:scale-125'
                            src='/public/github-icon-1.svg' />
                          </a>
                      </li>
                      <li>
                          <a href="https://twitter.com/aniketJha91" className="hover:underline flex   ">
                            <img className=' relative  h-4 w-4 transition-all hover:scale-125' src='/public/twitter-logo-2.svg'/>
                            
                          </a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href=" " className="hover:underline">AJ</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.linkedin.com/in/aniket-jha-3869461b0/" className="text-gray-500 hover:text-gray-900 ">
              <svg  className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"  viewBox="7.025 7.025 497.951 497.95"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stopColor="#2489be"/><stop offset="1" stopColor="#0575b3"/></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#a)"/></svg>
                  <span className="sr-only">Linked-in page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-800  ms-5">
                 <svg fill="none" className="w-4 h-4"  xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.224 1457.67 1048.5639999999999"><path clipRule="evenodd" d="M1075.77 1048.34s-2.8-3.36-7.6-9.13c-13.19-15.87-41.43-50.035-67.67-83.016a2945.986 2945.986 0 0 1-7.096-8.951c163.496-46.179 225.886-148.511 225.886-148.511-44.77 29.486-87.63 51.33-126.91 67.189a623.587 623.587 0 0 1-16.61 6.435c-62.39 26.217-122.3 43.68-180.953 53.67-119.813 22.463-229.635 16.227-323.232-1.245-71.142-13.735-132.294-33.699-183.456-53.662-28.707-11.236-59.906-24.962-91.114-42.434-1.754-1.174-3.511-2.071-5.268-2.952l-.348-.174-.005-.002-.004-.002c-1.866-.934-3.734-1.869-5.602-3.115-2.491-1.246-3.745-2.491-4.99-3.737-16.848-9.361-28.08-16.615-32.643-19.657-1.521-1.014-2.301-1.56-2.301-1.56s3.744 6.24 11.836 16.341c24.278 30.303 87.693 95.354 206.564 130.917-37.436 47.434-83.615 103.586-83.615 103.586C104.823 1039.59 0 858.638 0 858.638 0 456.782 179.711 131.05 179.711 131.05 314.494 29.961 444.363 6.796 500.874 1.531 519.71-.224 530.396.011 530.396.011l12.482 14.98c-224.637 64.88-328.223 163.484-328.223 163.484s24.129-13.159 65.189-32.286c2.737-1.275 5.55-2.577 8.435-3.903C388.434 98.29 473.146 78.169 527.67 69.278c18.175-2.964 32.995-4.68 43.915-5.616.895-.15 1.771-.3 2.635-.448l.056-.009h.003c6.334-1.083 11.949-2.043 18.523-2.043a1055.98 1055.98 0 0 1 252.099-2.491c118.55 13.727 245.849 48.671 375.639 119.804 0 0-86.65-82.262-272.297-146.018a1190.34 1190.34 0 0 0-38.453-12.475L927.261.02s.668-.015 1.964-.01c18.146.076 159.435 4.088 315.165 107.365a704.317 704.317 0 0 1 33.56 23.685s157.95 286.28 177.7 653.184c1.31 24.46 2.02 49.279 2.02 74.395 0 0-106.09 180.952-381.9 189.692zM495.452 465.518c-66.687 0-120.208 54.842-126.638 124.421a153.113 153.113 0 0 0-.648 14.101c0 76.133 57.398 138.53 127.286 138.53 71.142 0 127.295-62.397 127.295-138.53 1.254-76.125-56.153-138.522-127.286-138.522zm455.527 0c-66.696 0-120.225 54.842-126.656 124.421a153.113 153.113 0 0 0-.648 14.101c0 76.133 57.415 138.53 127.304 138.53 71.131 0 127.281-62.397 127.281-138.53 0-76.125-56.15-138.522-127.281-138.522z" fill="#7289da" fillRule="evenodd"/></svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="https://twitter.com/aniketJha91" className="text-gray-500 hover:text-gray-700 dark:hover:text-white ms-5">
              <svg fill="none" className="w-4 h-4  rounded-2xl " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#000"/><path clipRule="evenodd" d="M192.034 98H83l129.275 170.757L91.27 412h55.908l91.521-108.34 81.267 107.343H429L295.968 235.284l.236.303L410.746 99.994h-55.908l-85.062 100.694zm-48.849 29.905h33.944l191.686 253.193h-33.944z" fill="#fff" fillRule="evenodd"/></svg>
                  <span className="sr-only">X page</span>
              </a>
              <a href="https://github.com/aniketjha9179" className="text-gray-500 hover:text-gray-900  ms-5">
                  <svg className=' w-4 h-4'  viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#161614"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500  ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer