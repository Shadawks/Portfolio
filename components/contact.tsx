import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Navigation } from "lucide-react";
import Link from "next/link";

export function Contact() {
	const recentWork = [
		{
			title: "Portfolio",
			description: "My personal website, built with Next.js and TailwindCSS.",
			link: "/",
		},
		{
			title: "Strapwn",
			description: "The first all in one Strapi Exploitation Tool",
			link: "https://github.com/Shadawks/Strapwn/",
		},
		{
			title: "Soon™",
			description: "I'm working on something cool, stay tuned!",
			link: "/",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 place-items-center">
			<Carousel className="w-full max-w-lg">
				<p className="font-medium text-lg text-center my-2">Recent work 🎨</p>
				<CarouselContent>
					{recentWork.map((work, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-video items-center justify-center">
										<div className="flex flex-col items-center justify-center gap-2">
											<h2 className="text-lg font-semibold">{work.title}</h2>
											<p className="text-gray-400">{work.description}</p>
											<Button variant="outline" asChild>
												<Link href={work.link}>
													<Navigation />
												</Link>
											</Button>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden sm:flex" />
				<CarouselNext className="hidden sm:flex" />
			</Carousel>
			<div className="w-full max-w-2xl">
				<Card className="border-none">
					<CardTitle className="font-medium text-lg text-center">
						Keep in touch 👇
					</CardTitle>
					<CardContent className="p-6">
						<div className="grid grid-cols-2 gap-4 place-items-center">
							<Button
								variant="outline"
								className="w-full flex items-center justify-center gap-2"
								asChild
							>
								<Link href={"https://www.linkedin.com/in/nathanlbl/"}>
									<Linkedin />
									LinkedIn
								</Link>
							</Button>
							<Button
								variant="outline"
								className="w-full flex items-center justify-center gap-2"
								asChild
							>
								<Link href={"https://github.com/Shadawks"}>
									<Github />
									GitHub
								</Link>
							</Button>
							<Button
								variant="outline"
								className="w-full flex items-center justify-center gap-2"
								asChild
							>
								<Link href={"https://x.com/kyndaxv"}>
									<Twitter />
									Twitter
								</Link>
							</Button>
							<Button
								variant="outline"
								className="w-full flex items-center justify-center gap-2"
								asChild
							>
								<Link href={"mailto:nathan@leibel.dev"}>
									<Mail />
									eMail
								</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
