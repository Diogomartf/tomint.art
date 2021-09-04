import Project from "../components/project";

export default function ActiveProjects({ activeProjects }) {
  return (
    <div className="my-4 space-y-3">
      <p className="text-sm">Active</p>
      {activeProjects.length > 0 && (
        <div className="space-y-3">
          {activeProjects.map(
            ({
              id,
              name,
              total_mint_size,
              mint_price,
              mint_date,
              link,
              discord_link,
              twitter_link,
              image,
            }) => (
              <Project
                key={id}
                name={name}
                img={image}
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
      )}
    </div>
  );
}
