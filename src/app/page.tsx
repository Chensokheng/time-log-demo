import Calendar from "@/components/Calendar";
import Logs from "@/components/Logs";
import Navbar from "@/components/Navbar";
import { NewLog } from "@/components/NewLog";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import InitLog from "@/components/state/InitLog";
import { IResultLog } from "@/store";

export const dynamic = "force-dynamic";

export default async function page() {
	const supabase = createServerComponentClient({ cookies });

	const { data } = await supabase.auth.getSession();

	if (!data.session) {
		return redirect("/auth");
	}

	const { data: logs } = await supabase
		.from("logs")
		.select("*")
		.order("date", { ascending: true });

	return (
		<div className="p-5 space-y-10">
			<InitLog logs={logs as IResultLog[]} />
			<Navbar />
			<NewLog />
			<Calendar />
			<Logs />
		</div>
	);
}
