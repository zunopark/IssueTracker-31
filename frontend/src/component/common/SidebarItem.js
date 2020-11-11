import React, { useRef } from 'react'
import styled from 'styled-components'
import SettingIcon from '@Public/js/SettingIcon'
import PopUp from '@Component/common/PopUp'

const SidebarItem = ({ title, children, popupProps, multiSelect }) => {
  const popup = useRef()

  return (
    <StyledSidebarItem>
      <StyledTitle>
        <span>{title}</span>
        <SettingIcon />
      </StyledTitle>
      {children}
      <StyledDetailsMenu ref={popup}>
        <PopUp
          title={popupProps.title}
          kind={popupProps.kind}
          data={popupProps.data ? popupProps.data : []}
          targetCondition={popupProps.targetCondition}
          updateConditions={popupProps.updateConditions}
          multiSelect={multiSelect}
        ></PopUp>
      </StyledDetailsMenu>
    </StyledSidebarItem>
  )
}

const StyledSidebarItem = styled.div`
  font-size: 12px;
  color: #586069;
  border-bottom: solid 1px #586069;
  box-sizing: border-box;
  flex-shrink: 1;
  padding-top: 10px;
`

const StyledTitle = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  &:hover {
    color: #0366d6;
    cursor: pointer;
    fill: blue;
  }
`

const StyledDetailsMenu = styled.div`
  position: absolute;
  top: auto;
  right: 0;
  bottom: auto;
  left: auto;
  padding: 0;
`

export default SidebarItem
