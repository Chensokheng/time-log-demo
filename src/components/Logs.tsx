import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function Logs() {
	return (
		<div>
			<Table>
				<TableCaption>List of logs</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-1/3">Date</TableHead>
						<TableHead className="w-1/3">hour</TableHead>
						<TableHead className="w-1/3">Note</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">
							{new Date().toDateString()}
						</TableCell>
						<TableCell>10</TableCell>
						<TableCell>This is a place holder</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
