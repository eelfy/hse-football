import { Space, Typography } from 'antd';

import cn from './CardStatus.module.scss';

const { Text } = Typography;

export enum CardStatusType {
  Expectation = 'Expectation',
  Confirmed = 'Confirmed',
  Rejected = 'Rejected',
}

export interface CardStatusProps {
  type: CardStatusType
}

const CardStatusTypeToLabel: Record<CardStatusType, string> = {
  [CardStatusType.Confirmed]: 'Подтвержденные',
  [CardStatusType.Expectation]: 'Ожидание',
  [CardStatusType.Rejected]: 'Ожидание',
};

export const CardStatus = ({ type }: CardStatusProps) => (
  <Space size={6}>
    <div className={cn.badge} />
    <Text type="secondary">{CardStatusTypeToLabel[type]}</Text>
  </Space>
);
