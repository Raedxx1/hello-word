import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*☢︎︎☠︎︎📆تاريخ:* ${date}
*☢︎︎☠︎︎🕛وقت نشط:* ${uptime}
*☢︎︎☠︎︎⚡مستخدمين:* ${rtotalreg}
*☢︎︎☠︎︎🎖️ مستوى* ${level}
*☢︎︎☠︎︎🧰 خبرة ${exp}*
*☢︎︎☠︎︎⚓ الدور ${role}*

*✍︎☢︎︎💎الماس:* ${limit}
*✍︎☢︎︎👾عملات:* ${money}
*✍︎☢︎︎🪙الرموز:* ${joincount}
*✍︎☢︎︎🎟️مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}


*✍︎☢︎︎ اسـم الـبوت : HEغAN-𓅇*
*✍︎☢︎︎ حط قبل كل امر*  (.)
*✍︎☢︎︎ اســم الـمطور  MMOYSER*
*✍︎☢︎︎ الـمنـصه  REPLIT*
*✍︎☢︎︎ ⁩ استمتع ياخال*  ${taguser}

🛰️⌜ قـسـم الـذكـاء الاصـطـيـنـعـي \n⦓           ⦓🏆⦔          ⦔ـ\n🌏❯ ⏐ .بـوت\n☫ ⌟للرد علي الاسئلة⌜\n🌏❯ ⏐ .تـحـدث\n☫ ⌟للرد علي الاسئله بمقطع صوتى⌜\n🌏❯ ⏐ .سـيـري\n☫ ⌟لتعليم اللغه الانجليزيه⌜\n🌏❯ ⏐ .ارسـم \n☫ ⌟لرسم صوره بالذكاء الاصطناعي⌜\n🌏❯ ⏐ .سمسم \n☫ ⌟شات عربي اصيل 🗿⌜\n🌏❯ ⏐ .احسب \n☫ ⌟للحل المعدلات الصعبه⌜ \n⦓           ⦓🏆⦔          ⦔ـ\n⌟🎡⌜ قـسـم الاعـضـاء\n⦓           ⦓🏆⦔          ⦔ـ\n🍓❯ ⏐ .الـبـنـك \n☫ ⌟لعرض قائمة البنك⌜\n🍓❯ ⏐ .الـمـتـجـر \n☫ ⌟لعرض قائمة اصور المتجر⌜\n🍓❯ ⏐ .الـوجـوهـات \n☫ ⌟لعرض قائمة الوجوهات⌜ \n🍓❯ ⏐ .لـوجـو-حـب\n☫ ⌟لعرض قائمه الاصوات⌜ \n🍓❯ ⏐ .كـومـنـت \n☫ ⌟يعملك كومنت مشهور⌜ \n🍓❯ ⏐ .الـدعـم \n☫ ⌟يبعتلك الفروع الأساسيه⌜\n🍓❯ ⏐ .الـمـطـور \n☫ ⌟يبعتلك رقم صاحب البوت⌜\n🍓❯ ⏐ .بـروفـايـل \n☫ ⌟يبعتلك قائمة بروفايلك⌜\n🍓❯ ⏐ .مـيـمـز \n☫ ⌟يبعتلك ميمز عن الانمي⌜\n🍓❯ ⏐ .تـطـقـيـم \n☫ ⌟يبعتلك صور بنت و ولد⌜\n🍓❯ ⏐ .جـوده  \n☫ ⌟لتحسين جودة الصوره⌜\n🍓❯ ⏐ .الـطـقـس  \n☫ ⌟يجبلك طقس البلاد⌜\n🍓❯ ⏐ .بـاركـود  \n☫ ⌟يعملك النص qr code⌜\n🍓❯ ⏐ .زخـرفـه \n☫ ⌟يزخرف الكلام بالانجليزي⌜\n🍓❯ ⏐ .حـكـمـه \n☫ ⌟البوت يعطيك حـكـمـه⌜\n🍓❯ ⏐ .نـصـيـحـه \n☫ ⌟يزخرف الكلام بالانجليزي⌜\n🍓❯ ⏐ .تـصـليـح \n☫ ⌟ليظهرلك رسائل البوت⌜\n🍓❯ ⏐ .تـنـضـيف \n☫ ⌟لتنضيف اوامر البوت⌜\n🍓❯ ⏐ .مـعـلـومـات \n☫ ⌟يبعتلك كل معلومات البوت⌜\n🍓❯ ⏐ .الـحـالـه \n☫ ⌟يبعتلك وقت تشغيل البوت⌜\n🍓❯ ⏐ .انـضـم \n☫ ⌟ليتم انضمام البوت لي جروبك⌜\n🍓❯ ⏐ .الـسـرعـه \n☫ ⌟يبعتلك سرعة البوت⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🍀⌜ قـسـم الـجـروب\n⦓           ⦓🏆⦔          ⦔ـ\n💌❯ ⏐ .انـذار\n☫ ⌟بيعطي للعضو انذار⌜\n💌❯ ⏐ .حـذف-الانـذار\n☫ ⌟بيحذف الانذار⌜\n💌❯ ⏐ .الانـذارات\n☫ ⌟يبعت قائمه انذاراتك⌜\n💌❯ ⏐ .جـروب غلق\n☫ ⌟يقفل شات الجروب⌜\n💌❯ ⏐ جـروب فتح\n☫ ⌟يفتح شات الجروب⌜\n💌❯ ⏐ .اعـدادات قفل 1\n☫ ⌟يقفل الشات بوقت⌜\n💌❯ ⏐ .اعـدادات فتح 1\n☫ ⌟يفتح الشات بي وقت⌜\n💌❯ ⏐ .تـغيـرالاسم\n☫ ⌟بيغير اسم الجروب⌜\n💌❯ ⏐ .تـغيـرالصوره\n☫ ⌟بيغير صوره الجروب ⌜\n💌❯ ⏐ .تـغيـرالوصف\n☫ ⌟بيغير وصف الجروب⌜\n💌❯ ⏐ .تـغيـرالترحيب\n☫ ⌟بيغير ترحيب البوت⌜\n💌❯ ⏐ .تـغيـرالوداع\n☫ ⌟بيغير وادع البوت⌜\n💌❯ ⏐ .قـائـمـه-الارقـام\n☫ ⌟بيجبلك قائمة الارقام برمز الدوله⌜\n💌❯ ⏐ .مـخـفـي\n☫ ⌟بيعمل منشن وهمي ⌜\n💌❯ ⏐ .تـرقـيـه\n☫ ⌟بيرفع عضو ادمن⌜\n💌❯ ⏐ .خـفـض\n☫ ⌟بيتزل ادمن عضو⌜\n💌❯ ⏐ .لـيـنـك\n☫ ⌟بيبعت لينك الجروب⌜\n💌❯ ⏐ .مـنـشـن\n☫ ⌟يعمل منشن جماعي⌜\n💌❯ ⏐ .الادمـن☫ ⌟يعمل منشن للادمن⌜\n💌❯ ⏐ .رسـتـر\n☫ ⌟يرستر رابط الجروب⌜\n💌❯ ⏐ .الاشـبـاح\n☫ ⌟يمنشن الناس الي مش بتتفاعل⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🌐⌜ قـسـم الـبـحـث\n⦓           ⦓🏆⦔          ⦔ـ\n🧸❯ ⏐ .جـوجـل\n☫ ⌟يبحث في جوجل مع صوره⌜\n🧸❯ ⏐ .لـيـنـكـات\n☫ ⌟يبحثلك بي استخدام الرابط⌜\n🧸❯ ⏐ .بـحـث\n☫ ⌟يبحث في اليوتيوب⌜\n🧸❯ ⏐ .جـيـتـهاب\n☫ ⌟يبحث في جيت هاب⌜\n🧸❯ ⏐ .اغـانـي \n☫ ⌟بحث عن كلام الاغاني⌜\n🧸❯ ⏐.انـمـي\n☫ ⌟بحث عن الانمي بالانجليزي⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🎗️⌜ قـسـم الـتـنـزيـلات \n⦓           ⦓🏆⦔          ⦔ـ\n♻️❯ ⏐ .يوتيوب\n☫ ⌟تنزيل فيديو باستخدام رابط⌜\n♻️❯ ⏐ .يوتيوب2\n☫ ⌟تنزيل اغنيه باستخدام رابط⌜\n♻️❯ ⏐.تطبيق\n☫ ⌟لتنزيل التطبيقات من متجر ب⌜\n♻️❯ ⏐ .ميديافاير\n☫ ⌟لتنزيل الملفات من ميديافاير⌜\n♻️❯ ⏐ .فيسبوك\n☫ ⌟تنزيل فيديوهات من الفيسبوك⌜\n♻️❯ ⏐ .انستا\n☫ ⌟تنزيل فيديوهات من الانستجرام⌜\n♻️❯ ⏐ .تيك\n☫ ⌟تنزيل فيديوهات من التيك توك⌜\n♻️❯ ⏐ .صور-تيك\n☫ ⌟تنزيل صور من التيك توك⌜\n♻️❯ ⏐ .صوره\n☫ ⌟تنزيل صور من جوجل⌜\n♻️❯ ⏐ .صوره2\n☫ ⌟لتنزيل صور من فريبيك⌜\n♻️❯ ⏐ .بين\n☫ ⌟لتنزيل صور من بينترست⌜\n♻️❯ ⏐ .استيكر-تنزيل\n☫ ⌟لتنزيل استيكرات بالينك⌜\n♻️❯ ⏐ .اغنيه\n☫ ⌟تنزيل اغاني من اليوتيوب⌜\n♻️❯ ⏐ .فيديو\n☫ ⌟تنزيل فيديوهات من اليوتيوب⌜\n♻️❯ ⏐ .شغل\n☫ ⌟تنزيل اغاني من اليوتيوب⌜\n♻️❯ ⏐ .فيديو2\n☫ ⌟تنزيل فيديوهات من اليوتيوب⌜\n♻️❯ ⏐ .شغل2\n☫ ⌟تنزيل اغاني من اليوتيوب⌜\n♻️❯ ⏐ .فيديو3\n☫ ⌟تنزيل فيديوهات من اليوتيوب⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🍄⌜ قـسـم الـتـحـويـلات \n⦓           ⦓🏆⦔          ⦔ـ\n📍❯ ⏐ .لانـمـي\n☫ ⌟لتحويل الصوره لانمي⌜\n📍❯ ⏐ .جـيـف\n☫ ⌟لتحويل الفيديو لgif⌜\n📍❯ ⏐ .لـصـوره\n☫ ⌟لتحويل الملصق لصوره⌜\n📍❯ ⏐ .لـصـوت\n☫ ⌟لتحويل الفيديو لصوت⌜\n📍❯ ⏐ .لـريـك\n☫ ⌟لتحويل الفيديو لريكورد⌜\n📍❯ ⏐ .لـفـيـديـو\n☫ ⌟لتحويل الملصق لفيديو⌜\n📍❯ ⏐ .تـلـيـجـراف\n☫ ⌟لتحويل الاشياء الي تليجراف⌜\n📍❯ ⏐ .انـطـق\n☫ ⌟لتحويل النص الي صوت⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🎯⌜ قـسـم الالـعـاب \n⦓           ⦓🏆⦔          ⦔ـ\n🕹️❯ ⏐ .العب\n☫ ⌟تلعب حجر ورقه مع البوت⌜\n🕹️❯ ⏐ .عين\n☫ ⌟احزر الشخصية من العين⌜\n🕹️❯ ⏐ .علم\n☫ ⌟احزر الدوله من العلم⌜\n🕹️❯ ⏐ .احزر\n☫ ⌟احزر الشخصية من الصوره⌜\n🕹️❯ ⏐ .ايمواجي \n☫ ⌟يبعتلك ايمواجي عشوائي⌜\n🕹️❯ ⏐ .تحدي\n☫ ⌟حجر ورقه مقص مع صاحبك⌜\n🕹️❯ ⏐ .حظ\n☫ ⌟لعبة الحظ مع البوت⌜\n🕹️❯ ⏐ .اكس\n☫ ⌟لعبة اكس او مع صديقك⌜\n🕹️❯ ⏐ .سؤال\n☫ ⌟سؤال من عالم انمي⌜\n🕹️❯ ⏐ .توب\n☫ ⌟يعمل منشن ل 10 أعضاء⌜\n🕹️❯ ⏐ .زواج\n☫ ⌟يجوز اتنين في الجروب 🤣⌜\n🕹️❯ ⏐ .هل \n☫ ⌟تسال البوت و هوا يجاوب⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🔊⌜ قـسـم الاصـوات \n⦓           ⦓🏆⦔          ⦔ـ\n🎙️❯ ⏐ .عـمـيـق \n☫ ⌟يخلي الريك عميق ⌜\n🎙️❯ ⏐ .مـنـفـوخ \n☫ ⌟يخلي الصوت منفوخ ⌜\n🎙️❯ ⏐ .تخين \n☫ ⌟يخلي الصوت تخين ⌜\n🎙️❯ ⏐ .صـاخـب \n☫ ⌟يخلي الصوت صاحب ⌜\n🎙️❯ ⏐ .تخينن\n☫ ⌟يخلي الصوت تخين جداً⌜\n🎙️❯ ⏐ .سـريـع \n☫ ⌟يخلي الصوت سريع ⌜\n🎙️❯ ⏐ .رفـيـع \n☫ ⌟يخلي الصوت رفيع ⌜\n🎙️❯ ⏐ .روبـوت \n☫ ⌟يخلي الصوت روبوت ⌜\n🎙️❯ ⏐ .نـاعـم \n☫ ⌟يخلي الصوت ناعم ⌜\n🎙️❯ ⏐ .سـنـجـاب \n☫ ⌟يخلي الصوت مسنجب ⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🖼️⌜ قـسـم الـصـور \n⦓           ⦓🏆⦔          ⦔ـ\n🌱❯ ⏐ .كـانـيـكـي \n☫ ⌟يبعت صور كانيكي⌜\n🌱❯ ⏐ . مـادارا \n☫ ⌟يبعت صور مادارا⌜\n🌱❯ ⏐ .مـيـنـاتـو \n☫ ⌟يبعت صور ميناتو⌜\n🌱❯ ⏐ .مـيـكاسـا \n☫ ⌟يبعت صور ميكاسا⌜\n🌱❯ ⏐ . كيوت\n☫ ⌟يبعت صور كيوت⌜\n🌱❯ ⏐ .قـط \n☫ ⌟يبعت صور قطط⌜\n🌱❯ ⏐ .كـلـب\n☫ ⌟يبعت صور كلاب⌜\n🌱❯ ⏐ .جيمينج \n☫ ⌟يبعت صور جيمينج⌜\n🌱❯ ⏐ .رونـالـدو \n☫ ⌟يبعت صور رونالدو⌜\n🌱❯ ⏐ .مـيـسـي \n☫ ⌟يبعت صور ميسي⌜\n🌱❯ ⏐ .تكنولوجيا \n☫ ⌟يبعت صور تكنولوجيا⌜\n🌱❯ ⏐ .عـشـوائـي \n☫ ⌟يبعت صور عشوائيه⌜\n🌱❯ ⏐ .عـيـد \n☫ ⌟يبعت صور عيد صاحبي🗿⌜\n🌱❯ ⏐ .جـبـل \n☫ ⌟يبعت صور جبال⌜\n🌱❯ ⏐ .بـبـجـي \n☫ ⌟يبعت صور ببجي⌜\n🌱❯ ⏐ .بلاك-بينك \n☫ ⌟يبعت صور بلاك بينك⌜\n🌱❯ ⏐ .درايمون \n☫ ⌟يبعت صور معرفش⌜\n🌱❯ ⏐ .هـكـر \n☫ ⌟يبعت صوري عشان انا هكر🗿⌜\n🌱❯ ⏐ .كـوكـب \n☫ ⌟يبعت صور كواكب⌜\n🌱❯ ⏐ . كـرتـون \n☫ ⌟يبعت صور كرتون⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🖼️⌜ قـسـم الاستيكرات\n⦓           ⦓🏆⦔          ⦔ـ\n🧨❯ ⏐ .اسـتـيـكر\n☫ ⌟لتحول الصوره لملصق كامل⌜\n🧨❯ ⏐ .مـلـصـق\n☫ ⌟لتحويل الفيديو لملصق متحرك⌜\n🧨❯ ⏐.دائري\n☫ ⌟لعمل استيكرات بشكل دائري⌜\n🧨❯ ⏐ .سـرقـه\n☫ ⌟يغير حقوق الملصقات⌜\n🧨❯ ⏐ .فـلـتـر\n☫ ⌟يعمل فلتر للملصقات⌜\n🧨❯ ⏐ .تـاثـيـر\n☫ ⌟يعمل فلتر للملصقات⌜\n🧨❯ ⏐ .صـفـع\n☫ ⌟لصفع الناس الرخمه 🗿⌜\n🧨❯ ⏐ .طـبـطـبـه\n☫ ⌟لطبطبه علي الناس الكيوت👾⌜\n🧨❯ ⏐ .اسـتـيك\n☫ ⌟يحول النص لملصق ⌜\n🧨❯ ⏐ .ستاكت\n☫ ⌟يحول النص لملصق⌜\n🧨❯ ⏐ .دمـج 🐦‍⬛+🗿\n☫ ⌟يدمج اتنين من الايمواجي⌜\n🧨❯ ⏐ .نــرد\n☫ ⌟جرب حظك كده 😀⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🖼️⌜ قـسـم الـمـطـور\n⦓           ⦓🏆⦔          ⦔ـ\n👑❯ ⏐ .حظر\n☫ ⌟يعمل حظر شات⌜\n👑❯ ⏐ .فك-الحظر\n☫ ⌟يفك حظر الشات⌜\n👑❯ ⏐ .المحظورين\n☫ ⌟يبعتلك الناس المحظوره⌜\n👑❯ ⏐.بلوك\n☫ ⌟يعمل بلوك سريع⌜\n👑❯ ⏐ .فك-البلوك\n☫ ⌟يفك البلوك⌜\n👑❯ ⏐ .البلوكات\n☫ ⌟يبعتلك قائمة البلوكات⌜\n👑❯ ⏐ .بريم\n☫ ⌟يخلي مميز في البوت⌜\n👑❯ ⏐ .الغاء-البريم\n☫ ⌟يشيل البريم⌜\n👑❯ ⏐ .بان\n☫ ⌟ينعهم من استخدام البوت⌜\n👑❯ ⏐ .فك-البان\n☫ ⌟يفك البان من البوت⌜\n👑❯ ⏐.ريستارت\n☫ ⌟يقفل البوت من ريبلايت⌜\n👑❯ ⏐ .ضع-صوره\n☫ ⌟يخلي البوت يحط صوره⌜t\n👑❯ ⏐ .ضيف-عملات\n☫ ⌟يضيف للمستخدمين عملات⌜\n👑❯ ⏐ .ضيف-طاقه\n☫ ⌟يضيف للمستخدمين طاقه⌜\n👑❯ ⏐ .موارد\n☫ ⌟يعطي موارد غير محدوده⌜\n👑❯ ⏐ .اخرج\n☫ ⌟يطلع البوت من الجروب⌜\n👑❯ ⏐ .اذاعه\n☫ ⌟يبعت رساله لجميع الجروبات⌜\n👑❯ ⏐ فتح | قفل صوت_بوت\n☫ ⌟يقفل و يفتح صوت البوت⌜\n👑❯ ⏐ .فتح | قفل مضادالاسبام\n☫ ⌟يقفل و يفتح الاسبام⌜\n👑❯ ⏐ .فتح | قفل بوت-اللفرعي\n☫ ⌟يقفل و يفتح البوتات الفرعي⌜\n👑❯ ⏐ .فتح | قفل مضادالخاص\n☫ ⌟يقفل و يفتح خاص البوت⌜\n👑❯ ⏐ .فتح | قفل مضادالاتصالات\n☫ ⌟يقفل و يفتح الاتصالات ب البوت⌜\n👑❯ ⏐ .فتح | قفل جروبات\n☫ ⌟يقفل و يفتح الجروبات فقط⌜\n👑❯ ⏐ .فتح | قفل برايفت\n☫ ⌟يقفل و يفتح البرايفت⌜\n👑❯ ⏐ .فتح | قفل الصحين\n☫ ⌟يقفل و يفتح أمر الصحين⌜👑❯ ⏐فتح | قفل تقيد☫ ⌟يقفل و يفتح تقيد البوت
`.trim()
  const _0x3c7cab=_0x5a1d;function _0x5a1d(_0x1b92fa,_0x42ca62){const _0x5a1d39=_0x42ca();_0x5a1d=function(_0x28d0f5,_0x342e36){_0x28d0f5=_0x28d0f5-0x0;let _0x4abc25=_0x5a1d39[_0x28d0f5];return _0x4abc25;};return _0x5a1d(_0x1b92fa,_0x42ca62);}function _0x42ca(){const _0xe1e20e=['\x32\x34\x30\x39\x31\x34\x37\x63\x4d\x54\x74\x76\x56','\x37\x30\x53\x78\x4b\x53\x77\x59','\x74\x72\x69\x6d','\x32\x37\x30\x38\x30\x32\x37\x74\x4f\x6e\x45\x55\x53','\x38\x33\x31\x38\x35\x33\x47\x51\x41\x6a\x79\x75','\x36\x5a\x72\x55\x6a\x56\x46','\ud835\udde9\ud835\uddd8\ud835\udde1\ud835\udde2\ud835\udde0\x20\ud835\udde0\ud835\uddd7\x20\ud83d\udc8c','\x34\x30\x36\x30\x37\x30\x4d\x4c\x59\x61\x65\x42','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x68\x61\x74\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x63\x6f\x6d\x2f\x4a\x58\x5a\x43\x32\x54\x57\x43\x63\x35\x72\x49\x68\x53\x4b\x50\x37\x57\x50\x61\x42\x7a','\x34\x59\x62\x47\x4d\x6b\x5a','\x38\x34\x30\x34\x39\x36\x49\x50\x4a\x65\x58\x50','\x33\x32\x32\x38\x33\x35\x61\x50\x61\x52\x47\x63','\x56\x49\x44\x45\x4f','\x33\x36\x33\x39\x34\x31\x30\x63\x4c\x53\x66\x50\x76','\x73\x65\x6e\x64\x65\x72','\x39\x4c\x74\x55\x79\x43\x46'];_0x42ca=function(){return _0xe1e20e;};return _0x42ca();}(function(_0x2979d9,_0x233f8f){const _0x32315e=_0x5a1d;const _0x3b1890=_0x2979d9();while(!![]){try{const _0x2cc4d6=parseInt(_0x32315e(0x5))/0x1+parseInt(_0x32315e(0x1))/0x2+-parseInt(_0x32315e(0xa))/0x3*(parseInt(_0x32315e(0x3))/0x4)+parseInt(_0x32315e(0x7))/0x5+-parseInt(_0x32315e(0xf))/0x6*(parseInt(_0x32315e(0xd))/0x7)+parseInt(_0x32315e(0x4))/0x8*(-parseInt(_0x32315e(0x9))/0x9)+-parseInt(_0x32315e(0xb))/0xa*(-parseInt(_0x32315e(0xe))/0xb);if(_0x2cc4d6===_0x233f8f){break;}else{_0x3b1890['push'](_0x3b1890['shift']());}}catch(_0x3284ad){_0x3b1890['push'](_0x3b1890['shift']());}}}(_0x42ca,0x772cd));let buttonMessage={'\x69\x6d\x61\x67\x65':pp,'\x63\x61\x70\x74\x69\x6f\x6e':str[_0x3c7cab(0xc)](),'\x6d\x65\x6e\x74\x69\x6f\x6e\x73':[m[_0x3c7cab(0x8)]],'\x66\x6f\x6f\x74\x65\x72':''+wm,'\x68\x65\x61\x64\x65\x72\x54\x79\x70\x65':0x4,'\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f':{'\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64':[m['\x73\x65\x6e\x64\x65\x72']],'\x65\x78\x74\x65\x72\x6e\x61\x6c\x41\x64\x52\x65\x70\x6c\x79':{'\x73\x68\x6f\x77\x41\x64\x41\x74\x74\x72\x69\x62\x75\x74\x69\x6f\x6e':!![],'\x6d\x65\x64\x69\x61\x54\x79\x70\x65':_0x3c7cab(0x6),'\x6d\x65\x64\x69\x61\x55\x72\x6c':null,'\x74\x69\x74\x6c\x65':_0x3c7cab(0x0),'\x62\x6f\x64\x79':null,'\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c':img,'\x73\x6f\x75\x72\x63\x65\x55\x72\x6c':_0x3c7cab(0x2)}}};
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗في حاجة غلط ياحلة❗]', m)
}}
handler.command = /^(help|الاوامر|menu|أوامر|m|اوامر)$/i
handler.exp = 20
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
