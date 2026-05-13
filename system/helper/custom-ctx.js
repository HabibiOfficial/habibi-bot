export const habibiCtx = (m) => {
    const q = m.quoted ? m.quoted : m
    return {
        stanzaId: q.id,
        participant: q.sender,
        quotedMessage: q.raw?.message || q.message,
        remoteJid: m.chat
    }
}
