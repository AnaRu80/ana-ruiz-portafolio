
import Dummy from '../assets/dummy.pdf'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export function ResumePage() {
  return (
    <div className='main-container'>
      <Document file={Dummy} >
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}
