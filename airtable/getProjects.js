import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "app6L1dt4xoNavG6V"
);

const fields = [
  "name",
  "link",
  "total_mint_size",
  "mint_price",
  "mint_date",
  "mint_date",
  "mint_date",
  "discord_link",
  "twitter_link",
  "images",
];

const buildRecords = (records) => {
  return records.map((record) => {
    const id = record.getId();
    const name = record.get("name");
    const link = record.get("link");
    const total_mint_size = record.get("total_mint_size");
    const mint_price = record.get("mint_price");
    const mint_date = record.get("mint_date") || null;
    const discord_link = record.get("discord_link") || null;
    const twitter_link = record.get("twitter_link") || null;
    const image = record.get("images")?.map((image) => image.url)[0];

    return {
      id,
      name,
      link,
      total_mint_size,
      mint_price,
      mint_date,
      discord_link,
      twitter_link,
      image: image || null,
    };
  });
};

export const getActiveProjects = () => {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base("projects")
      .select({
        fields,
        filterByFormula:
          "AND(NOT({approval} = 0), OR(IS_BEFORE({mint_date}, TODAY()), IS_SAME({mint_date}, TODAY())), {current_mint_size} > 0)",
        sort: [{ field: "mint_date", direction: "desc" }],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          totalRecords.push.apply(totalRecords, buildRecords(records));

          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(totalRecords);
        }
      );
  });
};

export const getUpcomingProjects = () => {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base("projects")
      .select({
        fields,
        filterByFormula:
          "AND(NOT({approval} = 0), OR(IS_AFTER({mint_date}, TODAY()), NOT({mint_date})))",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          totalRecords.push.apply(totalRecords, buildRecords(records));

          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(totalRecords);
        }
      );
  });
};

export const getSoldOutProjects = () => {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base("projects")
      .select({
        fields,
        filterByFormula:
          "AND(NOT({approval} = 0), OR(IS_BEFORE({mint_date}, TODAY()), IS_SAME({mint_date}, TODAY())), {current_mint_size} = 0)",
        sort: [{ field: "mint_date", direction: "desc" }],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          totalRecords.push.apply(totalRecords, buildRecords(records));

          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(totalRecords);
        }
      );
  });
};
