interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-3xl font-bold text-primary mb-6">{children}</h1>;
};

export default Title;
