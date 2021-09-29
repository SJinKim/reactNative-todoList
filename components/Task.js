import React, { useState, useEffect, memo } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  StyledTaskItem,
  StyledItemLeft,
  StyledSquare,
  StyledItemText,
  StyledCircular,
} from '../components/styles'

const Task = (props) => {
  const [checkTime, setCheckTime] = useState(false)

  const handleTime = () => {
    setCheckTime(!checkTime)
  }

  const deleteTask = () => {
    props.completeTask(props.num)
  }

  return (
    <TouchableOpacity onPress={() => handleTime()}>
      <StyledTaskItem>
        <StyledItemLeft>
          <StyledSquare></StyledSquare>
          <StyledItemText>{checkTime ? props.day : props.text}</StyledItemText>
        </StyledItemLeft>
        <TouchableOpacity onPress={deleteTask}>
          <StyledCircular></StyledCircular>
        </TouchableOpacity>
      </StyledTaskItem>
    </TouchableOpacity>
  )
}

export default Task
