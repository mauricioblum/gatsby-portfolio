import React from 'react';
import styles from './about.module.css';
import { useStaticQuery, graphql } from 'gatsby';

export const About = () => {
  const data = useStaticQuery(graphql`
    query ProfileImage {
      profile: file(name: { eq: "profile" }) {
        publicURL
      }
      markdownRemark {
        html
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
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
