import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Menu
      as="div"
      className="fixed bottom-6 right-0 z-30 flex w-24 flex-col items-center sm:hidden"
    >
      {({ open }) => (
        <>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="mb-2 flex flex-col space-y-4 text-center">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/#home">
                    <a
                      className={`cursor-pointer rounded-md  p-1 shadow-md ${
                        active ? "bg-neutral-700" : "bg-neutral-800"
                      }`}
                    >
                      home
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/#about-me">
                    <a
                      className={`cursor-pointer rounded-md  p-1 shadow-md ${
                        active ? "bg-neutral-700" : "bg-neutral-800"
                      }`}
                    >
                      about me
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/#projects">
                    <a
                      className={`cursor-pointer rounded-md  p-1 shadow-md ${
                        active ? "bg-neutral-700" : "bg-neutral-800"
                      }`}
                    >
                      projects
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/#contact">
                    <a
                      className={`cursor-pointer rounded-md  p-1 shadow-md ${
                        active ? "bg-neutral-700" : "bg-neutral-800"
                      }`}
                    >
                      contact
                    </a>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>

          <Menu.Button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500">
            {open ? (
              <IoMdClose className="h-8 w-8" />
            ) : (
              <AiOutlineMenu className="h-8 w-8" />
            )}
          </Menu.Button>
        </>
      )}
    </Menu>
  );
};

export default MobileMenu;
