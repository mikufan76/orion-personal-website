import '@/app/ui/global.css';
import '@radix-ui/themes/styles.css';
import '@radix-ui/themes/utilities.css';
import '@radix-ui/themes/tokens/colors/teal.css';

import { inter } from '@/app/ui/fonts';
import { Theme, ThemePanel } from '@radix-ui/themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme
          appearance="dark"
          hasBackground={true}
          accentColor="indigo"
          radius="large"
          panelBackground="translucent"
          scaling="95%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
