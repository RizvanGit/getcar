"use client";

import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

import { IAboutProps } from "@/types";

const About: FC<IAboutProps> = ({ isOpen, closeAbout }) => {
  return (
    <Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeAbout}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 oveflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeAbout}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div>
                      <h2 className="font-semibold text-2xl capitalize">
                        About
                      </h2>
                    </div>
                    <div>
                      <p>Getcar application is built with Next.js 13</p>
                      <ul className="list-disc">
                        Used features and technologies:
                        <li className="text-sm mx-4">
                          Next.js, React, Typescripr, Tailwind
                        </li>
                        <li className="text-sm mx-4">Server side rendering</li>
                        <li className="text-sm mx-4">
                          Search functionality. Find any car with specification.
                        </li>
                        <li className="text-sm mx-4">
                          Custom filter, combobox and modal elements. Filter by
                          year and fuel type.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default About;
