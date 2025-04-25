import QRCode from 'qrcode';

export const generarCodigoQR = async (data: string): Promise<string> => {
  try {
    return await QRCode.toDataURL(data);
  } catch (error) {
    throw new Error("Error generando QR");
  }
  console.log(data);
};