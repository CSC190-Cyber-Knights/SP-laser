import {Fragment, useState} from 'react'
import {Dialog, Popover, Transition} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {NavLink} from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileClose = () => {
    setMobileMenuOpen(false)
  }

  const NaviLink = ({label, path, popover = true}) => {
    const linkClasses = 'text-base font-normal text-white hover:text-gray-300'

    if (!popover) {
      return (
        <NavLink className={`block rounded-lg px-3 py-2 ${linkClasses}`} to={`/${path}`} onClick={handleMobileClose}>
          {label}
        </NavLink>
      )
    } else {
      return (
        <NavLink className={linkClasses} to={`/${path}`} onClick={handleMobileClose}>
          {label}
        </NavLink>
      )
    }
  }

  return (
    <header className="font-inter relative z-50 bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink className="text-lg font-medium text-white" to="/">
            <h1 className="font-poppins text-2xl font-bold capitalize">
              ELE<span className="text-red-500">.</span>
            </h1>
          </NavLink>
        </div>

        <div className="flex lg:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NaviLink path="gallery" label="Gallery" />
          <NaviLink path="contact" label="Contact" />
          <NaviLink path="about" label="About" />
          <NaviLink path="signin" label="Sign In" />
        </Popover.Group>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={handleMobileClose}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="text-lg font-medium text-white">
              ELE<span className="text-red-500">.</span>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
              onClick={handleMobileClose}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NaviLink popover={false} label="Gallery" path="gallery" />
                <NaviLink popover={false} label="Contact" path="contact" />
                <NaviLink popover={false} label="About" path="about" />
                <NaviLink popover={false} label="Sign In" path="signin" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
