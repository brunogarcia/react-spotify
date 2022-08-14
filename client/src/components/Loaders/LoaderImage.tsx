import ContentLoader from 'react-content-loader'

type LoaderImageProps = {
  width?: number;
  height?: number;
}

const LoaderImage = ({ width = 80, height = 80, ...props }: LoaderImageProps) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#333333"
    foregroundColor="#eeeeee"
    {...props}
  >
    <circle cx="75" cy="75" r="70" />
  </ContentLoader>
)

export default LoaderImage
