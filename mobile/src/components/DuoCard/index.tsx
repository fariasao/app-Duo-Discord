import { View } from "react-native";
import { DuoInfo } from "../DuoInfo";

import { styles } from './style'

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label="Nome"
        value='Enzo Farias'
      />
    </View>
  )
}