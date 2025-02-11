// features/auth/ui/social-buttons.tsx
'use client';
import { Button } from 'antd';
import { AiFillGoogleCircle, AiFillApple, AiFillFacebook } from 'react-icons/ai';

import styles from './social-buttons.module.scss';

export const SocialButtons = () => (
  <div className={styles.socialButtons}>
    <Button icon={<AiFillGoogleCircle />} block className={styles.socialButton}>
      Вход с аккаунтом Google
    </Button>
    <Button icon={<AiFillApple />} block className={styles.socialButton}>
      Продолжить с Apple
    </Button>
    <Button icon={<AiFillFacebook />} block className={styles.socialButton}>
      Продолжить с Facebook
    </Button>
    <div className={styles.separator}>или</div>
  </div>
);