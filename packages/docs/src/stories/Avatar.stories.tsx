import { Avatar, AvatarProps } from '@vponte-ignite/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/ViniciusPonte.png',
        alt: 'Vinicius Ponte'
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args:  {
        src: undefined
    }
}