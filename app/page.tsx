'use client';
import { Container, Text, Button, Spinner, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Avatar from '@radix-ui/react-avatar';

export default function Page() {
  const thoughts = [
    'Greenies <3',
    'Guard Dog Mode: Activated',
    'Who is at the door?!??!?!?!?',
    'AWOO AWOOOOO',
    'Give me belly rubs rn or i will be so sad',
    'I am afraid of men',
  ];
  const [thought, setThought] = useState('Hmmmm....');
  const [loading, setLoading] = useState(false);

  async function generateThoughts() {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const index = Math.floor(Math.random() * thoughts.length);
      setThought(thoughts[index]);
      setLoading(false);
    }, 2000);
  }

  return (
    <main>
      <Flex
        height={'100vh'}
        width={'100vw'}
        justify={'center'}
        align={'center'}
      >
        <Tooltip.Provider delayDuration={400}>
          <Tooltip.Root onOpenChange={generateThoughts}>
            <Tooltip.Trigger>
              {/*AVARTAR*/}
              <Avatar.Root>
                <Avatar.Image src="/milasmall.png" />
              </Avatar.Root>
              {/* AVATAR END */}
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" side="top">
                {thought}
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </Flex>
    </main>
  );
}
