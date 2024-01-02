import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <h1 className="text-4xl">Evently</h1>
      <Button variant="destructive">Click me</Button>
    </main>
  );
}
