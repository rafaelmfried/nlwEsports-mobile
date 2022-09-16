import { ImageBackground } from 'react-native';

import backdgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backdgroundImg}
      defaultSource={backdgroundImg}
      style={styles.container}
    >
      { children }
    </ImageBackground>
  );
}