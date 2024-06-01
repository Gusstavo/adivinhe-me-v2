const BorderedImage = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img {...props} className="rounded-lg mb-6 border-2 border-primary/60" />
  );
};

export default BorderedImage;
