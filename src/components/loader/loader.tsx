import styles from "./styles.module.css";

const Loader: React.FC = () => {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
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
