import ContentLoader from 'react-content-loader'

interface LoaderImageProps {
  width?: number;
  heigth?: number;
}

const LoaderImage = ({ width = 80, heigth = 80, ...props }: LoaderImageProps) => (
  <ContentLoader
    speed={2}
    width={width}
    height={heigth}
    viewBox={`0 0 ${width} ${heigth}`}
    backgroundColor="#333333"
    foregroundColor="#eeeeee"
    {...props}
  >
    <circle cx="75" cy="75" r="70" />
  </ContentLoader>
)

export default LoaderImage
