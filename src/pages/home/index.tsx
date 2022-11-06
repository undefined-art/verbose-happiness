import Container from "@components/container";
import Features from "@components/features";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <Container isFullSize outerClassName={styles.outer}>
      <Features />
    </Container>
  );
};

export default Home;
