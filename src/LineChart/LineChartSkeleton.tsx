import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const LineChartSkeleton = () => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item flexDirection="column" marginBottom={10}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item width={3} height={200} marginRight={5} />
        <SkeletonPlaceholder.Item width={380} height={200} marginBottom={5} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item width={380} height={3} />
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);

export default LineChartSkeleton;
