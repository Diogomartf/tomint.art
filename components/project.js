import Image from "next/image";
import Detail from "./detail";
import { DiscordLogo, TwitterLogo, GlobeSimple } from "phosphor-react";

const Project = ({
  name,
  img,
  price,
  date,
  items,
  communityLink,
  twitter,
  website,
}) => (
  <div className="flex flex-col justify-between p-4 space-y-3 border-2 border-teal-300 rounded-lg bg-teal-100/40 md:flex-row">
    <div className="flex space-x-6">
      {img && (
        <Image
          className="bg-gray-200 rounded-lg"
          src={img}
          alt={name}
          width={84}
          height={84}
        />
      )}
      <div className="flex flex-col justify-between">
        <h3 className="font-bold md:text-xl">{name}</h3>
        <div className="flex space-x-5 md:space-x-8">
          <Detail title="price">
            <div className="flex items-center">
              <img src="eth.svg" alt="eth" className="mr-1" />
              {price}
            </div>
          </Detail>
          <Detail title="items">{items}K</Detail>
          <Detail title="date">{date}</Detail>
        </div>
      </div>
    </div>
    <div className="flex justify-end space-x-4 md:space-x-0 md:justify-between md:flex-col">
      {communityLink && (
        <a
          className="transform hover:scale-110"
          href={communityLink}
          target="_blank"
          rel="noreferrer"
        >
          <DiscordLogo size={20}></DiscordLogo>
        </a>
      )}
      {twitter && (
        <a
          className="transform hover:scale-110"
          href={twitter}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo size={20}></TwitterLogo>
        </a>
      )}
      {website && (
        <a
          className="transform hover:scale-110"
          href={website}
          rel="noreferrer"
          target="_blank"
        >
          <GlobeSimple size={20} />
        </a>
      )}
    </div>
  </div>
);
export default Project;
