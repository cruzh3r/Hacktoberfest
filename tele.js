// mulai menjalankan bot
const Telegraf = require('telegraf);
const bot = new Telegraf('BOT_TOKEN_MU); // masukkan token bot mu

var OpenFile = "Alamat_File";
function Buka_File()
{
 var exec = require('child_process').execFile;
 
 console.log("Membuka File");
 exec(OpenFile, function(err, data)
 {
  console.log(err)
  console.log(data)
 });
};

// perintah pesan biasa
bot.hears('PESAN PERINTAH', ctx =>{
	return ctx.reply('BALASAN BOT');
});
bot.hears('PESAN PERINTAH 1', ctx =>{
	return ctx.reply('BALASAN BOT 1');
});
bot.hears('PESAN PERINTAH 2', ctx =>{
	return ctx.reply('BALASAN BOT 2');
});

// perintah untuk membuka file yang berekstensi .EXE
bot.hears('PESAN PERINTAH', ctx =>{
	OpenFile = 'ALAMAT FILE, Contoh C:/User/blabla/bla.exe';
	Buka_File()
	
	return ctx.reply('BALASAN BOT');
});

bot.startPolling();
