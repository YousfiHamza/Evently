import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { DesktopNav } from '@/components/modules/Navigation/desktop';
import { MobileNav } from '@/components/modules/Navigation/mobile';

export const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently Logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <DesktopNav />
        </SignedIn>

        <div className="flex w-32 items-center justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};
