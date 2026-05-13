import { prepareWAMessageMedia } from 'baileys'
import { sendNativeFlow } from '../../system/helper/nativeflow.js'
import { habibiCtx } from '../../system/helper/custom-ctx.js'

export default {
name: 'esce',
command: ['sc','esce'],
category: ['info'],

async run({feb, m, chat}) {
const esce = 'https://github.com/HabibiOfficial/habibi-bot'

const media = await prepareWAMessageMedia(
    { image: { url: 'https://api.habibimarket.dpdns.org/img/menu.jpg' } },
    {upload: feb.waUploadToServer}
)

const msg = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: habibiCtx(m),
            header: {
              title: "habibi-bot",
              hasMediaAttachment: true,
                ...media
            },
            body: {
              text: `bot ini menggunakan source code yang bisa kamu temukan di github. klik tombol dibawah untuk melihatnya`
            },
            footer: {
              text: `HabibiOfficial/habibi-bot`
            },
            nativeFlowMessage: {
              buttons: [
      {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
          display_text: "copy link repo",
          copy_code: "https://github.com/HabibiOfficial/habibi-bot"
        })
      },
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "buka link repo",
          url: "https://github.com/HabibiOfficial/habibi-bot"
        })
      }
],
              messageParamsJson: JSON.stringify({ v: "1" })
            }
          }
        }
      }
    }

    await sendNativeFlow(feb, chat, msg)
  }
}
