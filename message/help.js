const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} kak *${pushname !== undefined ? pushname : 'No Detect Name'}* 👋

Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

❋─────────────────❋
Nama : ${pushname !== undefined ? pushname : 'No Detect'}
Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
Limit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
Limit Game : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
Balance : $${toCommas(getBalance(sender, balance))}
❋─────────────────❋

_Ada Bug? Ketik ${prefix}report Bug mu_
${readmore}
*( 📍 )  Generator Menu*
≻ ${prefix}menu
≻ ${prefix}owner
≻ ${prefix}donasi
≻ ${prefix}speed
≻ ${prefix}runtime
≻ ${prefix}cekprem
≻ ${prefix}listprem
≻ ${prefix}listban
≻ ${prefix}listrespon
≻ ${prefix}ro <Text>
≻ ${prefix}delete
≻ ${prefix}repeat
≻ ${prefix}readmore <Text>|<Text>
≻ ${prefix}getpp
≻ ${prefix}kontak
≻ ${prefix}hitungmundur
≻ ${prefix}tagme
≻ ${prefix}towame
≻ ${prefix}tovn
≻ fetch

*( 💁 )  Absen*
≻ ${prefix}mulaiabsen <Alasan>
≻ ${prefix}absen
≻ ${prefix}cekabsen
≻ ${prefix}hapusabsen

*( 📰 )  Berita*
≻ ${prefix}tribunnews
≻ ${prefix}infogempa

*( ⌛ )  Downloader*
≻ ${prefix}play <Querry>
≻ ${prefix}youtube <LinkYt>
≻ ${prefix}tiktok <LinkTt>
≻ ${prefix}tiktokaudio <LinkTt>
≻ ${prefix}ytmp4 <LinkYt>
≻ ${prefix}ytmp3 <LinkYt>
≻ ${prefix}ytmp3vn <LinkYt>
≻ ${prefix}getvideo
≻ ${prefix}getmusic
≻ ${prefix}igdl <LinkIg>
≻ ${prefix}igmp3 <LinkVidMp3>
≻ ${prefix}facebook <LinkFb>
≻ ${prefix}mediafire <LinkMediaFire>
≻ ${prefix}gitclone <LinkGithub>
  
*( ♻️ )  Random Menu*
≻ ${prefix}quotes
≻ ${prefix}gombalan
≻ ${prefix}katagalau
≻ ${prefix}cecan
≻ ${prefix}cogan
≻ ${prefix}naruto
≻ ${prefix}loli
≻ ${prefix}waifu
≻ ${prefix}husbu
≻ ${prefix}yaoi
  
*( ⚠️ )  Premium User*
≻ ${prefix}asupan
≻ ${prefix}xnxx link
≻ ${prefix}ahegao
≻ ${prefix}bloewjob
≻ ${prefix}hentai
≻ ${prefix}masturbation
≻ ${prefix}pussy

*( 💾 )  Storage Menu [Premium]*
≻ ${prefix}addimage <Text>
≻ ${prefix}getimage <List Image>
≻ ${prefix}listimage
≻ ${prefix}delimage <List Image>

*( 🎨 )  Menu Maker*
≻ ${prefix}stiker <ReplyGambar/Caption>
≻ ${prefix}toimg <ReplyStiker>
≻ ${prefix}tovid/togif <ReplyStiker>
≻ ${prefix}emojimix
≻ ${prefix}realistic <Text1|Text2>
≻ ${prefix}neondevil <Text>
≻ ${prefix}glitch <Text>
≻ ${prefix}skyshadow <Text>
≻ ${prefix}blackpink <Text>
≻ ${prefix}ttp <Text>
≻ ${prefix}memegen <Text1>|<Text2>
≻ ${prefix}bajingan <Text>
≻ ${prefix}stickerkiss
≻ ${prefix}stickerhug
≻ ${prefix}stickercry
  
*( 🪀 )  Menu Lain Nya*
≻ ${prefix}google <Querry>
≻ ${prefix}brainly <Querry>
≻ ${prefix}upload <ReplyGambar/Caption
≻ ${prefix}translate <lang> <teks> 
≻ ${prefix}shortlink <Link>
≻ ${prefix}kbbi <Kata>
≻ ${prefix}faktaunik
≻ ${prefix}ppcp
≻ ${prefix}darkjokes
≻ ${prefix}meme
≻ ${prefix}covid19
≻ ${prefix}calc
≻ ${prefix}kalkulator
≻ ${prefix}cerpen
≻ ${prefix}cersex
≻ ${prefix}wiki <Query>
≻ ${prefix}say <Text>
≻ ${prefix}qr <Text>
≻ ${prefix}lirik <Judul>
≻ ${prefix}grupwa <Pencarian>	
≻ ${prefix}ytsearch <Pencarian>
≻ ${prefix}pinterest <Querry>
> ${prefix}tourl
≻ ${prefix}tinyurl
  
