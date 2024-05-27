import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function DropdownList({ options, onChange, selectedOption, label, name }) {
      const [selectedValue, setSelectedValue] = useState(selectedOption);

      return (
            <div>
                  <div className="flex items-center justify-between">
                        <label htmlFor={name} className="block text-sm text-gray-500 dark:text-gray-300">
                              {label}
                        </label>
                  </div>
                  <Listbox value={selectedValue} onChange={(value) => { setSelectedValue(value); onChange(value); }}>
                        <div className="relative mt-1 z-10">
                              <Listbox.Button className="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 py-2.5 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-900 dark:text-gray-300 border border-gray-200 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300">
                                    <span className="block truncate">{selectedValue.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                          <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                          />
                                    </span>
                              </Listbox.Button>
                              <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                              >
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-20">
                                          {options.map((option, optionIdx) => (
                                                <Listbox.Option
                                                      key={optionIdx}
                                                      className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
                                                      }
                                                      value={option}
                                                >
                                                      {({ selected }) => (
                                                            <>
                                                                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                        {option.name}
                                                                  </span>
                                                                  {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                  ) : null}
                                                            </>
                                                      )}
                                                </Listbox.Option>
                                          ))}
                                    </Listbox.Options>
                              </Transition>
                        </div>
                  </Listbox>
            </div>
      );
}
