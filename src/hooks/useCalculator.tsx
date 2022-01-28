import { useRef, useState } from "react";

enum Operator{
    add,
    subtract,
    multiply,
    divide
}

export const useCalculator = () => {
    const [ numberPreview, setNumberPreview ] = useState('0');
    const [ number, setNumber ] = useState('0');

    const lastOperation = useRef<Operator>();

    const clear = () => {
        setNumber('0');
        setNumberPreview('0')
    }

    const buildNumber = ( numberText:string ) => {
        //Do not accept double points
        if( number.includes('.') && numberText === '.') return;

        if( number.startsWith('0') || number.startsWith('-0') ){
            
            if( numberText === '.' ){
                setNumber( number + numberText )
            } else if( numberText === '0' && number.includes('.') ){
                setNumber( number + numberText )
            }
            //Evaluate if it is not different from zero and has no points
            else if( numberText !== '0' && !number.includes('.') ){
                setNumber( numberText );
            }else if( numberText === '0' && !number.includes('.')  ){
                setNumber( number  );
            }else {
                setNumber( number + numberText );
            }

        }else{
            setNumber( number + numberText );
        }
        
    }

    const positiveNegative = () => {
        if( number.includes('-') ){
            setNumber( number.replace('-','') );
        }else{
            setNumber( '-' + number );
        }
    }

    const deleteNumber = () => {
        let negative = '';
        let numTemp = number;

        if( number.includes('-')){
            negative = '-';
            numTemp = number.substr(1);
        }

        if( numTemp.length > 1 ){
            setNumber( negative + numTemp.slice(0,-1))
        }else{
            setNumber('0');
        }
    }

    const changeNumberForPreview = () => {
        if(number.endsWith('.')){
            setNumberPreview( number.slice(0,-1) );
        }else{
            setNumberPreview( number );
        }

        setNumber('0');
    }

    const btnDivide = () => {
        changeNumberForPreview();
        lastOperation.current = Operator.divide;
    }

    const btnAdd = () => {
        changeNumberForPreview();
        lastOperation.current = Operator.add;
    }

    const btnMultiply = () => {
        changeNumberForPreview();
        lastOperation.current = Operator.multiply;
    }

    const btnSubstract = () => {
        changeNumberForPreview();
        lastOperation.current = Operator.subtract;
    }

    const calculate = () => {

         const numberOne = Number( number );
         const numberTwo = Number( numberPreview );

         switch (lastOperation.current) {
            case Operator.add:
                setNumber( `${ numberOne + numberTwo }` );
                break;
            
            case Operator.subtract:
                setNumber( `${ numberTwo - numberOne }` );
                break;
                
            case Operator.multiply:
                setNumber( `${ numberOne * numberTwo }` );
                break;
                
            case Operator.divide:
                setNumber( `${ numberTwo / numberOne }` );
                break;

             default:
                 break;
         }
         setNumberPreview('0') 
    }

    return {
        number,
        numberPreview,
        clear,
        positiveNegative,
        deleteNumber,
        btnDivide,
        btnAdd,
        btnMultiply,
        btnSubstract,
        buildNumber,
        calculate

    }
}
