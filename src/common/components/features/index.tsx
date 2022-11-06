import { ReactComponent as CartPieIcon } from "@assets/icons/chart-pie.svg";
import { ReactComponent as ThumbUpIcon } from "@assets/icons/hand-thumb-up.svg";
import { ReactComponent as ShieldIcon } from "@assets/icons/shield.svg";
import { ReactComponent as SmilePersonIcon } from "@assets/icons/smile-person.svg";
import styles from "./styles.module.scss";

const features = [
  {
    name: "Easy to use",
    description: "Write a tasks with estimations and you ready to go.",
    icon: SmilePersonIcon,
  },
  {
    name: "We don't see any of your working data",
    description: "Your working data will saved locally.",
    icon: ShieldIcon,
  },
  {
    name: "View your stats",
    isUnavailable: true,
    description:
      "See you progress stats, decide how you can improve it even more.",
    icon: CartPieIcon,
  },
  {
    name: "Ads free",
    description: "No any ads to disturb you.",
    icon: ThumbUpIcon,
  },
];

const Features = () => (
  <section>
    <header>
      <h2 className={styles.title}>Verbose Happiness</h2>
      <p className={styles.subTitle}>A better way to control your time</p>
    </header>

    <dl className={styles.features}>
      {features.map((feature) => (
        <div key={feature.name} className={styles.feature}>
          {feature.isUnavailable && (
            <div className={styles.soon}>Coming soon</div>
          )}
          <dt>
            <div className={styles.icon}>
              <feature.icon aria-hidden="true" />
            </div>
            <p className={styles.name}>{feature.name}</p>
          </dt>
          <dd className={styles.description}>{feature.description}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Features;
