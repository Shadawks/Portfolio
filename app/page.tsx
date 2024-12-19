import { ProfileHeader } from "@/components/profile-header";
import { Experiences } from "@/components/experiences";
import { Contact } from "@/components/contact";

export default function Home() {
	return (
		<div className="flex min-h-screen">
			<main className="flex-1 overflow-auto">
				<ProfileHeader />
				<Experiences />
				<Contact />
			</main>
		</div>
	);
}
