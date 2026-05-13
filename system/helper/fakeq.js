/* ════════════════════════════════════════════
 * Habibi Bot  ╌  habibi
 * ════════════════════════════════════════════
 * file    : system/helper/fakeq.js
 * desc    : system › helper › fakeq
 * author  : Habibi  ⪩  2026
 * ════════════════════════════════════════════
 * © 2026 habibi. all rights reserved.
 * do not resell, redistribute, or claim as
 * your own work without explicit permission.
 * ────────────────────────────────────────────
 * © 2026 habibi. semua hak dilindungi.
 * dilarang menjual, menyebarkan, atau mengaku
 * sebagai karya sendiri tanpa izin tertulis.
 * ════════════════════════════════════════════ */

import path from 'node:path'
import { fileURLToPath } from 'url'
import { ConfigCache } from './config-cache.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const FAKEQ_FILE = path.join(__dirname, '../cache/fakeq.json')

const cache = new ConfigCache(FAKEQ_FILE, { enabled: true })

export function isFakeQEnabled() {
  return cache.get().enabled !== false
}

export function setFakeQ(state) {
  cache.set({ enabled: Boolean(state) })
}

