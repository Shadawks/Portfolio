import { Terminal } from "@/components/terminal";

export default function TerminalPage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex justify-center items-center flex-1">
        <Terminal />
      </main>
    </div>
  );
}
