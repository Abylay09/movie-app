import React from 'react'
import styled from 'styled-components'

const Number = styled.span`
  background : #ffffff;
  padding : 2px;
`

interface PageNumbersProps {
  num: number,
  setcurrentPage: (page: number) => void
}

const PageNumber: React.FC<PageNumbersProps> = ({ num, setcurrentPage }) => {
  return (
    <Number >{num}</Number>
  )
}

export default PageNumber