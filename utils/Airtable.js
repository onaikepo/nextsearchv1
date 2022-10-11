export default function AirtableFetch() {
    const Airtable = require("airtable");

    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'process.env.AIRTABLE_API_KEY'
    });

    var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

    // const base = Airtable.base();

    base(process.env.AIRTABLE_TABLE_NAME).select({
        //Only want to return data from ID
        fields: ["ID"],
        // Selecting the first 3 records in Grid view:
        maxRecords: 2,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
            console.log('Retrieved', record.get('ID'), record.get("Website Name"), record.get("Website Description"));
        });
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });

    /*// Authenticate
    Airtable.configure({
        apiKey: process.env.AIRTABLE_API_KEY,
    });
    
    // Initialize a base
    const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
    
    // Reference a table
    const table = base(process.env.AIRTABLE_TABLE_NAME);*/
}
