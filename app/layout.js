import '../globals.css';

import { IsMobileProvider } from '../providers/IsMobile.provider';
import { BottomNavProvider } from '../providers/ShouldDisplayBottomNav.provider';
import { ThemeProvider } from '../providers/ThemingMode.provider';

export const metadata = {
  title: "amrahussein | Let's connect!",
  description: "Passionate about web development. Let's get connected!",
  authors: [{ name: 'Amr Abdelkamel Hussein' }],
  manifest: '/site.webmanifest',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    maskIcon: { url: '/safari-pinned-tab.svg', color: '#5bbad5' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='description'
          property='og:description'
          content="Passionate about web development. Here, I share a bit about me. Let's get connected!"
          key='description'
        />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

        {/* Google Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'
          rel='stylesheet'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <IsMobileProvider>
        <ThemeProvider>
          <BottomNavProvider>
            <body>{children}</body>
          </BottomNavProvider>
        </ThemeProvider>
      </IsMobileProvider>
    </html>
  );
}
