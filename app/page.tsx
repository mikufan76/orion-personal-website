'use client';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import { Flex, Text, Button, Spinner } from '@radix-ui/themes';
import { useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(!loading);
  }

  return (
    <main className="flex min-h-screen flex-col p-6">
      <Flex direction="column" gap="2" justify={'center'} align={'center'}>
        <Spinner loading={loading} size="3" />
        <Image
          src="/milasmall.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Mila wearing an outfit. Her ears are covered. Absolute unit."
        />
        <Image
          className="block md:hidden"
          src="/milasmile.png"
          width={560}
          height={620}
          alt="Mila smiling"
        />
        <Button onClick={handleClick}>Let's go</Button>
      </Flex>
    </main>
  );
}
