
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Transition } from '@headlessui/react'

export default function userMessage (message, show) {
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-center px-2 py-2 pointer-events-none sm:p-52 sm:items-center "
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-center">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-orange-400 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-0 flex-1 flex justify-between">
                    <p className="w-0 flex-1 text-lg font-mono text-black">{message}</p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
