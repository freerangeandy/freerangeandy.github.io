import React, { Fragment, useState } from 'react'
import { Button, Icon, Segment, TransitionablePortal } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel'
import PdfFile from '../../assets/cv.pdf'

const PDFViewPortal = (props) => {
  const [open, setOpen] = useState(false)
  const pdfScale = props.isMobile ? 0.5 : 1.0
  const pdfRight = props.isMobile ? '6%' : '2%'

  const hidePortal = () => {
    document.getElementById("page-mask").classList.remove("dimmed-mask")
    setOpen(false)
  }
  const togglePortal = () => {
    document.getElementById("page-mask").classList.toggle("dimmed-mask")
    setOpen(!open)
  }

  return (
    <Fragment>
      <Button onClick={togglePortal} inverted={!props.fixed}>
        Resumé
      </Button>
      <TransitionablePortal
        open={open}
        transition={{ animation:'fade', duration: 500 }}
        onClose={hidePortal}
      >
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
            onClick={hidePortal}
          />
          <Document file={PdfFile} onItemClick={()=>console.log("outline")}>
            <Page pageNumber={1} scale={pdfScale} renderTextLayer={false} />
          </Document>
        </Segment>
      </TransitionablePortal>
    </Fragment>
  )
}

export default PDFViewPortal
