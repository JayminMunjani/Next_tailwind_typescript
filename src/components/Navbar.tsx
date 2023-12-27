import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-200">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<span className="text-2xl text-gray-900 font-semibold">
						<Image
							className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
							src="/next.svg"
							alt="Next.js Logo"
							width={180}
							height={37}
							priority
						/>
					</span>
					<div className="flex space-x-4 text-white">
						<a href="#">Dashboard</a>
						<a href="#">About</a>
						<a href="#">Projects</a>
						<a href="#">Contact</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
