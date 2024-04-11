import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Manrope({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[#EEEEEE]/10 space-y-6">
      <h4
        className={cn(
          "text-6xl font-semibold text-blue-500 drop-shadow-md",
          font.className
        )}
      >
        To Login
      </h4>
      <LoginButton>
        <Button variant="primary">Sign in</Button>
      </LoginButton>
    </main>
  );
}
