import {Fragment, useState} from 'react'
import {Dialog, Popover, Transition} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const NaviLink = ({label, path, popover = true}) => {
    if (!popover) {
      return (
        <NavLink
          className="rounded-lg -mx-3 block px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
          to={path}
        >
          {label}
        </NavLink>
      )
    } else {
      return (
        <NavLink className={'text-sm font-light  leading-6 text-gray-900'} to={path}>
          {label}
        </NavLink>
      )
    }
  }

  return (
    <header className="font-inter bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink className="-m-1.5 p-1.5" to={'/'}>
            HOME
          </NavLink>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="rounded-md -m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
          </Popover>
          <NaviLink path={'/gallery'} label={'Gallery'} />
          <NaviLink path={'/contact'} label={'Contact'} />
          <NaviLink path={'/about'} label={'About'} />
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NaviLink path={'/'} label={'lasermade'} />
            <button
              type="button"
              className="rounded-md -m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NaviLink popover={false} label={'Gallery'} path={'/gallery'} />
                <NaviLink popover={false} label={'Contact'} path={'/contact'} />
                <NaviLink popover={false} label={'About'} path={'/about'} />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
