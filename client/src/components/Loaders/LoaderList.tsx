import ContentLoader from 'react-content-loader'

const ArtistsLoader = () => (
  <ContentLoader
    speed={2}
    width={"1180"}
    height={200}
    viewBox="0 0 1180 200"
    backgroundColor="#333333"
    foregroundColor="#eeeeee"
  >
    <circle cx="80" cy="80" r="80" />
    <rect x="40" y="170" rx="5" ry="5" width="80" height="10" />

    <circle cx="280" cy="80" r="80" />
    <rect x="240" y="170" rx="5" ry="5" width="80" height="10" />

    <circle cx="480" cy="80" r="80" />
    <rect x="440" y="170" rx="5" ry="5" width="80" height="10" />

    <circle cx="680" cy="80" r="80" />
    <rect x="640" y="170" rx="5" ry="5" width="80" height="10" />

    <circle cx="880" cy="80" r="80" />
    <rect x="840" y="170" rx="5" ry="5" width="80" height="10" />

    <circle cx="1080" cy="80" r="80" />
    <rect x="1040" y="170" rx="5" ry="5" width="80" height="10" />
  </ContentLoader>
)

export default ArtistsLoader
