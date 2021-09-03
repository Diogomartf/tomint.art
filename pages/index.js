import Head from "next/head";
import Navbar from "../components/navbar";
import Project from "../components/project";
import {
  getActiveProjects,
  getUpcomingProjects,
  getSoldOutProjects,
} from "../airtable/getProjects";
import UpcomingAndSoldProjects from "../components/UpcomingAndSoldProjects";
import ActiveProjects from "../components/ActiveProjects";

export default function Home({
  activeProjects,
  upcomingProjects,
  soldOutProjects,
}) {
  return (
    <div className="relative">
      <Head>
        <title>NFTs to mint | Tomint.art</title>
        <meta
          name="description"
          content="Find active and upcoming NTFs to mint."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <img
        className="absolute top-0 right-0 -z-10"
        src="/bg.svg"
        alt="background"
      />
      <div className="z-10 px-4 mx-auto lg:px-0 md:max-w-5xl">
        <Navbar></Navbar>
        <div className="py-12 md:py-24">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-6xl">
            Find active and upcoming NTFs to mint
          </h1>
        </div>
        <ActiveProjects activeProjects={activeProjects} />
        <UpcomingAndSoldProjects
          upcomingProjects={upcomingProjects}
          soldOutProjects={soldOutProjects}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      activeProjects: await getActiveProjects(),
      upcomingProjects: await getUpcomingProjects(),
      soldOutProjects: await getSoldOutProjects(),
    },
  };
}
