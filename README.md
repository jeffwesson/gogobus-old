# Gogo Bus

## Mobile-first AngularJS SPA serving local transit information for Sonoma County, California.

- MEAN stack
- [node-gtfs](https://github.com/brendannee/node-gtfs)
- Inspired by [Matias Niemelä](https://github.com/matsko)

### Instructions for using your own transit agency data

- `git clone https://github.com/jeffwesson/gogobus.git`
- `cd gogobus`
- `npm install`
- `bower install`

#### Install and initialize an instance of MongoDB using the `mongod` command

For help installing, refer to [Install MongoDB with Homebrew](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-with-homebrew)

#### Configure General Transit Feed Specification (GTFS) data

  - add the transit agencies for which you would like data included to `node_modules/gtfs/config.js`
  - execute the following command from `node_modules/gtfs`
    - `npm run download`
  - for assistance, refer to [Configuration for loading data](https://github.com/brendannee/node-gtfs#configuration-for-loading-data)
  - you can verify the data was correctly added to your MongoDB by:
    - enter the database by running `mongo`
    - `show dbs` lists databases
    - `use <database name here>`
    - `db.stops.find()` lists stops for the configured agencies