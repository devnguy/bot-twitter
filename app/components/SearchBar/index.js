import { useState } from 'react'

import * as Styled from './style'

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => {
    setIsFocused(!isFocused)
  }

  return (
    <Styled.SearchBar>
      <Styled.SearchIcon isFocused={isFocused}>
        <i className="fas fa-search" />
      </Styled.SearchIcon>
      <input placeholder="Search Twitter" onFocus={handleFocus} onBlur={handleFocus} />
    </Styled.SearchBar>
  )
}

export default SearchBar
