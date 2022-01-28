import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalculator } from '../components/BotonCalculator'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'



export const CalculatorScreen = () => {

    const {
        numberPreview, 
        number,
        clear,
        positiveNegative,
        deleteNumber,
        btnDivide,
        btnAdd,
        btnMultiply,
        btnSubstract,
        buildNumber,
        calculate 
    } = useCalculator();

    return (
        <View style={ styles.container }>
            { (numberPreview !== '0') &&
                (<Text style={ styles.smallText }> { numberPreview } </Text>)
            }
            
            <Text 
                style={ styles.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            > 
                { number }
            </Text>

            {/**Rows of botton */}
            <View style={ styles.row }> 
                <BotonCalculator text="C" color="#9B9B9B" action={ clear }/>
                <BotonCalculator text="+/-" color="#9B9B9B" action={ positiveNegative }/>
                <BotonCalculator text="DEL" color="#9B9B9B" action={ deleteNumber }/>
                <BotonCalculator text="/" color="#FF9427" action={ btnDivide }/>
            </View>
            {/**Rows of botton */}
            <View style={ styles.row }> 
                <BotonCalculator text="7" action={ buildNumber }/>
                <BotonCalculator text="8" action={ buildNumber }/>
                <BotonCalculator text="9" action={ buildNumber }/>
                <BotonCalculator text="X" color="#FF9427" action={ btnMultiply }/>
            </View>
            {/**Rows of botton */}
            <View style={ styles.row }> 
                <BotonCalculator text="4" action={ buildNumber }/>
                <BotonCalculator text="5" action={ buildNumber }/>
                <BotonCalculator text="6" action={ buildNumber }/>
                <BotonCalculator text="-" color="#FF9427" action={ btnSubstract }/>
            </View>
            {/**Rows of botton */}
            <View style={ styles.row }> 
                <BotonCalculator text="1" action={ buildNumber }/>
                <BotonCalculator text="2" action={ buildNumber }/>
                <BotonCalculator text="3" action={ buildNumber }/>
                <BotonCalculator text="+" color="#FF9427" action={ btnAdd }/>
            </View>
            {/**Rows of botton */}
            <View style={ styles.row }> 
                <BotonCalculator text="0" action={ buildNumber } wide/>
                <BotonCalculator text="." action={ buildNumber } />
                <BotonCalculator text="=" color="#FF9427" action={ calculate }/>
            </View>
            

        </View>
    )
}
