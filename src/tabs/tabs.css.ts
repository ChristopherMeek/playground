import { style } from '@vanilla-extract/css'

export const tabGroup = style({
  margin: '100px'
})

export const tabs = style({
  display: 'flex',
  flexDirection: 'column'
})

export const tab = style({
  width: '150px',
  height: '60px',
  textAlign: 'center',
  border: 'solid 1px black',
  position: 'relative'
})

export const selectedTabIndicator = style({
  position: 'absolute',
  width: '6px',
  backgroundColor: 'red',
  left: 6,
  top: 6,
  bottom: 6
})