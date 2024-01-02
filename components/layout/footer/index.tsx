import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently Logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Evently, All Rights Reserved xD !</p>
      </div>
    </footer>
  );
};
