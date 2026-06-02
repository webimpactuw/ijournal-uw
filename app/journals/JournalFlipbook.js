'use client';

import { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function JournalFlipBook({ pdfUrl, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [viewport, setViewport] = useState({ width: 1200, height: 800 });

  const PAGE_WIDTH = 650;
  const PAGE_HEIGHT = 840;

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const isMobile = viewport.width < 768;

  const spreadWidth = isMobile ? PAGE_WIDTH : PAGE_WIDTH * 2;
  const spreadHeight = PAGE_HEIGHT;

  const scale = Math.min(
    (viewport.width * 0.95) / spreadWidth,
    (viewport.height * 0.87) / spreadHeight,
    1
  );

  return (
    <div
      className="fixed inset-0 bg-[#2f2f2f] z-50 overflow-hidden"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white text-5xl z-50"
      >
        ×
      </button>

      <div
        className="w-screen h-screen flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {!pdfUrl ? (
          <div className="bg-white p-8 rounded">No PDF uploaded.</div>
        ) : (
          <div
            style={{
              width: spreadWidth,
              height: spreadHeight,
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
            }}
          >
            <Document
              file={pdfUrl}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading={<div className="bg-white p-8 rounded">Loading journal...</div>}
            >
              {numPages && (
                <HTMLFlipBook
                  key={isMobile ? 'mobile' : 'desktop'}
                  width={PAGE_WIDTH}
                  height={PAGE_HEIGHT}
                  size="fixed"
                  showCover={true}
                  usePortrait={isMobile}
                  mobileScrollSupport={true}
                  flippingTime={300}
                  drawShadow={false}
                  maxShadowOpacity={0}
                  className="mx-auto"
                >
                  {Array.from({ length: numPages }, (_, index) => (
                    <div key={index} className="bg-white overflow-hidden">
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
          </div>
        )}
      </div>
    </div>
  );
}