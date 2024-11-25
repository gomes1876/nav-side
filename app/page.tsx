"use client";

import { MediaQueryProvider } from "@/components/contextApp";
import DocumentHeader from "@/components/documentHeader";
import { Navbar } from "@/components/navbar";
import SearchBar from "@/components/searchBar";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MediaQueryProvider>
      <div className="overflow-hidden flex flex-col h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-grow">
          <Sidebar isOpen={isOpen} />
          <div
            id="body-view"
            className="p-8 m-1.5 flex-grow bg-white lg:ml-[calc(3.5rem+6px)] md:ml-[calc(6.5rem+6px)] sm:ml-[calc(3.5rem+6px)]"
          >
            <div className="flex flex-row justify-between">
              <DocumentHeader />
              <SearchBar />
            </div>
            <div className="bg-gray-150 w-full h-[1px] mt-6 mb-6" />
          </div>
        </div>
      </div>
    </MediaQueryProvider>
  );
}
