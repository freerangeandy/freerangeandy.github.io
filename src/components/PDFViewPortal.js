import React from 'react'
import { Button, Segment, Portal } from 'semantic-ui-react'
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
        <Document file={PdfFile}>
          <Page pageNumber={1} scale={pdfScale} renderTextLayer={false} />
        </Document>
      </Segment>
    </Portal>
  )
}

export default PDFViewPortal
