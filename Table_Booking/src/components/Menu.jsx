import React, { useState } from 'react'
import Footer from './Footer';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdfFile from '../sample.pdf'


function Menu() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }
    return (  
        <>
            <div className='min-h-screen'>
                <h1 className="text-center">Menu</h1>
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            <Footer />
        </>
    );
}

export default Menu;