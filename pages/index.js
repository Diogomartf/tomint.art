import Head from "next/head";
import Navbar from "../components/navbar";
import {
  getActiveProjects,
  getUpcomingProjects,
  getSoldOutProjects,
} from "../airtable/getProjects";
import UpcomingAndSoldProjects from "../components/UpcomingAndSoldProjects";
import ActiveProjects from "../components/ActiveProjects";
import ListYourNFTButton from "../components/ListYourNFTButton";

export default function Home({
  activeProjects,
  upcomingProjects,
  soldOutProjects,
}) {
  return (
    <div className="relative">
      <Head>
        <title>NFTs at mint stage | Tomint.art</title>
        <meta
          name="description"
          content="Never miss a mint. Find active and upcoming project at mint stage."
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
        {/* Primary Meta Tags */}
        <meta name="title" content="NFTs at mint stage" />
        <meta
          name="description"
          content="Never miss a mint. Find active and upcoming project at mint stage."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tomint.art/" />
        <meta property="og:title" content="NFTs at mint stage" />
        <meta
          property="og:description"
          content="Never miss a mint. Find active and upcoming project at mint stage."
        />
        <meta property="og:image" content="https://www.tomint.art/meta.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tomint.art/" />
        <meta property="twitter:title" content="NFTs at mint stage" />
        <meta
          property="twitter:description"
          content="Never miss a mint. Find active and upcoming project at mint stage."
        />
        <meta
          property="twitter:image"
          content="https://www.tomint.art/meta.png"
        ></meta>
      </Head>
      <img
        className="absolute top-0 right-0 -z-10"
        src="/bg.svg"
        alt="background"
      />
      <div className="z-10 px-4 mx-auto lg:px-0 md:max-w-5xl">
        <Navbar></Navbar>
        <div className="max-w-3xl py-12 space-y-1 text-xl md:space-y-3 md:py-24">
          <h1 className="text-3xl font-bold leading-tight md:text-6xl">
            Never miss a mint.
          </h1>
          <h2 className="text-sm text-gray-600 md:text-xl">
            Active and Upcoming NFTs at mint stage.
          </h2>
        </div>
        <ActiveProjects activeProjects={activeProjects} />
        <UpcomingAndSoldProjects
          upcomingProjects={upcomingProjects}
          soldOutProjects={soldOutProjects}
        />
        <div className="mt-12 md:hidden">
          <ListYourNFTButton />
        </div>
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
    revalidate: 3600,
  };
}
