import React from "react";

const Feature = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="sm:relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">The</span>
              </span>{" "}
              Quick Topics that we should'be know
            </h2>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-1">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  What is the Purpose of React-Router?
                </p>
                <p className="text-gray-700">
                  Those who need a client-side router, need it for state management. Say you have server-rendered pages, but with some client-side widgets - e.g. a calendar, set of filters or collapsed or open sidebar. Router helps you initialize these components of the page in the exact state you want them. Granted, you could do most of it and all of the use cases I've named on the server, too. But it's usually a lot easier to handle these on the client. You might render it faster on the server, but sometimes, especially when doing partial page updates, it's cheaper and faster to handle that client-side.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  What is a useRef?
                </p>
                <p className="text-gray-700">
                  useRef() is capable of preserving unique value like usestate but unlike usestate it does not trigger re-render. It is mostly used for targeting Dom nodes/elements which allows us to handle uncontrolled inputs.

                  useRef() returns an object which has a current value that is initialized with the useRef argument(initial value) which is changed after the input/any value.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  What does Context API work?
                </p>
                <p className="text-gray-700">
                  As with most component-based frontend frameworks, passing some form of data from one component to another is usually a real need. Typically it comes in the form of passing data from a parent to a child component or even child to parent components. This leads to components having data they don’t actually need, but they need to pass on down the tree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
