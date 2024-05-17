import '@/app/ui/global.css';
import '@radix-ui/themes/styles.css';
import { inter } from '@/app/ui/fonts';
import { Theme, ThemePanel } from '@radix-ui/themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}><Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">{children}</Theme></body>
    </html>
  );
}
