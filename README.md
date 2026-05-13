# Habibi Bot

Bot WhatsApp berbasis [Baileys](https://github.com/WhiskeySockets/Baileys) dengan support button interaktif (nativeFlowMessage & interactiveMessage). Siap dikembangkan sesuai kebutuhan.

---

## Requirements

- Node.js v21+ (v22 recommended)
- FFmpeg (untuk convert video ke sticker)
- Sharp (untuk convert gambar ke sticker)
- PM2 (opsional, untuk process management)

---

## Setup

```bash
git clone https://github.com/HabibiOfficial/habibi-bot
cd habibi-bot
npm install
node launcher.js
```

Saat pertama jalan, pilih metode auth (pairing code atau QR). Setelah terkoneksi, bot otomatis mendaftarkan nomor bot sebagai owner pertama.

Bot ini default private — hanya bisa diakses oleh nomor yang mendapatkan role. Gunakan command `access` untuk memberikan akses.

---

## Struktur

```
habibi-bot/
├── index.js                         entry point utama
├── launcher.js                      process wrapper dengan auto-restart
├── package.json
├── plugins/                         semua command bot
│   ├── dev/                         tools developer
│   ├── example/                     contoh plugin & button
│   ├── info/                        info bot & server
│   ├── menu/                        menu & help
│   ├── system/                      system management
│   └── tools/                       tools umum
└── system/
    ├── handler/                     handler pesan masuk
    ├── helper/                      utility & helper
    ├── listener/                    event listener
    ├── manager/                     plugin & prefix manager
    └── store/                       message store
```

---

## Plugin Structure

Buat file `.js` baru di folder `plugins/` — bot otomatis load tanpa restart:

```js
export default {
  name    : 'nama plugin',
  command : ['cmd', 'alias'],
  category: ['tools'],

  async run({ m, args, react, chat, sender, role }) {
    await react('ok')
    m.reply('Halo dari Habibi Bot!')
  }
}
```

---

## Access Control

```
access                     lihat daftar akses
access owner (reply)       tambah role owner
access user (reply)        tambah role user
unaccess me                lepas akses diri sendiri
```

---

## Native Flow Button

```js
import { sendNativeFlow } from '../../system/helper/nativeflow.js'

await sendNativeFlow(feb, chat, {
  viewOnceMessage: {
    message: {
      interactiveMessage: {
        body: { text: 'Pilih menu:' },
        nativeFlowMessage: {
          buttons: [
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Ping',
                id: 'ping'
              })
            }
          ]
        }
      }
    }
  }
}, { quoted: m })
```

---

## Credit

Built by **Habibi** — based on [wesker-bot](https://github.com/vandebry10-star/wesker-bot) by febry wesker.
