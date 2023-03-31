type CommonType = {
  widthGraph: number;
  heightGraph: number;
  data:{
    labels: string[];
    dataPoints:DataPointsType[]
  }
}

type DataPointsType = {
  data: number[];
  colorLine: string;
  strokeWidth?: number;
  nameLine?: string;
}

