/*let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://raw.githubusercontent.com/VarrelKun/database/main/nsfw/gangbang.json'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(gangbang)$/i
handler.tags = ['nsfw']
handler.help = ['gangbang']
handler.premium = true
export default handler

