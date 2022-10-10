import { table, minifyItems } from "airtable";

export default async (_req, res) => {
    try {
        const records = await table.select({}).firstPage();
        const minfiedItems = minifyItems(records);
        res.status(200).json(minfiedItems);
    } catch (error) {
        console.error(err);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};

function Items({ minfiedItems }) {
    return (
        { minfiedItems }
        < br >
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

export default Blog
