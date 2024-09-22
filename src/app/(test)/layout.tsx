import Image from 'next/image';

interface ITestLayoutProps {
  children: React.ReactNode;
}
export default function TestLayout(props: ITestLayoutProps) {
  const { children } = props;
  return (
    <div className="min-w-screen flex min-h-screen flex-col p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-1 flex-col">{children}</div>
      </main>
    </div>
  );
}
