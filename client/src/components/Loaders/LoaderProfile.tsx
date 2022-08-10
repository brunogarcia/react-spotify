import ContentLoader from 'react-content-loader'

interface ReactPropTypes {}

const LoaderProfile = (props: ReactPropTypes) => (
  <ContentLoader
    speed={2}
    width={300}
    height={200}
    viewBox="0 0 300 200"
    backgroundColor="#333333"
    foregroundColor="#eeeeee"
    {...props}
  >
    <rect x="10" y="60" rx="3" ry="3" width="140" height="50" />
    <rect x="160" y="60" rx="3" ry="3" width="140" height="50" />
    <rect x="10" y="120" rx="3" ry="3" width="140" height="50" />
    <rect x="160" y="120" rx="3" ry="3" width="140" height="50" />
  </ContentLoader>
)

export default LoaderProfile
