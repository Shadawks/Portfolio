"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type CommandOutput = {
	command: string;
	output: string;
	isSuccess?: boolean;
};

interface Command {
	description: string;
	execute: (args: string[]) => string;
}

const SIMULATED_FILES: Record<string, string> = {
	"infos.txt": `Name: Nathan
Role: FullStack Developer & Cybersecurity Enthusiast
Contact: nathan@leibel.dev
Github: @Shadawks`,
};

export function Terminal() {
	const [input, setInput] = useState("");
	const [root, setRoot] = useState(false);
	const [history, setHistory] = useState<CommandOutput[]>([]);
	const scrollAreaRef = useRef<HTMLDivElement>(null);
	const COMMANDS: Record<string, Command> = {
		help: {
			description: "List available commands",
			execute: () => {
				return Object.entries(COMMANDS)
					.map(([name, cmd]) => `${name}: ${cmd.description}`)
					.join("\n");
			},
		},
		echo: {
			description: "Prints the given arguments",
			execute: (args) => args.join(" "),
		},
		clear: {
			description: "Clears the terminal",
			execute: () => "",
		},
		date: {
			description: "Prints the current date",
			execute: () => new Date().toString(),
		},
		ls: {
			description: "List files in the current directory",
			execute: () => Object.keys(SIMULATED_FILES).join("\n"),
		},
		cat: {
			description: "Prints the content of a file",
			execute: (args) => {
				const filename = args[0];
				return SIMULATED_FILES[filename] || `Erreur: ${filename} n'existe pas`;
			},
		},
		pwd: {
			description: "Prints the current directory",
			execute: () => "/home/kynda",
		},
		su: {
			description: "Switch user",
			execute: (args) => {
				if (args[0] === "root") {
					setRoot(true);
					return "Password: **********\nYou are now root (in your dreams)";
				}
				return "Invalid user";
			},
		},
		id: {
			description: "Prints the current permissions",
			execute: () => {
				return root
					? "uid=0(root) gid=0(root) groups=0(root)"
					: "uid=1000(kynda) gid=1000(kynda) groups=1000(kynda),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),116(lpadmin),126(sambashare)";
			},
		},
	};

	useEffect(() => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
		}
	}, [history]);

	const handleCommand = (commandLine: string) => {
		const [cmd, ...args] = commandLine.trim().split(" ");
		const lowercaseCmd = cmd.toLowerCase();

		if (lowercaseCmd === "clear") {
			setHistory([]);
			return;
		}

		const command = COMMANDS[lowercaseCmd];
		const output = command
			? command.execute(args)
			: `Command not found: ${cmd}`;

		setHistory([
			...history,
			{
				command: commandLine,
				output,
				isSuccess: !!command,
			},
		]);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			handleCommand(input);
			setInput("");
		}
	};

	return (
		<Card className="w-full max-w-3xl mx-auto bg-accent shadow-2xl border-0 rounded-lg overflow-hidden font-mono">
			<div className="flex items-center px-4 py-3">
				<div className="flex space-x-2">
					<button className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-75 transition-opacity" />
					<button className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-75 transition-opacity" />
					<button className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-75 transition-opacity" />
				</div>
			</div>
			<CardContent className="p-4">
				<ScrollArea
					className="h-[400px] w-full font-mono text-sm"
					ref={scrollAreaRef}
				>
					{history.map((item, index) => (
						<div key={index} className="mb-2">
							<div className="flex items-center">
								<span className="text-gray-300">{item.command}</span>
							</div>
							{item.output && (
								<div
									className={`whitespace-pre-wrap ${
										item.isSuccess ? "text-green-400" : "text-gray-400"
									}`}
								>
									{item.output}
								</div>
							)}
						</div>
					))}
					<div className="flex items-center">
						<span className="text-gray-300">{root ? "#" : "$"}</span>
						<div className="w-2 h-5 ml-1 bg-gray-300 animate-pulse opacity-50" />
					</div>
				</ScrollArea>
				<form onSubmit={handleSubmit} className="mt-4 flex items-center">
					<span className="text-gray-300 mr-2">{root ? "#" : "$"}</span>
					<Input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="flex-grow bg-transparent text-gray-300 border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder-gray-600"
						placeholder="Type a command... (ex: help)"
					/>
				</form>
			</CardContent>
		</Card>
	);
}
