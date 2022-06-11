import { View, Text, Pressable, Image } from 'react-native';

import styles from './styles';

export default function HomeSceen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image
          style={styles.logo}
          source={require('../../assets/react_logo.png')}
        />
      </Pressable>
    </View>
  );
}