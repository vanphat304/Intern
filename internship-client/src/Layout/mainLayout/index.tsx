import React from 'react';
import InternBreadCrumb from '../../components/InterBreadCrumb';
import Header from '../../containers/ComponentPages/Header';
import LeftMenu from '../../containers/ComponentPages/LeftMenu';

interface Props {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="grid min-h-screen grid-cols-5">
      <aside className="col-span-1 overflow-y-auto" aria-label="Sidebar">
        <div className="flex h-screen flex-col overflow-y-auto scrollbar-thin bg-gray-300 py-4 px-3 shadow-lg">
          <LeftMenu />
        </div>
      </aside>
      <main className="overflow-y-auto bg-gray-100 col-span-4 h-screen">
        <Header />
        <div className="pl-5">
          <InternBreadCrumb />
          {children}
        </div>
      </main>
    </div>
  );
}
