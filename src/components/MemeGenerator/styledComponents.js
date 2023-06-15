import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 35px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 14px;
  margin-bottom: 5px;
  font-family: 'Roboto';
  display: block;
`

export const TextInput = styled.input`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Roboto';
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  outline: none;
  padding: 8px 13px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`

export const Select = styled.select`
  color: #000000;
  font-size: 14px;
  font-family: 'Roboto';
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  padding: 8px 13px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`

export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding: 8px 18px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  height: 300px;
  width: 100%;
  max-width: 500px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TextContent = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
`
