import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Complex Topics, Simplified',
    Svg: require('../../static/img/chart.svg').default,
    description: (
      <>
        Fiduciary data and programs can be confusing. I've built this website to assist in archiving, sharing,
        and explaining API's for my code.
      </>
    ),
  },
  {
    title: 'Newbie Oriented',
    Svg: require('../../static/img/www.svg').default,
    description: (
      <>
        Parsing through code is confusing (and frankly, boring). The documentation and devlogs
        I've put here are specifically written for non-coders, so anybody can understand the use-case & benefit.
        If you know how to code, awesome! The docs should be easy to navigate.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../static/img/view.svg').default,
    description: (
      <>
        All of my projects are open sourced on <code>GitHub</code>. Additionally, developer log is included in the documentation site for more in-depth commentary on the topics archived here.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
