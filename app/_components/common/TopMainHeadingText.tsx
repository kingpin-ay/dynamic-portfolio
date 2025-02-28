interface TopMainHeadingTextProps {
  text: string;
}

export default function TopMainHeadingText({ text }: TopMainHeadingTextProps) {
  return (
    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
      {text}
    </p>
  );
}
