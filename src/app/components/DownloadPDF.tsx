"use client"
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Pdf';

const DownloadPDF = () => (
    <div className='h-screen w-full '>
        <PDFViewer  className='h-full w-full '>
            <MyDocument  />
        </PDFViewer>
    </div>
);

export default DownloadPDF;