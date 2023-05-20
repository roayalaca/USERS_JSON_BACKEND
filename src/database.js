//importar lowdb, importar clase low y JSONFile

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

let db;


const __dirname = dirname(fileURLToPath(import.meta.url))

export async function createConnection() {
    const file = join(__dirname, '../db.json')
    const adapter = new JSONFile(file)
    const defaultData = { posts: [] }
    db = new Low(adapter, defaultData)

    await db.read()
  
    const { detail } = db.data


}

export const getConnection = () => db;


createConnection()