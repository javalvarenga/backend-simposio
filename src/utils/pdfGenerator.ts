import PDFDocument from "pdfkit";

export const generarCertificado = (nombre: string): Buffer => {
  const doc = new PDFDocument();
  const buffers: Uint8Array[] = [];

  // Escuchar eventos de datos
  doc.on("data", (chunk) => buffers.push(chunk));
  doc.on("end", () => {}); // Necesario para mantener la referencia

  // Contenido del PDF
  doc.fontSize(24).text("Certificado de Participación", { align: "center" });
  doc.moveDown();
  doc.fontSize(16).text(`Otorgado a: ${nombre}`, { align: "center" });
  doc.moveDown();
  doc.text("Por su valiosa participación en el evento.", { align: "center" });

  // Finalizar documento
  doc.end();

  return Buffer.concat(buffers);
};