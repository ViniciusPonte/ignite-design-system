import { Box, BoxProps, Text } from '@vponte-ignite/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text>Testando o elemento Box</Text>
            </>
        )
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    args: {

    }
}