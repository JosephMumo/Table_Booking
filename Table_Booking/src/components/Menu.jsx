import React from 'react'
import Footer from './Footer';
import { Document, PDFViewer } from '@react-pdf/renderer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdfFile from '../sample.pdf'


function Menu() {
    const styles = {
        left: 0
    }
    
    return (  
        <>
            <div className='min-h-screen w-full'>
                <h1 className="text-center">Menu</h1>
                <PDFViewer>
                    <Document file={pdfFile} style={{styles}} className='w-full'></Document>
                </PDFViewer>
            </div>
            <Footer />
        </>
    );
}

export default Menu;