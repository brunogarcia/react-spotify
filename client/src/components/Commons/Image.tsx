interface ImageProps {
  src: string;
  alt: string;
  isLoading?: boolean;
  className?: string;
}

const Image = ({ src, alt, isLoading, className, ...props }: ImageProps) => {
  return (
      <img src={src} alt={alt} className={className} {...props} />
  );
}

export default Image;
