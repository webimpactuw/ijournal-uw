'use client';

import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function JournalFlipBook({ pdfUrl, onClose }) {
  const [numPages, setNumPages] = useState(null);

  const PAGE_WIDTH = 800;
  const PAGE_HEIGHT = 1050;

  return (
    <div
      className="fixed inset-0 bg-[#2f2f2f] z-50 flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div
        className="relative w-screen h-screen flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-white text-4xl z-50"
        >
          ×
        </button>

        {!pdfUrl ? (
          <div className="bg-white p-8 rounded text-xl text-navBar">
            No PDF uploaded yet.
          </div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="bg-white p-8 rounded text-xl text-navBar">
                Loading journal...
              </div>
            }
          >
            {numPages && (
              <HTMLFlipBook
                width={PAGE_WIDTH}
                height={PAGE_HEIGHT}
                minWidth={350}
                maxWidth={PAGE_WIDTH}
                minHeight={500}
                maxHeight={PAGE_HEIGHT}
                showCover={true}
                usePortrait={false}
                mobileScrollSupport={true}
                drawShadow={true}
                maxShadowOpacity={0}
                flippingTime={400}
                className="shadow-2xl"
              >
                {Array.from({ length: numPages }, (_, index) => (
                  <div
                    key={index}
                    className="bg-white overflow-hidden"
                  >
                    <Page
                      pageNumber={index + 1}
                      width={PAGE_WIDTH}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            )}
          </Document>
        )}
      </div>
    </div>
  );
}