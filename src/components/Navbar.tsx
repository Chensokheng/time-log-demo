import React from "react";
import { Button } from "./ui/button";
import { IoTimer } from "react-icons/io5";
export default function Navbar() {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<IoTimer className="text-xl" />
				<h1>Time</h1>
			</div>
			<Button>Logout</Button>
		</div>
	);
}
