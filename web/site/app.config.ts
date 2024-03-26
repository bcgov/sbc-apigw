export default defineAppConfig({
  ui: {
    accordion: {
      wrapper: 'w-full flex flex-col',
      container: 'w-full flex flex-col',
      item: {
        base: '',
        size: 'text-sm',
        color: 'text-bcGovColor-darkGray dark:text-white',
        padding: 'pt-1.5 pb-3',
        icon: 'ms-auto transform transition-transform duration-200'
      },
      transition: {
        enterActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
        leaveActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out'
      },
      default: {
        openIcon: 'i-heroicons-chevron-down-20-solid',
        closeIcon: '',
        class: 'mb-1.5 w-full',
        variant: 'accordian_trigger'
      }
    },
    button: {
      color: {
        white: {
          link: 'text-white text-base font-semibold tracking-wide dark:text-white hover:bg-white/[0.1] dark:bg-gray-900 dark:hover:bg-gray-800/75 focus-visible:ring-2 focus-visible:ring-white dark:focus-visible:ring-white transition-colors duration-300 ease-in-out',
          solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-white'
        }
      },
      variant: {
        accordian_trigger: 'text-bcGovColor-darkGray font-semibold dark:text-white dark:hover:bg-bcGovBlue-100/10 hover:bg-bcGovBlue-50 disabled:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-white transition-colors duration-300 ease-in-out',
        link: 'text-{color}-500 tracking-wide text-base hover:text-{color}-600 disabled:text-{color}-500 dark:text-white dark:hover:text-bcGovBlue-300 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-white',
        solid: 'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-[#E0E7ED] dark:hover:bg-bcGovGray-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-white',
        outline: 'ring-1 ring-inset ring-current text-{color}-500 dark:text-[#E0E7ED] hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-[#E0E7ED]/25 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-white'
      }
    },
    card: {
      ring: 'ring-1 ring-gray-200 dark:ring-gray-300/50',
      divide: 'divide-y divide-gray-200 dark:divide-gray-300/50'
    },
    divider: {
      border: {
        base: 'flex border-bcGovGray-500 dark:border-gray-300/50'
      }
    },
    pagination: {
      wrapper: 'flex items-center -space-x-px',
      base: '',
      rounded: 'first:rounded-s-md last:rounded-e-md',
      default: {
        size: 'sm',
        activeButton: {
          color: 'primary'
        },
        inactiveButton: {
          color: 'white'
        },
        firstButton: {
          color: 'white',
          class: 'rtl:[&_span:first-child]:rotate-180',
          icon: 'i-heroicons-chevron-double-left-20-solid'
        },
        lastButton: {
          color: 'white',
          class: 'rtl:[&_span:last-child]:rotate-180',
          icon: 'i-heroicons-chevron-double-right-20-solid'
        },
        prevButton: {
          color: 'white',
          class: 'rtl:[&_span:first-child]:rotate-180',
          icon: 'i-heroicons-chevron-left-20-solid'
        },
        nextButton: {
          color: 'white',
          class: 'rtl:[&_span:last-child]:rotate-180',
          icon: 'i-heroicons-chevron-right-20-solid'
        }
      }
    },
    table: {
      divide: 'divide-y divide-gray-300 dark:divide-gray-300/50',
      tbody: 'divide-y divide-gray-200 dark:divide-gray-300/50',
      th: {
        color: 'text-bcGovColor-darkGray dark:text-white'
      },
      td: {
        color: 'text-bcGovColor-midGray dark:text-gray-300'
      }
    },
    tabs: {
      wrapper: 'relative space-y-2',
      container: 'relative w-full',
      base: 'focus:outline-none',
      list: {
        base: 'relative',
        background: 'bg-gray-200 dark:bg-gray-800',
        rounded: 'rounded-lg',
        shadow: '',
        padding: 'p-1',
        height: 'h-10',
        width: 'w-full',
        marker: {
          wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
          base: 'w-full h-full',
          background: 'bg-white dark:bg-gray-900',
          rounded: 'rounded-md',
          shadow: 'shadow-sm'
        },
        tab: {
          base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-white dark:focus-visible:ring-white ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
          background: '',
          active: 'text-bcGovColor-activeBlue font-semibold dark:text-white',
          inactive: 'text-bcGovColor-darkGray dark:text-gray-300',
          height: 'h-8',
          padding: 'px-3',
          size: 'text-sm',
          font: 'font-medium',
          rounded: 'rounded-md',
          shadow: ''
        }
      }
    },
    toggle: {
      active: 'bg-{color}-500 dark:bg-{color}-500',
      inactive: 'bg-gray-200 dark:bg-gray-700',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white',
      container: {
        base: 'pointer-events-none relative inline-block rounded-full bg-white dark:bg-white shadow transform ring-0 transition ease-in-out duration-200'
      }
    },
    verticalNavigation: {
      active: 'text-bcGovColor-activeBlue dark:text-white font-semibold',
      inactive: 'text-bcGovColor-midGray dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
      base: 'group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-white before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75'
    }
  }
})
