import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import Image from "next/image";

type ConvertBodyProps = {
  contentHTML: string;
};

const ConvertBody: React.FC<ConvertBodyProps> = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: (node: Element) => {
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            src={src}
            alt={alt}
            width={parseInt(width)}
            height={parseInt(height)}
            sizes="(min-width: 1152px) 1152px, 100vw"
            style={{ width: "100%", height: "auto" }}
          />
        );
      }
    },
  } as HTMLReactParserOptions);
  return <>{contentReact}</>;
};

export default ConvertBody;
