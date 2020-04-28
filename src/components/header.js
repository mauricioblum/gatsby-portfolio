import React from 'react';
import styles from './header.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = ({ profileName, profileJob, profileEmail, socialInfo }) => (
  <header className={styles.header}>
    <div>
      <h1 className={styles.title}>{profileName}</h1>
      <h2 className={styles.subtitle}>{profileJob}</h2>
    </div>

    <div>
      <ul className={styles.socialList}>
        <li>
          <a
            className={`${styles.socialLink} ${styles.socialButton}`}
            target="_blank"
            href={socialInfo.github}
          >
            <i>
              <FaGithub size={28} />
            </i>
          </a>
        </li>

        <li>
          <a
            className={`${styles.socialLink} ${styles.socialButton}`}
            target="_blank"
            href={socialInfo.linkedin}
          >
            <i>
              <FaLinkedin size={28} />
            </i>
          </a>
        </li>

        <li>
          <a
            className={`${styles.socialLink} ${styles.socialButton}`}
            target="_blank"
            href={socialInfo.twitter}
          >
            <i>
              <FaTwitter size={28} />
            </i>
          </a>
        </li>
      </ul>
      <p>
        Email:{' '}
        <a target="_blank" href={profileEmail}>
          {profileEmail}
        </a>
      </p>
    </div>
  </header>
);

export default Header;
