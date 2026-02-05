import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <h2 className="logo-text">TextToURL</h2>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/create">Create</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/register">Register</Link></li>
                        <img src="/Cloudstaff-squareLogo.png" className="logo-img"/>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    )
}