import { Card, Space, Typography } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from './RequestCard.module.scss';

const { Link, Text } = Typography;

type CardField = string | number;
export interface RequestCardProps {
  header: CardField;
  content: {
    title: CardField;
    description: CardField;
  };
  redirectTo: string;
}

export const RequestCard = ({ header, content, redirectTo }: RequestCardProps) => {
  const navigate = useNavigate();

  const navigateToDetailPage = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.preventDefault();
      navigate(redirectTo);
    },
    [navigate, redirectTo],
  );

  return (
    <Card
      className={cn.card}
      title={header}
      bordered={false}
      extra={(
        <Link
          onClick={navigateToDetailPage}
          href={redirectTo}
        >
          Подробнее
        </Link>
      )}
    >
      <Space direction="vertical">
        <Text>{content.title}</Text>
        <Text type="secondary">{content.description}</Text>
      </Space>
    </Card>
  );
};
