import React, { FC } from 'react';
import cx from 'classnames';
import {
  MessageSquare, Paperclip, Plus, User,
} from 'react-feather';
import PriorityTag, { Priority } from '../priorityTag';
import Typography from '../typography';
import Button from '../button';

import styles from './Card.module.scss';

interface CardProps {
  priority: Priority;
  description: string;
}

const Card: FC<CardProps> = ({ priority, description }) => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <div className={styles.card}>
      <div className={styles.priorityTag}>
        <PriorityTag priority={priority} />
      </div>
      <div className={styles.description}>
        <Typography variant="span">{description}</Typography>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.leftWrapper}>
          <div>
            <Button onClick={handleClick} className={styles.button}>
              <MessageSquare color="gray" size={16} />
              <Typography variant="p" className={styles.numberIcon}>3</Typography>
            </Button>
          </div>
          <div>
            <Button onClick={handleClick} className={styles.button}>
              <Paperclip color="gray" size={16} />
              <Typography variant="p" className={styles.numberIcon}>3</Typography>
            </Button>
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.addIcon}>
            <Button onClick={handleClick} className={cx(styles.buttonDotted, styles.button)}>
              <Plus color="gray" size={20} />
            </Button>
          </div>
          <Button onClick={handleClick} className={cx(styles.buttonCircle, styles.button)}>
            <User color="white" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Card;
