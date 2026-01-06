import { Document, Packer, Paragraph, TextRun } from 'docx';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export const downloadAsPDF = async (highlightedText) => {
    const pdfDoc = await PDFDocument.create();
    let page = pdfDoc.addPage();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const { width, height } = page.getSize();

    const marginX = 40;
    const marginY = 40;
    const fontSize = 12;
    const lineHeight = fontSize * 1.5;

    const cursor = {
        x: marginX,
        y: height - marginY,
    };

    const newLine = () => {
        cursor.x = marginX;
        cursor.y -= lineHeight;

        if (cursor.y < marginY) {
            page = pdfDoc.addPage();
            cursor.y = height - marginY;
        }
    };

    for (const part of highlightedText) {
        if (typeof part === 'string') {
            const tokens = part.split(/(\s+)/); // keep spaces

            for (const token of tokens) {
                if (token === '\n') {
                    newLine();
                    continue;
                }

                const tokenWidth = font.widthOfTextAtSize(token, fontSize);
                wrapIfNeeded(
                    tokenWidth,
                    cursor.x,
                    marginX,
                    width,
                    lineHeight,
                    cursor
                );

                page.drawText(token, {
                    x: cursor.x,
                    y: cursor.y,
                    size: fontSize,
                    font,
                    color: rgb(0, 0, 0),
                });

                cursor.x += tokenWidth;
            }
        } else {
            const text = part.props.children;
            const bg = part.props.style.backgroundColor;

            const words = text.split(/(\s+)/);

            for (const word of words) {
                const wordWidth = font.widthOfTextAtSize(word, fontSize);
                wrapIfNeeded(
                    wordWidth,
                    cursor.x,
                    marginX,
                    width,
                    lineHeight,
                    cursor
                );

                // highlight
                page.drawRectangle({
                    x: cursor.x,
                    y: cursor.y - 2,
                    width: wordWidth,
                    height: fontSize + 4,
                    color: hexToRgb(bg),
                });

                page.drawText(word, {
                    x: cursor.x,
                    y: cursor.y,
                    size: fontSize,
                    font,
                    color: rgb(0, 0, 0),
                });

                cursor.x += wordWidth;
            }
        }
    }

    const pdfBytes = await pdfDoc.save();
    triggerDownload(
        new Blob([pdfBytes], { type: 'application/pdf' }),
        'highlighted-unseen.pdf'
    );
};

const wrapIfNeeded = (wordWidth, x, marginX, pageWidth, lineHeight, cursor) => {
    if (x + wordWidth > pageWidth - marginX) {
        cursor.x = marginX;
        cursor.y -= lineHeight;
    }
};

const hexToRgb = (hex) => {
    const c = hex.replace('#', '');
    const num = parseInt(c, 16);
    return rgb(
        ((num >> 16) & 255) / 255,
        ((num >> 8) & 255) / 255,
        (num & 255) / 255
    );
};

export const downloadAsDOCX = async (highlightedText) => {
    const runs = [];

    highlightedText.forEach((part) => {
        if (typeof part === 'string') {
            const lines = part.split('\n');
            lines.forEach((line, i) => {
                runs.push(new TextRun(line));
                if (i < lines.length - 1) {
                    runs.push(new TextRun({ break: 1 }));
                }
            });
        } else {
            runs.push(
                new TextRun({
                    text: part.props.children,
                    shading: {
                        fill: part.props.style.backgroundColor.replace('#', ''),
                    },
                })
            );
        }
    });

    const doc = new Document({
        sections: [
            {
                children: [new Paragraph({ children: runs })],
            },
        ],
    });

    const blob = await Packer.toBlob(doc);
    triggerDownload(blob, 'highlighted-unseen.docx');
};

const triggerDownload = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
};
