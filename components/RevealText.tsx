type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function RevealText({
  text,
  as: Tag = "h2",
  className = "",
}: RevealTextProps) {
  return <Tag className={className}>{text}</Tag>;
}
