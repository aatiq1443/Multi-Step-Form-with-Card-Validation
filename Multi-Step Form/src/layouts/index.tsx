import React, { PropsWithChildren } from 'react';

const FormLayout: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <div className="flex bg-emerald-100 min-h-screen flex-wrap items-center justify-center p-4 md:p-6 2xl:p-10">
    <div className="w-full rounded-2xl border border-stroke shadow-2xl bg-white p-4 shadow-default  dark:border-strokedark dark:bg-boxdark sm:p-12.5 md:w-4/5 xl:w-2/5">
      {children}
    </div>
  </div>
);  

export default FormLayout;
