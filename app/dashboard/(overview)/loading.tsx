import { FC } from 'react';
import DashboardSkeleton from '../../ui/skeletons';

const DashboardLoading: FC = () => {
  return (
    <div>
      <DashboardSkeleton />
    </div>
  );
};

export default DashboardLoading;
