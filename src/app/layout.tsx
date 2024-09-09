import GlobalStyles from '@/global-style';
import Header from '@/components/layout/header';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <GlobalStyles />
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
