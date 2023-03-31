import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import LineChartSkeleton from './LineChartSkeleton';

type Props = {
  isLoading?: boolean;
};

const LineChart: React.FC<Props> = ({isLoading}) => {
  if (!isLoading) {
    return <LineChartSkeleton />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentGraph}>
        <Svg></Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentGraph: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default LineChart;
