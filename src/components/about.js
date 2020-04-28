import React from 'react';
import styles from './about.module.css';
import { useStaticQuery, graphql } from 'gatsby';

export const About = () => {
  const data = useStaticQuery(graphql`
    query ProfileImage {
      profile: file(name: { eq: "profile" }) {
        publicURL
      }
    }
  `);

  return (
    <div className={`container`}>
      <h3>About Me</h3>
      <div className={styles.bio}>
        <div className={styles.profilePicture}>
          <span
            style={{
              backgroundImage: `url(${data.profile.publicURL})`,
            }}
          />
        </div>
        <div className={styles.aboutText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            iusto laborum. Nobis veritatis reiciendis qui quos, hic neque
            suscipit praesentium dicta saepe harum cum asperiores maxime minima
            expedita facilis fugit.
          </p>
          <p>lipsum</p>
          <p>lipsum</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quod
            reiciendis porro voluptatibus voluptatem laboriosam, vel obcaecati
            culpa omnis ex illum maxime libero? Neque eligendi maxime
            accusantium ut ducimus. Nemo.
          </p>
          <p>lipsum</p>
          <p>lipsum</p>
        </div>
      </div>
    </div>
  );
};

export default About;
