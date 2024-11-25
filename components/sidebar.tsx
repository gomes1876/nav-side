import { motion } from "framer-motion";
import { useMediaQueryContext } from "./contextApp";
import { FileText } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const { isMobile } = useMediaQueryContext();
  return (
    <motion.div
      className={`fixed top-[68px] left-0 h-[calc(100vh-70px)] bg-white drop-shadow-md p-2 flex flex-row ${
        isMobile && !isOpen && "hidden"
      }`}
      animate={{
        width: isOpen ? (isMobile ? "100%" : "20rem") : "3.5rem",
      }}
      initial={false}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-10 rounded-sm bg-green-50 p-1 flex flex-row items-center gap-2 justify-center">
        <div className="flex self-center justify-center">
          <FileText className="w-4 h-4" />
        </div>
        {isOpen && (
          <motion.span
            id="title"
            className="flex-grow text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            example text
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};
