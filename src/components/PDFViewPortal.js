import React, { Fragment, useState } from 'react'
import { Button, Icon, Segment, Portal } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel'
import PdfFile from '../../assets/cv.pdf'

const PDFViewPortal = (props) => {
  const [open, setOpen] = useState(false)
  const pdfScale = props.isMobile ? 0.5 : 1.0
  const pdfRight = props.isMobile ? '6%' : '2%'

  return (
    <Fragment>
      <Button onClick={() => setOpen(!open)} inverted={!props.fixed}>
        Resumé
      </Button>
      <Portal open={open} onClose={() => setOpen(false)}>
        <Segment style={{ top:'6%', right:pdfRight, position:'fixed', zIndex:1000 }}>
          <Button
            size="small"
            color="teal"
            content='Download'
            icon='download'
            labelPosition='left'
            as="a" href={PdfFile} rel="noopener noreferrer" download="Andrew_Lee_CV.pdf"
          />
          <Button
            size="small"
            color="teal"
            content='Expand'
            icon='external'
            labelPosition='left'
            as="a" href={PdfFile} rel="noopener noreferrer" target="_blank"
          />
          <Icon
            link
            circular
            bordered
            name='x'
            style={{ float: 'right' }}
            onClick={() => setOpen(false)}
          />
          <Document file={PdfFile} onItemClick={()=>console.log("outline")}>
            <Page pageNumber={1} scale={pdfScale} renderTextLayer={false} />
          </Document>
        </Segment>
      </Portal>
    </Fragment>
  )
}

export default PDFViewPortal
