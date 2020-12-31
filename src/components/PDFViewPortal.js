import React from 'react'
import { Button, Icon, Segment, Portal } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel'
import PdfFile from '../../assets/cv.pdf'

const PDFViewPortal = (props) => {
  const pdfScale = props.isMobile ? 0.5 : 1.0
  const pdfRight = props.isMobile ? '6%' : '2%'

  return (
    <Portal
      openOnTriggerClick
      closeOnTriggerClick
      trigger={ <Button inverted={!props.fixed}> Resumé </Button> }
      onOpen={()=>console.log("open")}
      onClose={()=>console.log("close")}
    >
      <Segment style={{ top:'6%', right:pdfRight, position:'fixed', zIndex:1000 }}>
          <Button
            size="small"
            color="teal"
            content='Download'
            icon='download'
            labelPosition='left'
          />
          <Button
            size="small"
            color="teal"
            content='Expand'
            icon='external'
            labelPosition='left'
          />
          <Icon
            link
            circular
            bordered
            name='x'
            style={{ float: 'right' }}
          />
        <Document file={PdfFile} onItemClick={()=>console.log("outline")}>
          <Page pageNumber={1} scale={pdfScale} renderTextLayer={false} />
        </Document>
      </Segment>
    </Portal>
  )
}

export default PDFViewPortal
