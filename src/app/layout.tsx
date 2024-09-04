import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalStyles from '@/global-style';
import Header from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <GlobalStyles />
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
