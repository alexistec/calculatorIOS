import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text:string;
    color?:string;
    wide ?: boolean;
    action: (numberText:string) => void;
}


export const BotonCalculator = ( { text, color='#2D2D2D', wide=false, action } : Props ) => {
    return (
        <TouchableOpacity
            onPress={ ()=> action( text ) }
        >
            <View 
            style={{  
                ...styles.boton,
                backgroundColor:color ,
                width: (wide) ? 180: 80 
            }}>
                <Text 
                    style={{ 
                        ...styles.botonText,
                        color: (color === '#9B9B9B') ? '#000' : '#FFF' 
                    }} >
                        { text }
                </Text>
            </View> 
        </TouchableOpacity>
    )
}
