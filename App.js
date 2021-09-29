import React, { useState } from 'react'
import Task from './components/Task'

import {
  StyledContainer,
  StyledTaskWrapper,
  StyledSectionTitle,
  StyledTextField,
  StyledTextInput,
  StyledAddWrapper,
  StyledAddText,
  StyledScrollView,
} from './components/styles'
import { Platform, TouchableOpacity, Keyboard } from 'react-native'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])
  const [timeStamp, setTimeStamp] = useState([])

  let dateDisplay = Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date())

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
    setTimeStamp([...timeStamp, dateDisplay])
  }

  //delete my item
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)

    let timeCopy = [...timeStamp]
    timeCopy.splice(index, 1)
    setTimeStamp(timeCopy)
  }

  return (
    <StyledContainer>
      {/* Today's Tasks*/}
      <StyledScrollView>
        <StyledTaskWrapper>
          <StyledSectionTitle>Today's tasks</StyledSectionTitle>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Task
                  text={item}
                  day={timeStamp[index]}
                  num={index}
                  completeTask={completeTask}
                />
              </TouchableOpacity>
            )
          })}
        </StyledTaskWrapper>
      </StyledScrollView>
      {/**Write a task */}
      <StyledTextField behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StyledTextInput
          placeholder={'Write your task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <StyledAddWrapper>
            <StyledAddText>+</StyledAddText>
          </StyledAddWrapper>
        </TouchableOpacity>
      </StyledTextField>
    </StyledContainer>
  )
}
