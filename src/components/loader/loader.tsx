import styles from "./styles.module.css";

const Loader: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className={styles["load"]}>
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
};

export { Loader };
