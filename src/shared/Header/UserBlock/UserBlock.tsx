import React from 'react';
import { AnonimIcon } from '../../icons';
import { EColor, Text } from '../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

const apiClientId = process.env.CLIENT_ID;
const apiResponseType = 'code';
const apiRandomString = 'random_string';
const apiRedirectUri = 'http://localhost:3000/auth';
const apiDuration = 'permanent';
const apiScope = 'identity read submit'

export function UserBlock({ avatarSrc, userName }:IUserBlockProps) {
  console.log(apiClientId);
  return (
      <a
          href={`https://www.reddit.com/api/v1/authorize?client_id=${apiClientId}&response_type=${apiResponseType}&state=${apiRandomString}&redirect_uri=${apiRedirectUri}&duration=${apiDuration}&scope=${apiScope}`}
          className={styles.userBox}
      >
        <div className={styles.avatarBox}>
          { avatarSrc
            ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
            : <AnonimIcon />
          }
        </div>

        <div className={styles.username}>
          <Text size={20} color={userName ? EColor.black : EColor.gray99}>
            {userName || 'Аноним'}
          </Text>
        </div>
      </a>
  );
}
