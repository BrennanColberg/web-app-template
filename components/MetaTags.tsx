import Head from "next/head"
import { Link } from "schema"

export default function MetaTags({
  url,
  title,
  description,
  image,
}: {
  url: Link
  title?: string
  description?: string
  image?: Link
}): JSX.Element {
  return (
    <Head>
      <meta property="og:type" key="og:ty" content="website" />

      {url !== undefined && (
        <>
          <meta property="og:url" key="og:u" content={url} />
          <meta property="twitter:url" key="t:u" content={url} />
        </>
      )}

      {title !== undefined && (
        <>
          <title>{title}</title>
          <meta name="title" key="t" content={title} />
          <meta property="og:title" key="og:ti" content={title} />
          <meta property="twitter:title" key="t:t" content={title} />
        </>
      )}

      {description !== undefined && (
        <>
          <meta name="description" key="d" content={description} />
          <meta property="og:description" key="og:d" content={description} />
          <meta
            property="twitter:description"
            key="t:d"
            content={description}
          />
        </>
      )}

      {image !== undefined && (
        <>
          <meta
            property="twitter:card"
            key="t:c"
            content="summary_large_image"
          />
          <meta property="og:image" key="og:i" content={image} />
          <meta property="twitter:image" key="t:i" content={image} />
        </>
      )}
    </Head>
  )
}
