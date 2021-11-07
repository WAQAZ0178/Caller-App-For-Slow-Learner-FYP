import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { hp } from '../Global/Styles/Scalling'
import { theme } from '../Global/Styles/Theme'

const Loader = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: hp(8) }}>
            <ActivityIndicator size="small" color={theme} />
        </View>
    )
}

export { Loader }
