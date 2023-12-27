import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserContextModule from "@/context/user";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UserContextModule.UserContextProvider>
            <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </UserContextModule.UserContextProvider>
    );
}
