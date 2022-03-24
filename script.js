import proj4 from "proj4";
import { locations } from "./locations.js";
import { writeFileSync } from "fs";

locations.map((location) => {
  let utmNorthing = location.utm_northing;
  let utmEasting = location.utm_easting;
  let utmZone = location.utm_zone;

  location.coordinates = proj4(
    `+proj=utm +zone=${utmZone}`,
    `+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs`,
    [utmEasting, utmNorthing]
  );

  location.lat = location.coordinates[1];
  location.lng = location.coordinates[0];
});

writeFileSync(
  "output.json",
  JSON.stringify(locations, null, 2),
  function (err) {
    if (err) return console.log(err);
    console.log("Output failed");
  }
);
