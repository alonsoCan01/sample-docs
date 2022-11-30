import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const BriefStatements = [
  {
    title: "Easy to Use",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
        laboriosam distinctio, dignissimos animi, rerum sed a at libero, aliquid
        quaerat repudiandae ut blanditiis sint dicta officia tenetur atque odit
        vel.
      </>
    ),
  },
  {
    title: "Document Language of The Future",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis
        quam sunt natus iure odit pariatur placeat quos cumque, repellat at,
        assumenda, delectus deleniti dolores necessitatibus labore sit a quasi.
      </>
    ),
  },
  {
    title: "Cause it Looks Good",
    description: (
      <>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo
        fugit placeat deserunt sapiente magni neque possimus eveniet accusamus
        doloribus, atque in vel explicabo repellat laboriosam quidem
        reprehenderit quisquam qui.
      </>
    ),
  },
];

function Statement({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageBrief() {
  return (
    <section className={styles.brief}>
      <div className="container">
        <div className="row">
          {BriefStatements.map((props, idx) => (
            <Statement key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
