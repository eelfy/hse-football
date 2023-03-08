import { Card } from 'antd';
import { ReactNode } from 'react';

import cn from './DetailedCard.module.scss';

interface DetailedCardProps {
  title: ReactNode;
  extra: ReactNode;
  children: ReactNode;
}

export const DetailedCard = ({
  title,
  extra,
  children,
}: DetailedCardProps) => (
  <Card
    title={title}
    extra={extra}
    className={cn.card}
  >
    {children}
  </Card>
);
