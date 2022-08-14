import { LoaderImage } from '../../components';
import { SpotifyImage } from "../../types/spotify.model";
import { hasImage, getImage } from "../../utils/images.util";

type ImageProps = {
  alt: string;
  width?: number;
  height?: number;
  isLoading?: boolean;
  className?: string;
  images: SpotifyImage[];
}

const Image = (props: ImageProps) => {
  const { images, alt, width, height, className, isLoading } = props;

  if (isLoading) {
    return <LoaderImage width={width} height={height} />
  }

  return hasImage(images) ?
    <img
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      className={className}
      src={getImage(images)}
    /> : null;
}

export default Image;
