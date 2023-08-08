import { Text, TextProps } from '@vponte-ignite/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam quo aliquid incidunt voluptate sint est, quae consequuntur reprehenderit nemo molestiae temporibus deleniti? Pariatur quibusdam dolorum iste rerum, consectetur modi?"
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args:  {
        children: 'Strong text',
        as: 'strong'
    }
}