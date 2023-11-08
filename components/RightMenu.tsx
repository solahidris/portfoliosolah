import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  PhoneIcon,
  InboxIcon,
} from '@heroicons/react/20/solid';
import {
  HomeIcon,
  IdentificationIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

interface RightMenuProps {
  scrollToSection: (ref: string) => void;
}

const RightMenu: React.FC<RightMenuProps> = ({ scrollToSection }) => {
  const menuRouteHandler = (ref: string) => {
    if (scrollToSection) {
      scrollToSection(ref);
    }
  };

  const phoneMenuHandler = (event: React.MouseEvent, ref: string) => {
    event.preventDefault();
    if (ref === 'phoneDiv') {
      window.location.href = 'tel:+60127710626';
    } else if (ref === 'emailDiv') {
      window.open(
        `mailto:${'solah.eth@gmail.com'}?subject=${encodeURIComponent(
          'Work Opportunity'
        )}&body=${encodeURIComponent(
          'Hello Sol, I saw your website and wanted to reach out.'
        )}`
      );
    }
  };

  const solutions = [
    {
      name: "Home",
      description: "Let's Start Here",
      ref: "homeDiv", // This is the section ID you want to scroll to
      icon: HomeIcon,
    },
    {
      name: "Tech Stack",
      description: "Things I use to code features",
      ref: "techStackDiv", // This is the section ID you want to scroll to
      icon: IdentificationIcon,
    },
    {
      name: "Projects",
      description: "Solutions I've made to my own problems",
      ref: "projectsDiv", // This is the section ID you want to scroll to
      icon: CommandLineIcon,
    },
    {
      name: "Contact",
      description: "Let's Get Connected",
      ref: "contactDiv", // This is the section ID you want to scroll to
      icon: ChatBubbleLeftRightIcon,
    },
  ];
  const callsToAction = [
    { name: "Email", ref: "emailDiv", icon: InboxIcon },
    { name: "Phone", ref: "phoneDiv", icon: PhoneIcon },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover as={Fragment}>
      <Popover.Button 
        className="inline-flex items-center gap-x-1 text-xs font-mono leading-6 text-white absolute z-40 bg-neutral-900/30 w-full flex justify-center px-10 py-4 shadow-md"
        onClick={() => setIsOpen(!isOpen)} // Toggle the menu on click
      >
        <span className="font-mono ">solah.eth</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-20 flex w-[90vw] max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-neutral-100/95 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 text-sm">
              {solutions.map((item) => (
                <div
                  onClick={() => menuRouteHandler(item.ref)}
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50/50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-neutral-100">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a className="font-semibold text-gray-900 cursor-pointer">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600 text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                  onClick={(event) => phoneMenuHandler(event, item.ref)}
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default RightMenu;
