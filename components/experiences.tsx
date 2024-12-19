import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Experiences() {
	const experiences = [
		{
			company: "Eli Lilly Co",
			logo: "/lilly.png",
			title: "Fullstack Developer",
			date: "June 2023 - July 2024",
		},
		{
			company: "Capgemini Enginering",
			logo: "/capgemini.jpg",
			title: "Fullstack Developer",
			date: "June 2023 - July 2024",
		},
		{
			company: "Eiffage - Clemessy",
			logo: "/eiffage.jpg",
			title: "Cybersecurity Engineer",
			date: "January 2021 - June 2023",
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 place-items-center">
			{experiences.map((exp, index) => (
				<Card
					key={index}
					className="hover:shadow-lg transition-shadow w-full max-w-md"
				>
					<CardHeader>
						<div className="flex items-start gap-6">
							<Image
								src={exp.logo}
								alt={exp.company}
								width={80}
								height={80}
								className="rounded-lg"
								priority
							/>
							<div className="flex flex-col">
								<p className="font-medium text-lg">{exp.title}</p>
								<CardTitle className="text-sm text-muted-foreground">
									{exp.company}
								</CardTitle>
							</div>
						</div>
					</CardHeader>
					<CardContent className="text-sm text-muted-foreground">
						<p>{exp.date}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
