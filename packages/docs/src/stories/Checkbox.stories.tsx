import { Box, Text, Checkbox, CheckboxProps } from '@ignite-vponte/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{display: 'flex', alignItems: 'center', gap: '$2'}}>
                    {Story()}
                    <Text size="sm">Accept terms of use</Text>
                </Box>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}