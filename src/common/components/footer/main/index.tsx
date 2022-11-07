import Container from "@components/container";
import { ReactComponent as LanguageIcon } from "@assets/icons/language.svg";
import { ReactComponent as GlobeIcon } from "@assets/icons/globe.svg";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <Container outerClassName={styles.outer} innerClassName={styles.inner}>
      <section className={styles.links}>
        <LanguageIcon />
        <a href="https://github.com/undefined-art">
          <GlobeIcon />
        </a>
      </section>
      <section className={styles.content}>
        <div>
          <span>Verbose happiness</span> is productivity app for time management
          and todos list creation.
        </div>
        <div>
          <span>Useful links:</span>
          <dl>
            <dt>
              <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
                Pomodoro technique
              </a>
            </dt>
            <dt>
              <a href="https://www.proginosko.com/leechblock/">LeechBlock NG</a>
            </dt>
          </dl>
        </div>
      </section>
    </Container>
  );
};

export default Main;
