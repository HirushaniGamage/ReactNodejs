// Importing modules
import BookReport from "pdfkit";
import fs from "fs";

function createBookReport(book, path) {
  let doc = new PDFDocument({ margin: 50 });

  function generateTableRow(doc, y, c1, c2, c3, c4, c5) {
    doc
      .fontSize(10)
      .text(c1, 50, y)
      .text(c2, 150, y)
      .text(c3, 280, y, { width: 90, align: "right" })
      .text(c4, 370, y, { width: 90, align: "right" })
      .text(c5, 0, y, { align: "right" });
  }

  function generateBookTable(doc, book) {
    let i,
      invoiceTableTop = 330;

    for (i = 0; i < book.items.length; i++) {
      const item = book.items[i];
      const position = bookTableTop + (i + 1) * 30;
      generateTableRow(
        doc,
        position,
        item.item,
        item.description,
        item.amount / item.quantity,
        item.quantity,
        item.amount
      );
    }
  }

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}
