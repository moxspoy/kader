import {StyleSheet} from 'react-native';

export const FONT_DEFAULT = 'Ubuntu-';
export const FONT_REGULAR = FONT_DEFAULT + 'Regular';
export const FONT_MEDIUM = FONT_DEFAULT + 'Medium';
export const FONT_MEDIUM_ITALIC = FONT_DEFAULT + 'MediumItalic';
export const FONT_LIGHT = FONT_DEFAULT + 'Light';
export const FONT_LIGHT_ITALIC = FONT_DEFAULT + 'LightItalic';
export const FONT_ITALIC = FONT_DEFAULT + 'Italic';
export const FONT_BOLD = FONT_DEFAULT + 'Bold';
export const FONT_BOLD_ITALIC = FONT_DEFAULT + 'BoldItalic';
const FONT_SIZE_REGULAR = 21;
const LINE_HEIGHT_SCALE = 1.5;

export const STYLE_CENTER = 'center';

const GlobalStyles = StyleSheet.create({
    textRegular: {
        fontFamily: FONT_REGULAR,
        fontSize: FONT_SIZE_REGULAR,
        color: 'black',
        lineHeight: FONT_SIZE_REGULAR * LINE_HEIGHT_SCALE,
    },
    center: {
        justifyContent: STYLE_CENTER,
        alignItems: STYLE_CENTER,
    },
});

export default GlobalStyles;
