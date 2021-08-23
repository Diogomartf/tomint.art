import Head from "next/head";
import Navbar from "../components/navbar";
import Project from "../components/project";
import getProjects from "../airtable/getProjects";

export default function Home({ projects }) {
  console.log(projects);
  return (
    <div className="relative">
      <Head>
        <title>NFTs to mint | Tomint.art</title>
        <meta
          name="description"
          content="Find active and upcoming NTFs to mint."
        />
        <link rel="icon" href="/favicon.ico" />
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
        <div className="space-y-1">
          <p className="text-sm">Active</p>
          <div className="space-y-3">
            <Project
              name="Crypto punks"
              img="/images/punk.png"
              items="10.0"
              price="0.082"
              date="21/08/2021"
              website="https://www.larvalabs.com/cryptopunks"
              communityLink="https://discord.com/invite/tQp4pSE"
              twitter="https://twitter.com/larvalabs"
            />
            <Project
              name="Cool Cats"
              img="/images/coolcat.png"
              items="9.9"
              price="0.076"
              date="22/08/2021"
              website="https://www.coolcatsnft.com/"
              communityLink="https://discord.com/invite/X6A4AXrKaR"
              twitter="https://twitter.com/coolcatsnft"
            />
            {projects.map(
              ({
                id,
                name,
                total_mint_size,
                mint_price,
                mint_date,
                link,
                discord_link,
                twitter_link,
              }) => (
                <Project
                  key={id}
                  name={name}
                  img="/images/coolcat.png"
                  items={total_mint_size}
                  price={mint_price}
                  date={mint_date}
                  website={link}
                  communityLink={discord_link}
                  twitter={twitter_link}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}
