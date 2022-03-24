# UTM to decimal converter

## Backstory

I receved a dataset with UTM coordinates that i needed to imput into a map application that only takes decimal coordinates.
I did not end up needing it because the dataset had decimal coordinates after all.
I had allmost finnished it, so I completed it. Original data set was almost 400 locations.

## Functionality
It reads a `.js`-file and uses [proj4](http://proj4js.org/) to convert the coordinates and writes the data to a new `.js`-file.

## Instructions

1. Clone the repository
1. Run `npm install`
1. Modify the code to fit your dataset
1. Run `node script.js `
