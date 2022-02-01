import styles from "./MDXLayoutComponent.module.css";
import Hero from "./Hero";

const MDXLayoutComponent = ({ children, meta }) => {
  return (
    <>
      <Hero title="Privacy Policy" />

      <article className={`prose lg:prose-xl ${styles.article}`}>
        {children}
      </article>
    </>
  );
};

export default MDXLayoutComponent;
