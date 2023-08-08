import { Avatar, AvatarProps } from '@vponte-ignite/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/ViniciusPonte.png',
        alt: 'Vinicius Ponte'
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args:  {
        src: undefined
    }
}