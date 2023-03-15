import { Button, Space, Typography } from 'antd';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Description } from '../../../shared/ui/Description';
import { CardStatus } from '../../../shared/ui/CardStatus';
import { DetailedCard } from '../../../shared/ui/DetailedCard';

import cn from './TeamRequest.module.scss';
import { TeamsCreationsRequestStatus } from '../../../shared/lib/Requests.types';

const { Text } = Typography;

export const TeamRequest = () => {
  const { teamId } = useParams();

  const cardTitle = useMemo(
    () => (
      <Space>
        <Text style={{ fontSize: '16px' }}>
          Название команды
        </Text>
        <CardStatus type={TeamsCreationsRequestStatus.Expectation} />
      </Space>
    ),
    [],
  );

  const cardExtra = useMemo(() => (
    <Space size={24}>
      <Button onClick={() => console.log(teamId)}>
        Отклонить
      </Button>
      <Button type="primary" onClick={() => console.log(teamId)}>
        Одобрить
      </Button>
    </Space>
  ), [teamId]);

  return (
    <div className={cn.wrapper}>
      <DetailedCard title={cardTitle} extra={cardExtra}>
        <Space direction="vertical" size={24}>
          <Description title="Капитан команды" description="Фамилия Имя Отчество" />
          <Description
            title="Капитан команды"
            description="
              Мы ищем мотивированных игроков,
              желающих как играть в футбол, так и развиваться самостоятельно и вместе с командой;
              также важно наличие футбольного скилла, необходимым является наличие хотя бы
              минимального опыта в спортшколе/дюсш и подобных организациях.Как команда,
              мы предлагаем:• регулярные тренировки с тренером на полях спорткомплекса “Лужники”•
              стремление прогрессировать, занимать первые места во всех турнирах
              под эгидой чемпионата Вышки, так мы прошли за полтора года путь от низших мест
              Молодёжной Лиги до верхового футбола Вышки, и выиграли уже 4 комплекта медалей•
              самый молодой коллектив в верховом футболе НИУ ВШЭ, при этом дружный и амбициозный
            "
          />

        </Space>
      </DetailedCard>
    </div>
  );
};
