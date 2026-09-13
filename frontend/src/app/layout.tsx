import './globals.css';
import { Navigation } from '@/components/navigation/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                <main className="main-content">
                    {children}
                </main>
            </body>
        </html>
    );
}
