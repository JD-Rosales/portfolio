const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto flex flex-col px-4 text-center text-white md:px-0">
      <div className="mx-auto h-[1px] w-2/3 bg-gray-500" />

      <div className="py-8 md:py-12">
        <p>
          Looking for A software Developer? Send me an{" "}
          <a className="underline" href="mailto:rosales.jake1999@gmail.com">
            Email
          </a>{" "}
          or you can visit my{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/jake-rosales-0a33a621a"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          Built with React and Tailwind ♡ Source Code available my{" "}
          <a
            className="underline"
            href="https://github.com/JD-Rosales/"
            target="_blank"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
