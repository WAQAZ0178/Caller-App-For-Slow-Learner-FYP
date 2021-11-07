import React from 'react'
import { Header } from 'react-native-elements'

const CHeader = ({ left, center, right, style, bgColor }: any) => {
    return (
        <Header
            leftComponent={left}
            centerComponent={center}
            rightComponent={right}
            backgroundColor={bgColor}
            containerStyle={style}
        />
    )
}

export { CHeader }
