'use client';

import { useMediaQueryContext } from './contextApp';

interface NavbarProps {
	toggleSidebar: () => void;
}

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
	const { isMobile } = useMediaQueryContext();

	return (
		<div className="w-full bg-red-400 h-[72px] flex flex-row p-[16px] items-center">
			<div
				className="w-10 h-10 bg-blue-950 cursor-pointer mr-4"
				id="menu-button"
				onClick={toggleSidebar}
			/>
			<div className="flex flex-row">
				<div className="w-10 h-10 bg-blue-200" />
				<div className="w-24 h-10 bg-blue-300" />
			</div>
			<div className="flex px-4">
				<div className="h-[48px] w-1 bg-blue-400 self-center" />
			</div>
			<div className="flex flex-row">
				<div className="w-10 h-10 bg-blue-200" />
				{!isMobile && <div className="w-24 h-10 bg-blue-300" />}
			</div>
			<div className="flex flex-row ml-auto" id="user-group">
				{!isMobile && <div className="w-10 h-10 bg-blue-200 mr-6" />}
				<div className="flex flex-row ml-auto">
					<div className="w-10 h-10 bg-blue-300" />
					{!isMobile && <div className="w-32 h-10 bg-blue-400" />}
				</div>
			</div>
		</div>
	);
};
