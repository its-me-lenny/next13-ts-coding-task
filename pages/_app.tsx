import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
