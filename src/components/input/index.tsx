/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
    InputHTMLAttributes,
    useEffect,
    useState,
    useCallback,
    useRef,
} from 'react'
import { IconBaseProps } from 'react-icons'
import { useField } from '@unform/core'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const inputRef = useRef(null)
    const [isFocused, setIsFocused] = useState(false)
    const { fieldName, defaultValue, error, registerField } = useField(name)

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)
    }, [])

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    return (
        <Container isFocused={isFocused}>
            {Icon && <Icon size={20} />}
            <input
                onFocus={() => setIsFocused(true)}
                onBlur={handleInputBlur}
                ref={inputRef}
                {...rest}
            />
        </Container>
    )
}
export default Input