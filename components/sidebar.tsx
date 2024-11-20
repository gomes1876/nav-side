'use client';

import { motion } from 'framer-motion';
import { useMediaQueryContext } from './contextApp';

interface SidebarProps {
	isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
	const { isMobile } = useMediaQueryContext();
	return (
		<motion.div
			className={`fixed top-[72px] left-0 h-[calc(100vh-72px)] bg-red-400 p-2 ${
				isMobile && !isOpen && 'hidden'
			}`}
			animate={{
				width: isOpen ? (isMobile ? '100%' : '20rem') : '3.5rem',
			}}
			initial={false}
			transition={{ duration: 0.3 }}
		>
			<div className="w-full h-10 bg-blue-400 p-1 flex flex-row items-center gap-2">
				<div className="w-8 h-8 bg-blue-500 self-start" />
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
