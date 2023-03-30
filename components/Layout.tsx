import React, { ReactNode } from "react";
import Head from "next/head";

interface Props {
  children?: ReactNode;
  title?: string;
  content?: string;
}

const Layout = ({ children, title, content }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={content} />
      <link rel="icon" href="/next.svg" />
    </Head>
    <main>{children}</main>
  </>
);

export default Layout;
