import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrAdd } from "react-icons/gr";
import { DatePicker } from "./DatePicker";
export function NewLog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="w-full sm:w-72 border-dashed border py-3 flex items-center justify-center rounded-md cursor-pointer hover:border-solid">
					<GrAdd />
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Log</DialogTitle>
					<DialogDescription>
						{
							"Remember, time is your most valuable asset - invest it wisely with our Time Log App!"
						}
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="date" className="text-right">
							date{" "}
						</Label>
						<DatePicker />
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="hour" className="text-right">
							hour
						</Label>
						<Input id="hour" type="number" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="note" className="text-right">
							Note
						</Label>
						<Input
							id="note"
							placeholder="note of the log"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
