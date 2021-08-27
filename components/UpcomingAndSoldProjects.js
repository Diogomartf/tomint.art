import { useState } from "react";
import Project from "../components/project";

export default function UpcomingAndSoldProjects({
  upcomingProjects,
  soldOutProjects,
}) {
  const [filter, setFilter] = useState("upcoming");

  return (
    <div className="space-y-1 my-4">
      <div className="flex divide-x divide-black">
        <p
          className={`text-sm pr-5 cursor-pointer hover:text-gray-600 ${
            filter === "sold" && "text-gray-400"
          }`}
          onClick={() => setFilter("upcoming")}
        >
          Upcoming
        </p>
        <p
          className={`text-sm pl-5 cursor-pointer hover:text-gray-600 ${
            filter === "upcoming" && "text-gray-400"
          }`}
          onClick={() => setFilter("sold")}
        >
          Sold out
        </p>
      </div>
      {filter === "upcoming" && upcomingProjects.length == 0 && (
        <div className="space-y-3">
          {upcomingProjects.map(
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
      {filter === "sold" && soldOutProjects.length == 0 && (
        <div className="space-y-3">
          {soldOutProjects.map(
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
