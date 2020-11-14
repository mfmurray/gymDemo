import { Dimensions } from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const baseWidth = 414;
const baseHeight = 862;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const fonted = Math.min(scaleWidth*415, scaleHeight*415);



export const style = {
  color: {
    orange: "#e77b28",
    grey: '#bfbfbf',
    grey2: '#ebebeb',
    grey3: '#dbdbdb',
  },
  fonted: fonted,
  width: width,
  height: height,
}
