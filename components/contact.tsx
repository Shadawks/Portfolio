import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, X } from "lucide-react";

export function Contact() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 place-items-center">
			<Carousel className="w-full max-w-lg">
				<p className="font-medium text-lg text-center my-2">Recent work 🎨</p>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-video items-center justify-center">
										<span className="text-4xl font-semibold">Soon™</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</ CarouselContent>
				<CarouselPrevious className="hidden sm:flex" />
				<CarouselNext className="hidden sm:flex" />
			</Carousel>
			<div className="w-full max-w-2xl">
				<Card className="border-none">
					<CardTitle className="font-medium text-lg text-center">Keep in touch 👇</CardTitle>
					<CardContent className="p-6">
						<div className="grid grid-cols-2 gap-4 place-items-center">
							<Button variant="outline" className="w-full flex items-center justify-center gap-2">
								<Linkedin/>
								<span>LinkedIn</span>
							</Button>
							<Button variant="outline" className="w-full flex items-center justify-center gap-2">
								<Github />
								<span>GitHub</span>
							</Button>
							<Button variant="outline" className="w-full flex items-center justify-center gap-2">
								<Twitter />
								<span>Twitter</span>
							</Button>
							<Button variant="outline" className="w-full flex items-center justify-center gap-2">
								<Mail />
								<span>Email</span>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
