import Head from "next/head";

export default function Home() {
  return (
    <div className="p-4">
      <Head>
        <title>NFTs to mint | Tomint.art</title>
        <meta
          name="description"
          content="The place where you can find active and upcoming NTFs to mint"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <h1 className="text-5xl font-bold text-purple-500">Tomint.art </h1>
        <p className="text-gray-700">
          The place where you can find active and upcoming NTFs to mint. 🖼️
        </p>
      </main>
    </div>
  );
}
