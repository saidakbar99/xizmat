import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation  } from "react-i18next";

import Ru from '../assets/ru.svg'
import Uz from '../assets/uz.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// (savedLng === 'ru') ? 'underline' : 'no-underline'
export default function Example() {

    const { t, i18n } = useTranslation()

    function setLanguage(lang) {
        i18n.changeLanguage(lang)
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="inline-flex justify-center w-32 rounded-md border border-gray-300 shadow-sm mx-auto py-2 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50">
                {t('Language')}
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-42 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
                <Menu.Item>
                {({ active }) => (
                    <div
                    onClick={() => setLanguage('uz')}
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-2 py-1 text-sm flex items-center'
                        
                    )}
                    >
                        <img className='w-1/4 mr-2' src={Uz} alt="uz" />
                        <span>O`zbekcha</span>
                    </div>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <div
                    onClick={() => setLanguage('ru')}
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-2 py-1 text-sm flex items-center'
                        
                    )}
                    >
                        <img className='w-1/4 mr-2' src={Ru} alt="ru" />
                        <span>Русский</span>
                    </div>
                )}
                </Menu.Item>
            </div>
            </Menu.Items>
        </Transition>
        </Menu>
    )
}