import React, { useState } from 'react'
import { Button, Segment, Portal } from 'semantic-ui-react'

const PDFViewPortal = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <Portal
      openOnTriggerClick
      closeOnTriggerClick
      trigger={
        <Button
          inverted={!props.fixed}
        >
          Resumé
        </Button>
      }
      onOpen={()=>setOpen(true)}
      onClose={()=>setOpen(false)}
    >
      <Segment
        style={{
          left: '5%',
          top: '5%',
          position: 'fixed',
          zIndex: 1000,
        }}
      >
      <h2>h22222</h2>
      </Segment>
    </Portal>
  )
}

export default PDFViewPortal
