import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ricardo-oliveira-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  /*
    Mapeia propriedades do css para algum token
    Os valores css contidos no token space por padrão são aplicados no Stitches
    nos estilos de padding e margin. Como queremos que esse token também seja
    aplicado para height e width, precisamos utilizar a propriedade themeMap.
  */
  themeMap: {
    ...defaultThemeMap, // Para evitar que o tokens já existentes sejam substituídos (perdidos)
    height: 'space',
    width: 'space',
  },

  /* Compõem basicamente que serão usadas pelo tema da aplicação */
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
