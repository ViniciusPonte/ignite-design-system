import '../styles/tokens-grid.css'

interface  TokensGridProps {
    tokens: Record<string, string>
    hasRemValue?: boolean
    hasSizeRepresentation?: boolean
}

export function TokensGrid({tokens, hasRemValue, hasSizeRepresentation}: TokensGridProps) {
    return (
        <table className='tokens-grid'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    {hasRemValue && <th>Pixels</th>}
                    {hasSizeRepresentation && <th>Tamanho</th>}
                </tr>
            </thead>

            <tbody>
                {Object.entries(tokens).map(([key, value]) => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                            {hasRemValue && (
                                <td>{Number(value.replace('rem', '')) * 16}px</td>
                            )}
                            {hasSizeRepresentation && (
                                <td>
                                    <div style={{width: Number(value.replace('rem', '')) * 16, height: 12, backgroundColor: 'gray', borderRadius: 4}}/>
                                </td>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}