*( 🅰️ )  Edit Vokal*
≻ ${prefix}halah
≻ ${prefix}hilih
≻ ${prefix}heleh
≻ ${prefix}huluh
≻ ${prefix}holoh
  
*( 🎮 )  Game & Fun Menu*
≻ ${prefix}duithoki
≻ ${prefix}tictactoe @tag
≻ ${prefix}delttc
≻ ${prefix}suit
≻ ${prefix}slot
≻ ${prefix}tebakgambar
≻ ${prefix}susunkata
≻ ${prefix}kuis
≻ ${prefix}tebakkimia
≻ ${prefix}tekateki
≻ ${prefix}tebakanime
≻ ${prefix}tebakgame
≻ ${prefix}tebakkata
≻ ${prefix}tebakbendera
≻ ${prefix}tebaklagu
≻ ${prefix}tebaklirik
≻ ${prefix}siapakahaku
≻ ${prefix}ujian
≻ ${prefix}apakah <Query>
≻ ${prefix}kapankah <Query>
≻ ${prefix}rate <Query>
≻ ${prefix}gantecek <Nama>
≻ ${prefix}cantikcek <Nama>
≻ ${prefix}sangecek <Nama>
≻ ${prefix}gaycek <Nama>
≻ ${prefix}lesbicek <Nama>
≻ ${prefix}gimana <Query>
≻ ${prefix}bisakah <Query>
≻ ${prefix}cekme
≻ ${prefix}dadu
≻ ${prefix}truth
≻ ${prefix}dare
≻ ${prefix}mancing
  
*( 🏦 )  Payment & Bank*
≻ ${prefix}buylimit <Jumlah>
≻ ${prefix}buyglimit <Jumlah>
≻ ${prefix}transfer @tag <jumlah>
≻ ${prefix}limit
≻ ${prefix}balance
≻ ${prefix}topbalance

*( 👥 )  Group Menu*
≻ ${prefix}linkgrup
≻ ${prefix}setppgrup
≻ ${prefix}setnamegc
≻ ${prefix}setdesc
≻ ${prefix}group <Open/Close>
≻ ${prefix}revoke
≻ ${prefix}hidetag <Text>
≻ ${prefix}tagall <Text>
≻ ${prefix}kick <@tag>
≻ ${prefix}add <@tag>
≻ ${prefix}promote <@tag>
≻ ${prefix}demote <@tag>
≻ ${prefix}listadmin <Pesan>
≻ ${prefix}infogc
≻ ${prefix}antilink enable/disable
≻ ${prefix}mute
≻ Unmute
  
*( 🔧 )  Encrypt & Decrypt*
≻ ${prefix}encode <Text>
≻ ${prefix}decode <Text>
  
*( 🧑🏻‍💻 )  Owner Menu*
> evalcode
x evalcode-2
$ executor
≻ ${prefix}sendvirtex
≻ ${prefix}dashboard
≻ ${prefix}setppbot
≻ ${prefix}exif
≻ ${prefix}textchat
≻ ${prefix}setmenu [ 3 Buttons ]
≻ ${prefix}leave
≻ ${prefix}addprem
≻ ${prefix}delprem
≻ ${prefix}addrespon
≻ ${prefix}delrespon
≻ ${prefix}broadcast
≻ ${prefix}masuk
≻ ${prefix}ban
≻ ${prefix}unban
≻ ${prefix}self
≻ ${prefix}public
≻ ${prefix}block
≻ ${prefix}unblock
≻ ${prefix}getmenu <text|image|buttons5|button>
≻ ${prefix}setprefix <multi/nopref>
≻ ${prefix}setowner <628XXX>

*${setting.botName}*
${readmore}
  *THANKS TO*
- Allah SWT
- Baileys-Md (Adiwa Jshing)
- @irfann._x (Iyan)
- @arsrfii (Arasya)
- Febri
- @callme_kiro (Kiro)
- M Hadi Firmansya (Hadi Api)
- @melcanz_ (Amel)
- @hardianto.xyz (Anto)`
}