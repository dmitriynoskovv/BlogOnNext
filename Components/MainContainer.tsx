import Head from "next/head";
import Link from "next/link";

const MainContainer = ({children}: any) => {
   return (
      <>
         <Head>
            <title>Simple Blog App</title>
            <meta name="description" content="Blog on next js"/>
         </Head>

         <header>
            <nav>
               <Link href="/">
                  <a>Main</a>
               </Link>
               <Link href="/posts/new">
                  <a>New post</a>
               </Link>
            </nav>
         </header>

         <main>
            {children}
         </main>
      </>
   )
}

export default MainContainer;
