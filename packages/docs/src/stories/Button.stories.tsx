// Por serem tipagens do typescript, podemos nos utilizar da keyword type.
import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ricardo-oliveira-ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  // args contém todas as propriedade que podem ser passadas para o component Button.
  // Ela estando aqui, toda e qualquer variante do botão a terá conforme ela foi configurada.
  // Pode ser incluída em cada variação do Botão de forma isolada também.
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
