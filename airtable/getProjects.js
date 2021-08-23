import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "app6L1dt4xoNavG6V"
);

export default function getProjects() {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base("projects")
      .select({
        fields: [
          "name",
          "link",
          "total_mint_size",
          "mint_price",
          "mint_date",
          "mint_date",
          "mint_date",
        ],
        filterByFormula:
          "AND(NOT({approval} = 1), IS_BEFORE({mint_date}, TODAY()), {current_mint_size} > 0)",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const id = record.getId();
            const name = record.get("name");
            const link = record.get("link");
            const total_mint_size = record.get("total_mint_size");
            const mint_price = record.get("mint_price");
            const mint_date = record.get("mint_date");
            const discord_link = record.get("mint_date");
            const twitter_link = record.get("mint_date");

            totalRecords.push({
              id,
              name,
              link,
              total_mint_size,
              mint_price,
              mint_date,
              discord_link,
              twitter_link,
            });
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(totalRecords);
        }
      );
  });
}
