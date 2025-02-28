interface TopSubHeadingTextProps {
  text: string;
}

export default function TopSubHeadingText({ text }: TopSubHeadingTextProps) {
  return (
    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
      {text}
    </h2>
  );
}
