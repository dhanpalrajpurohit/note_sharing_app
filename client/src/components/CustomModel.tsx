import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { PaperClipIcon } from '@heroicons/react/20/solid';

interface CustomModelInterface {
    show: boolean
}

export default function CustomModel(props: CustomModelInterface) {
    const [open, setOpen] = useState(props.show);
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center lg:items-center lg:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Applicant Information
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <div className="mt-6 border-t border-gray-100">
                                                    <dl className="divide-y divide-gray-100">
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                                                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                                                        <div className="flex w-0 flex-1 items-center">
                                                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                                                <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                                                                <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ml-4 flex-shrink-0">
                                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                                Download
                                                                            </a>
                                                                        </div>
                                                                    </li>
                                                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                                                        <div className="flex w-0 flex-1 items-center">
                                                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                                                <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                                                                <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ml-4 flex-shrink-0">
                                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                                Download
                                                                            </a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
