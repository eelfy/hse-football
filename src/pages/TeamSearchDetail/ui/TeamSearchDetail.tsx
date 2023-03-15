import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Space } from 'antd';
import { AdministrationApi } from '../../../shared/api';
import { FullPlayerInfo, PlayerData } from '../../../shared/lib/Requests.types';
import { AppRoutes } from '../../../shared/routes';
import { Description } from '../../../shared/ui/Description';
import { DetailedCard } from '../../../shared/ui/DetailedCard';

import cn from './TeamSearchDetail.module.scss';

export const TeamSearchDetail = () => {
  const { id } = useParams();
  const [fullPlayerData, setFullPlayerData] = useState<FullPlayerInfo | null>();

  const navigate = useNavigate();

  const createPlayerData = useCallback(
    async () => {
      const playerRequestData = await AdministrationApi.getPlayerApplicationById(
        Number(id),
      );
      let playerData: PlayerData = {} as PlayerData;

      if (playerRequestData.playerPhoneNumber) {
        playerData = await AdministrationApi.getPlayer(playerRequestData.playerPhoneNumber);
      }

      return {
        ...playerData,
        ...playerRequestData,
      } as FullPlayerInfo;
    },
    [id],
  );
  useEffect(() => {
    createPlayerData().then((data) => setFullPlayerData(data));
  }, [createPlayerData, id]);

  const cardExtra = useMemo(() => (
    <Button
      type="primary"
      onClick={async () => {
        await AdministrationApi.deletePlayerApplication(Number(id));
        navigate(AppRoutes.PlayersSearch);
      }}
    >
      Удалить заявку
    </Button>
  ), [id, navigate]);

  if (!fullPlayerData) return null;

  return (
    <div className={cn.wrapper}>
      <DetailedCard title={fullPlayerData.name} extra={cardExtra}>
        <Space direction="vertical">
          <Description
            title="Амплуа"
            description={fullPlayerData.footballPosition}
          />
          {fullPlayerData.faculty && (
          <Description
            title="Факультет, курс (для выпускников - год выпуска)"
            description={fullPlayerData.faculty}
          />
          )}

          <Description
            title="Предпочтительные турниры"
            description={fullPlayerData.preferredTournaments}
          />

          {
            fullPlayerData.tournamentExperience && (
              <Description
                title="Футбольный опыт"
                description={fullPlayerData.tournamentExperience}
              />
            )
          }
          {
            fullPlayerData.hseRole && (
            <Description
              title="Игровой опыт в турнирах ВШЭ"
              description={fullPlayerData.hseRole}
            />
            )
          }
          {fullPlayerData.playerPhoneNumber && (
          <Description
            title="Контактная информация"
            description={fullPlayerData.playerPhoneNumber}
          />
          )}

        </Space>
      </DetailedCard>
    </div>
  );
};
