import { ContactButtons } from "./contact-buttons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function UserInformations() {
  return (
    <div className="flex items-start gap-4 px-1 md:px-10">

      <Avatar className="rounded-full border-4 border-[#09090b] -mt-10 w-32 h-32">
        <AvatarImage src="/pdp.jpg" alt="I'll take a picture of myself soon I promise." />
        <AvatarFallback>NL</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              Nathan Leibel
              <span className="text-blue-500 hidden md:flex">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-gray-400">I'm a fullstack developer based in Strasbourg 🥨</p>
          </div>
          <ContactButtons />
        </div>
      </div>
    </div>
  )
}