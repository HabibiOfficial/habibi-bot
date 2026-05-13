/* ════════════════════════════════════════════
 * Habibi Bot  ╌  habibi
 * ════════════════════════════════════════════
 * file    : system/manager/prefix.js
 * desc    : system › manager › prefix
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

export default class PrefixManager {
  constructor() {
    this.prefixes = ['.', '!', '#'];
  }

  getAll() {
    return this.prefixes;
  }

  add(prefix) {
    if (!this.prefixes.includes(prefix)) {
      this.prefixes.push(prefix);
    }
  }

  remove(prefix) {
    this.prefixes = this.prefixes.filter(p => p !== prefix);
  }

  has(prefix) {
    return this.prefixes.includes(prefix);
  }
}
