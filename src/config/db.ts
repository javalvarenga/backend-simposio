import knex from "knex"
import dotenv from "dotenv"
import path from "path"
import fs from "fs"

// Determinar la ruta absoluta al archivo .env en la raíz del proyecto
const envPath = path.resolve(process.cwd(), "db_c.env")

// Verificar si el archivo existe
if (fs.existsSync(envPath)) {
  console.log(`Archivo .env encontrado en: ${envPath}`)
  // Cargar variables de entorno desde la ruta específica
  const result = dotenv.config({ path: envPath })

  if (result.error) {
    console.error("Error al cargar el archivo .env:", result.error)
  } else {
    console.log("Variables de entorno cargadas correctamente")
  }
} else {
  console.error(`Archivo .env no encontrado en: ${envPath}`)
}

// Mostrar las variables de entorno (solo para depuración)
console.log("Variables de entorno de base de datos:")
console.log("HOST:", process.env.HOST)
console.log("DB_USER:", process.env.DB_USER ? "***Configurado***" : "No configurado")
console.log("PASSWORD:", process.env.PASSWORD ? "***Configurado***" : "No configurado")
console.log("DATABASE:", process.env.DATABASE)

const host = process.env.HOST || "localhost"
const user = process.env.DB_USER
const password = process.env.PASSWORD
const database = process.env.DATABASE

if (!user || !password || !database) {
  console.error("Error: Variables de entorno de base de datos no configuradas")
  console.error("Por favor, configura HOST, DB_USER, PASSWORD y DATABASE en tu archivo .env")
  process.exit(1)
}

export const db = knex({
  client: "mysql2",
  connection: {
    host,
    user,
    password,
    database,
    charset: "utf8mb4",
  },
  pool: {
    min: 2,
    max: 10,
  },
  debug: true, // Habilitar para ver todas las consultas SQL
})

// Evento para manejar errores de conexión
db.on("error", (err) => {
  console.error("Error en la conexión a la base de datos:", err)
})

console.log(`Configuración de base de datos inicializada para: ${database} en ${host}`)