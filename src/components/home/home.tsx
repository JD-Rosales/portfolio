import { HomeImage } from "./home-image";

const Home: React.FC = () => {
  return (
    <section className="flex min-h-[89vh] flex-col md:flex-row">
      <div className="flex-1">
        <div></div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <HomeImage />
      </div>
    </section>
  );
};

export { Home };
