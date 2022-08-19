import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-5 w-auto"
                    src="https://ik.imagekit.io/ubdvpx7xd0j/newP/Vector_zcSUUjNKv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660830413717"
                    alt="storage"
                  />
                  <span className="px-1 py-2 text-white">StorageConnect</span>
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                <a
                  href="#"
                  className=" text-white inline-flex items-center px-1 pt-1  text-sm font-medium"
                >
                  Active Listings
                </a>
                <a
                  href="#"
                  className="border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Sell your self storage
                </a>
                <a
                  href="#"
                  className="border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Free Evaluation
                </a>
                <a
                  href="#"
                  className="border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Learn
                </a>
                <a
                  href="#"
                  className="border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white mainbg"
                  >
                    Contact
                  </button>
                </a>
              </div>

              <div className="-mr-2 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block text-white h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block text-white h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="#"
                className="text-white block pl-5 pr-4 py-2 text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className=" text-white block pl-5 pr-4 py-2  text-base font-medium"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className=" text-white block pl-5 pr-4 py-2  text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className=" text-white block pl-5 pr-4 py-2  text-base font-medium"
              >
                Calendar
              </Disclosure.Button>
            </div>
            {/* <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
