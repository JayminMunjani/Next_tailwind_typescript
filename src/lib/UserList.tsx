import React from "react";
import { useUser } from "@/customHooks/useUser";

interface userDataType {
	users?: User[];
}

interface User {
	createdAt: string;
	name: string;
	avatar: string;
	gender: string;
	id: number;
}

const UserList = () => {
	const userData: userDataType = useUser();
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
			{userData?.users?.map((value: User, index: number) => {
				return (
					<div
						key={index}
						className="relative bg-white shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-60 border border-gray-200 h-[300px] w-[250px] cursor-pointer card"
						style={{ backdropFilter: "blur(20px)" }}
					>
						<div
							style={{
								// backgroundImage: `url(${
								// 	value?.gender === "female"
								// 		? "https://creations.mattel.com/cdn/shop/products/lrpbccixzq2vlrpfy8s5_7e0b54fe-6bf0-4284-b183-982f35264b39.jpg?v=1699999928"
								// 		: "https://creations.mattel.com/cdn/shop/products/lzgfsgi65ipq6r2lunre.jpg?v=1684562758"
								// })`,
								backgroundImage: `url(${value?.avatar})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
							}}
							className="w-full h-full sm:rounded-3xl front"
						>
							<div className="w-full h-full sm:rounded-3xl flex justify-start items-end text-black p-4">
								<div className="font-bold text-xl">{value?.name}</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default UserList;
