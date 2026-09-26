// "use client";

// import { useEffect } from "react";

// type BodyClassProps = {
//     children: React.ReactNode;
//     className: string;
// };

// const BodyClass = ({ children, className }: BodyClassProps) => {
//     useEffect(() => {
//         document.body.classList.add(className);

//         return () => {
//             document.body.classList.remove(className);
//         };
//     }, [className]);

//     return <>{children}</>;
// };

// export default BodyClass;
"use client";

import { useEffect } from "react";

type BodyClassProps = {
  children: React.ReactNode;
  className: string;
};

const BodyClass = ({ children, className }: BodyClassProps) => {
  useEffect(() => {
    const classes = className.split(" ").filter(Boolean);

    // add new classes
    document.body.classList.add(...classes);

    return () => {
      // remove only those classes
      document.body.classList.remove(...classes);
    };
  }, [className]);

  return <>{children}</>;
};

export default BodyClass;