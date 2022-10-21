import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';

import { THEME } from '../../theme';
import { styles } from './style';
import { GameParams } from '../../@types/@navigation';
import { Image, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';

export function Game() {

  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams;

  // console.log(game);

  function handleGoBack() {
    navigation.goBack();
  }
  

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo 
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />

          </TouchableOpacity>

          <Image 
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image 
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Header 
            title={game.title}
            subtitle='Conecte-se e comece a jogar'
        />

        <DuoCard />
      </SafeAreaView>
    </Background>
  );
}