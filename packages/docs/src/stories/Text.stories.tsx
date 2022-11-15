import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ricardo-oliveira-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi sint architecto fugiat dolor sunt velit, iste, dignissimos asperiores ducimus non. Ipsam quod animi aut quidem possimus est, sint ullam.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong', // O 'as' substitui a tag padrão do componente, no caso um 'p', pelo que foi informado a ele!
  },
}
