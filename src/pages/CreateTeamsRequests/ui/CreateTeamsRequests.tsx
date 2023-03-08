import { Tabs, TabsProps } from 'antd';
import { CreateTeamsRequestsList } from '../../../widgets/CreateTeamsRequests';
import { PageWithHeaderLayout } from '../../../widgets/PageWithHeaderLayout';

const tabItems: TabsProps['items'] = [{
  key: '1',
  label: 'Ожидание',
  children: <CreateTeamsRequestsList />,
},
{
  key: '2',
  label: 'Подтвержденные',
  children: <CreateTeamsRequestsList />,
},
{
  key: '3',
  label: 'Отклоненные',
  children: <CreateTeamsRequestsList />,
}];

export const CreateTeamsRequests = () => (
  <PageWithHeaderLayout title="Заявки на создание команды">
    <Tabs
      tabBarStyle={{
        backgroundColor: '#fff',
        paddingLeft: '24px',
      }}
      items={tabItems}
      defaultActiveKey={tabItems[0].key}
    />
  </PageWithHeaderLayout>
);
