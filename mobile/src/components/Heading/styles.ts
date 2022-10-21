import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%', // ocupar toda a tela
    padding: 32,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontsize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    height: 25
  },
  subtitle: {
    color: THEME.COLORS.CAPTION_400,
    fontsize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});