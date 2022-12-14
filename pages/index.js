import '../utils/Airtable'

const submitSearch = async (event) => {
  event.preventDefault();
  alert(`Did you search for ${event.target.search.value}?`);

  /*const data = {
    query: event.target.search.value,
  }*/



};



export default function Home() {
  return (
    <div className="head">
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />


      <main className="homepage">
        <div className="heading">
          <h1 className="title-text">
            Welcome to <p className="p-blue">NextSearch</p>
            <br></br>A Next Generation Search Experience.
          </h1>
        </div>
        <br></br>
        <div className="container">
          <form onSubmit={submitSearch} action="/results">
            <label htmlFor="Search Query">Enter Your Search Query Here:</label>
            <input type="text" name="search" id="search" />
            <button type="submit">Search</button>
          </form>

          <br></br>
          <div className="container">
            <div className="records" id="records">
            </div>
          </div>

        </div>

      </main >
    </div>


  )
}
