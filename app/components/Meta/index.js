/* Head element for each page. */
import Head from 'next/head'

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    {/* <link rel="shortcut icon" href="/static/favicon.png" /> */}
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
      rel="stylesheet"
    />
    <link href="/styles/font-awesome/css/all.css" rel="stylesheet" />
    {/* <link href="/styles/modal.css" rel="stylesheet" /> */}
    <title>Bot Twitter</title>
  </Head>
)

export default Meta
