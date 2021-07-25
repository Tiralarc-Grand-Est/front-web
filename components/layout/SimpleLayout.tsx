import Layout from "./Layout";

interface Props {
  title: string;
  description: string;
  mainClassName?: string;
  children: JSX.Element | JSX.Element[];
}

export default function SimpleLayout({
  title,
  description,
  mainClassName,
  children,
}: Props) {
  return (
    <Layout
      title={title}
      description={description}
      mainClassName={`container p-8 mx-auto lg:max-w-3xl ${
        mainClassName ?? ""
      }`}
    >
      {children}
    </Layout>
  );
}
