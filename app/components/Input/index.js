import PropTypes from 'prop-types'
import { useState, useRef } from 'react'

import { Wrapper, StyledInput, FieldName } from './style'

const Input = ({ name, type }) => {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => {
    setIsFocused(!isFocused)
  }
  const textInput = useRef(null)
  const focusInput = () => {
    textInput.current.focus()
  }
  return (
    <Wrapper isFocused={isFocused} onClick={focusInput}>
      <FieldName isFocused={isFocused}>{name}</FieldName>
      <StyledInput ref={textInput} onFocus={handleFocus} onBlur={handleFocus} type={type} />
    </Wrapper>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  name: '',
  type: 'text',
}

export default Input
