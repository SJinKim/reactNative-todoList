import styled from 'styled-components/native'

// colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#E8EAED',
  squareColor: '#55BCF6',
  circularColor: '#11D41B',
  borderDrk: '#C0C0C0',
}

const { primary, secondary, squareColor, circularColor, borderDrk } = Colors

//App.js---------------------------------------------------
export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${secondary};
`

export const StyledTaskWrapper = styled.View`
  padding-top: 100px;
  padding-left: 15px;
  padding-right: 15px;
`

export const StyledSectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 15px;
  margin-bottom: 20px;
`

export const StyledTextField = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const StyledTextInput = styled.TextInput`
  background-color: ${primary};
  width: 250px;
  padding: 15px 15px;
  border-radius: 60px;
  border-color: ${borderDrk};
  border-width: 1px;
`
export const StyledAddWrapper = styled.View`
  height: 60px;
  width: 60px;
  background-color: ${primary};
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  border-color: ${borderDrk};
  border-width: 1px;
`
export const StyledAddText = styled.Text`
  //smth
`

export const StyledScrollView = styled.ScrollView`
  flex: 1;
`

//Task.js----------------------------------------------------
export const StyledTaskItem = styled.View`
  background-color: ${primary};
  padding: 15px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const StyledItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

export const StyledSquare = styled.TouchableOpacity`
  width: 17px;
  height: 16px;
  background-color: ${squareColor};
  opacity: 0.4;
  border-radius: 8px;
  margin-right: 15px;
`
export const StyledItemText = styled.Text`
  max-width: 80%;
`
export const StyledItemTextU = styled.Text`
  max-width: 80%;
  text-decoration: line-through;
`

export const StyledCircular = styled.View`
  width: 24px;
  height: 24px;
  border-color: ${circularColor};
  border-width: 2px;
  border-radius: 5px;
`
