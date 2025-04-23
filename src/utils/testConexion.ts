import { db } from "../config/db"

async function testConnection() {
  try {
    // Intenta realizar una consulta simple
    const result = await db.raw("SELECT 1+1 as result")
    console.log("¡Conexión exitosa a la base de datos!")
    console.log("Resultado de prueba:", result[0])
    return true
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error)
    return false
  } finally {
    // Cierra la conexión
    await db.destroy()
  }
}

// Ejecuta la prueba
testConnection()
  .then((success) => {
    if (success) {
      console.log("Test completado con éxito")
    } else {
      console.log("Test fallido")
    }
    process.exit(0)
  })
  .catch((err) => {
    console.error("Error inesperado:", err)
    process.exit(1)
  })