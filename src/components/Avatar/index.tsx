import React from 'react';
import styles from './avatar.module.css';

interface AvatarProps {
  username: string
  hasBorder?: boolean
}

export function Avatar({ username, hasBorder=true }:AvatarProps) {
  return (
    <img
      src={`http://github.com/${username}.png`}
      className={hasBorder?styles.AvatarWithBorder:styles.Avatar}
      alt={`Imagem de perfil de ${username}`}
    />
  );
}
