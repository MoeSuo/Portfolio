import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { FaSlack } from "react-icons/fa";
import { ImWhatsapp, ImMobile, ImMail4 } from "react-icons/im";
import { useRouter } from "next/router";

const navigation = [
  { name: "CV", href: "/", current: true },
  // { name: "Experience", href: "#", current: false },
  { name: "Visuals", href: "/visuals", current: false },
  {
    name: "Virtual Architecture",
    href: "/Virtual_Architecture",
    current: false,
  },
  { name: "Video Production", href: "/Videos", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const router = useRouter(); // Initialize the useRouter hook

  return (
    <Disclosure as="nav" className="bg-[#F0F4F5] h-28 relative z-10 ">
      {({ open }) => (
        <>
          <div className="max-w-[100%]  h-28 ">
            <div className="relative flex  items-center justify-between h-28 px-8 ">
              <div className="absolute inset-y-0 left-4 flex items-center sm:hidden ">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:justify-start h-28">
                <div className="flex items-center justify-center h-28">
                  {/* Hidden on small screens */}
                  <div className="flex flex-col  items-center  md:block md:h-28">
                    {/* Displayed on small screens */}
                    {/* ... */}
                    <Image
                      className="hidden md:block  md:m-8  h-full w-auto rounded-full"
                      src="/mypic.jpg"
                      alt="Mohamed Sallam Portfolio"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={classNames(
                            router.pathname === item.href
                              ? "bg-gray-900 text-white"
                              : "text-gray-800 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={
                            router.pathname === item.href ? "page" : undefined
                          }
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Download button */}
                {router.pathname === "/" && ( // Render only on CV page
                <Link
                target="_blank"
                  href="mohamed_sallam_cv.pdf" // Replace with the actual path to your PDF file
                  download="mohamed_sallam_cv.pdf" // Customize the downloaded file name
                  className="flex  px-4 relative rounded-full bg-gray-200 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200"
                >
                  CV
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Download</span>
                  <HiDownload className="h-6 w-6" aria-hidden="true" />
                </Link>
                )}
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      Contact
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="mailto:mohamedsallam223v@gmail.com"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <ImMail4 className="mr-2 h-4 w-4 inline-block" />
                            Email
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="tel:+358452548077"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <ImMobile className="mr-2 h-4 w-4 inline-block" />
                            Call
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="https://api.whatsapp.com/send?phone=358452548077"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <ImWhatsapp className="mr-2 h-4 w-4 inline-block" />
                            Whatsapp
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="https://mohamedsallam.slack.com/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <FaSlack className="mr-2 h-4 w-4 inline-block" />
                            Slack
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-100 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    router.pathname === item.href
                      ? "bg-gray-900 text-white "
                      : "text-gray-800 hover:bg-gray-700 hover:text-white bg-gray-200",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={
                    router.pathname === item.href ? "page" : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
