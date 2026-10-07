/* Kursinhalte: Thai in 16 Wochen (A0–A1) */
"use strict";
window.COURSE = {
phases: [
 {title:"Fundament", sub:"A0, Wochen 1–4: Töne, Schrift und die ersten Satzbausteine", weeks:[1,2,3,4]},
 {title:"Grundlagen", sub:"A1, Wochen 5–10: Zahlen, Zählwörter, Bitten und Zeit", weeks:[5,6,7,8,9,10]},
 {title:"Ausbau", sub:"A1, Wochen 11–16: Orte, Abläufe, Gefühle und Erzählen", weeks:[11,12,13,14,15,16]}
],
weeks: [
{n:1, lvl:"A0", key:["สวัสดีครับ","sà-wàt-dii khráp","„Hallo!“ (ein Mann spricht)"],
 title:"Klang & Höflichkeit",
 sub:"Fünf Töne, kurze und lange Vokale und die wichtigsten Höflichkeitsformeln.",
 goals:["die fünf Töne hören und nachsprechen","kurze und lange Vokale unterscheiden","höflich grüßen, danken und dich entschuldigen"],
 lessons:[
  {k:"laute", t:"Die fünf Töne", b:[
   ["p","Thai ist eine Tonsprache: Die Tonhöhe einer Silbe gehört zum Wort wie seine Buchstaben. Dieselbe Silbe **khaa** bedeutet je nach Ton fünf verschiedene Dinge."],
   ["tones",[
     ["Mittelton","a","gerade, auf deiner normalen Sprechhöhe","คา","khaa","feststecken"],
     ["Tiefton","à","tief und flach, etwas unter der normalen Höhe","ข่า","khàa","Galgant"],
     ["fallender Ton","â","hoch ansetzen, dann deutlich fallen – wie ein bestimmtes „Doch!“","ค่า","khâa","Preis, Wert"],
     ["hoher Ton","á","hoch und leicht ansteigend, etwas angespannt","ค้า","kháa","Handel treiben"],
     ["steigender Ton","ǎ","tief beginnen und hochziehen – wie ein ungläubiges „Ja?“","ขา","khǎa","Bein"]
   ]],
   ["tip","Warum ist ข่า (khàa) tief und nicht mittel? Der Ton hängt von der Konsonantenklasse ab: ข gehört zur Hochklasse, und das Tonzeichen ไม้เอก (อ่) macht daraus einen Tiefton. Der Mittelton-Partner der Reihe ist คา (khaa) – Tiefklasse ohne Zeichen. Genauso ist ข่าว (khàao, „Nachricht“) tief. Die Klassen lernst du ab Woche 2, alle Tonzeichen-Regeln in Woche 6.","Tonregel"],
   ["p","Die goldene Linie neben jeder Umschrift zeigt den Tonverlauf jeder Silbe: oben hoch, unten tief."],
   ["tip","ม้ามาหาหมา (máa maa hǎa mǎa) – „Das Pferd kommt den Hund besuchen.“ Fast viermal dieselbe Silbe, aber drei verschiedene Töne. Sprich den Satz langsam, Silbe für Silbe.","Übungssatz"],
   ["h","Kurz oder lang?"],
   ["p","Auch die Länge des Vokals unterscheidet Wörter. Lange Vokale schreibt die Umschrift doppelt (aa, ii, uu …)."],
   ["ex",[
     ["เข้า","khâo","hineingehen (kurzes a)"],
     ["ข้าว","khâao","Reis (langes aa)"],
     ["ขาว","khǎao","weiß"],
     ["ข่าว","khàao","Nachricht"]
   ]],
   ["tip","Im Deutschen „singt“ der ganze Satz – bei Fragen geht die Stimme am Ende hoch. Im Thai behält jede Silbe ihren Ton, auch am Satzende. Ob etwas eine Frage ist, zeigt ein Fragewort, nicht die Melodie.","Für Deutschsprachige"]
  ]},
  {k:"gram", t:"Höflichkeit: ครับ, ค่ะ und „ich“", b:[
   ["p","Thai-Verben werden nicht gebeugt. Dafür zeigt man Höflichkeit ständig – mit kleinen Wörtern am Satzende, die sich nach dem Geschlecht der sprechenden Person richten."],
   ["pat","Satz + ครับ (Männer) / ค่ะ (Frauen)"],
   ["voc",[
     ["ครับ","khráp","höfliches Satzende für Männer (Aussage und Frage)"],
     ["ค่ะ","khâ","höfliches Satzende für Frauen in Aussagen"],
     ["คะ","khá","höfliches Satzende für Frauen in Fragen"]
   ]],
   ["ex",[
     ["สวัสดีครับ","sà-wàt-dii khráp","Hallo! (Mann)"],
     ["สวัสดีค่ะ","sà-wàt-dii khâ","Hallo! (Frau)"],
     ["ขอบคุณครับ","khɔ̀ɔp-khun khráp","Danke! (Mann)"]
   ]],
   ["p","Auch „ich“ hängt davon ab, wer spricht:"],
   ["voc",[
     ["ผม","phǒm","ich (Mann)"],
     ["ฉัน","chǎn","ich (meist Frauen)"],
     ["ดิฉัน","dì-chǎn","ich (Frau, sehr höflich)"],
     ["คุณ","khun","du / Sie"],
     ["เขา","khǎo","er / sie"],
     ["เรา","rao","wir"]
   ]],
   ["tip","ครับ bzw. ค่ะ allein heißt auch „ja“, „okay“ oder „ich höre zu“. Thais streuen es ständig ein – lieber einmal zu oft als zu selten."],
   ["p","คุณ steht auch vor Vornamen: คุณแอนนา ist „Frau Anna“. Nachnamen benutzt man im Alltag fast nie."]
  ]},
  {k:"gefuehl", t:"Wörter, die sich nie verändern", b:[
   ["p","Ein Thai-Wort hat immer dieselbe Form. กิน (gin) heißt „essen“ – und genauso esse, isst, aß und gegessen. Es gibt keine Endungen, keine Artikel, keinen Plural und keine Fälle."],
   ["ex",[
     ["ผมกินข้าว","phǒm gin khâao","Ich esse."],
     ["เขากินข้าว","khǎo gin khâao","Er/Sie isst."],
     ["เรากินข้าว","rao gin khâao","Wir essen."]
   ]],
   ["p","Was aus dem Zusammenhang klar ist, lässt Thai einfach weg – vor allem „ich“ und „du“. Das klingt nicht unhöflich, sondern natürlich."],
   ["ex",[
     ["สบายดีไหม","sà-baai dii mǎi","Geht’s (dir) gut?"],
     ["สบายดี","sà-baai dii","(Mir geht’s) gut."]
   ]],
   ["tip","Denk in Bausteinen statt in Formen: Du lernst keine Konjugationstabellen, sondern welche festen Bausteine du in welcher Reihenfolge zusammensetzt.","Sprachgefühl"],
   ["p","กินข้าว heißt wörtlich „Reis essen“, steht aber für jede Mahlzeit – Reis ist im Thai der Inbegriff von Essen."]
  ]},
  {k:"kontext", t:"Begrüßen, danken, entschuldigen", b:[
   ["dlg",[
     ["Tom","สวัสดีครับ","sà-wàt-dii khráp","Hallo!"],
     ["Nit","สวัสดีค่ะ สบายดีไหมคะ","sà-wàt-dii khâ, sà-baai dii mǎi khá","Hallo! Geht’s dir gut?"],
     ["Tom","สบายดีครับ ขอบคุณครับ แล้วคุณล่ะครับ","sà-baai dii khráp, khɔ̀ɔp-khun khráp. lɛ́ɛo khun lâ khráp","Gut, danke. Und dir?"],
     ["Nit","สบายดีค่ะ","sà-baai dii khâ","Mir geht’s gut."]
   ]],
   ["voc",[
     ["สวัสดี","sà-wàt-dii","Hallo, guten Tag, tschüss"],
     ["สบายดี","sà-baai dii","gut gehen, wohlauf sein"],
     ["ขอบคุณ","khɔ̀ɔp-khun","danke"],
     ["ขอโทษ","khɔ̌ɔ-thôot","Entschuldigung"],
     ["ไม่เป็นไร","mâi bpen rai","kein Problem, macht nichts"],
     ["แล้วเจอกัน","lɛ́ɛo jəə gan","bis dann"]
   ]],
   ["ex",[
     ["ขอโทษครับ","khɔ̌ɔ-thôot khráp","Entschuldigung!"],
     ["ไม่เป็นไรค่ะ","mâi bpen rai khâ","Kein Problem."]
   ]],
   ["tip","สวัสดี passt zu jeder Tageszeit und auch zum Abschied. Dazu gehört oft der ไหว้ (wâi): Handflächen vor der Brust zusammenlegen, leicht verbeugen. Der Jüngere grüßt zuerst; auf den Wai von Kindern oder Servicepersonal reicht ein Lächeln.","Kultur"]
  ]}
 ],
 quiz:[
  ["mc","Welcher Ton beginnt tief und steigt dann an?",["Mittelton","fallender Ton","steigender Ton","hoher Ton"],2,"Der steigende Ton (ǎ) klingt wie ein ungläubiges „Ja?“."],
  ["mc","Wie bedankt sich eine Frau höflich?",["ขอบคุณครับ","ขอบคุณค่ะ","ขอบคุณคะ"],1,"Frauen sagen ค่ะ in Aussagen und คะ in Fragen."],
  ["mc","Was bedeutet ข้าว (khâao)?",["weiß","Nachricht","Reis","hineingehen"],2,"ขาว (khǎao) heißt „weiß“, ข่าว (khàao) „Nachricht“, เข้า (khâo) „hineingehen“."],
  ["mc","Wie sagt ein Mann normalerweise „ich“?",["ฉัน","ผม","คุณ","เขา"],1,"ผม (phǒm) ist das Standard-„ich“ für Männer."],
  ["mc","Jemand entschuldigt sich bei dir. Was antwortest du?",["ไม่เป็นไร","สบายดี","แล้วเจอกัน"],0,"ไม่เป็นไร heißt „kein Problem, macht nichts“."],
  ["ord","Ich (Mann) esse.",[["ผม","phǒm"],["กิน","gin"],["ข้าว","khâao"]],"Subjekt – Verb – Objekt, wie im Deutschen."],
  ["mc","Welche Aussage stimmt?",["Thai-Verben haben Endungen für ich, du und er","กิน bleibt immer gleich – egal wer isst und wann","Fragen erkennt man an der steigenden Satzmelodie"],1,"Thai-Wörter verändern ihre Form nie."]
 ]},
{n:2, lvl:"A0", key:["ผมชื่อทอม","phǒm chʉ̂ʉ thɔm","„Ich heiße Tom.“"],
 title:"Wer bist du?",
 sub:"Das Prinzip der Thai-Schrift, „sein“ auf Thai und sich vorstellen.",
 goals:["das Prinzip der Thai-Schrift verstehen und die Mittelklasse lesen","เป็น, คือ und อยู่ richtig einsetzen","dich mit Name, Herkunft und Beruf vorstellen"],
 lessons:[
  {k:"schrift", t:"Schrift 1: Das System und die Mittelklasse", b:[
   ["p","Die Thai-Schrift baut jede Silbe um einen Konsonanten. Vokale stehen davor, dahinter, darüber oder darunter. Geschrieben wird von links nach rechts – ohne Leerzeichen zwischen Wörtern."],
   ["p","Die 44 Konsonanten gehören zu drei Klassen: Mittel-, Hoch- und Tiefklasse. Die Klasse bestimmt später den Ton. Du startest mit der Mittelklasse."],
   ["let",[
     ["ก","ไก่","gài","Huhn","g (unbehaucht)"],
     ["จ","จาน","jaan","Teller","j (wie „dsch“)"],
     ["ด","เด็ก","dèk","Kind","d"],
     ["ต","เต่า","dtào","Schildkröte","dt (unbehauchtes t)"],
     ["บ","ใบไม้","bai-mái","Blatt","b"],
     ["ป","ปลา","bplaa","Fisch","bp (unbehauchtes p)"],
     ["อ","อ่าง","àang","Schüssel","stumm / ɔ"]
   ]],
   ["p","Jeder Konsonant hat ein Merkwort, wie im Buchstabieralphabet: ก heißt „gɔɔ gài“, also „g wie ไก่ (Huhn)“. Die ersten Vokale (อ dient als Platzhalter):"],
   ["tbl",["Zeichen","Laut","Beispiel"],[
     ["อา","aa (lang)","ตา dtaa „Auge“"],
     ["อี","ii (lang)","ดี dii „gut“"],
     ["อู","uu (lang)","ดู duu „schauen“"],
     ["โอ","oo (lang)","โต dtoo „groß“"],
     ["ไอ","ai","ไป bpai „gehen“"],
     ["อำ","am","ดำ dam „schwarz“"]
   ]],
   ["tip","Mittelklasse + Vokal ohne Tonzeichen = Mittelton. Alle Beispielwörter oben sprichst du gerade auf mittlerer Höhe."],
   ["tip","ป, ต und ก sind unbehaucht. Halte die Hand vor den Mund: Beim deutschen „Paul“ spürst du einen Luftstoß, bei ป darf fast nichts kommen. Für deutsche Ohren klingen sie fast wie b, d und g.","Für Deutschsprachige"]
  ]},
  {k:"gram", t:"„Sein“: เป็น, คือ, อยู่ – und Adjektive", b:[
   ["p","Das deutsche „sein“ verteilt sich im Thai auf drei Wörter. Bei Adjektiven fällt es ganz weg."],
   ["pat","A + เป็น + Beruf, Rolle, Nationalität"],
   ["ex",[
     ["ผมเป็นคนเยอรมัน","phǒm bpen khon yəə-rá-man","Ich bin Deutscher."],
     ["ฉันเป็นครู","chǎn bpen khruu","Ich bin Lehrerin."]
   ]],
   ["pat","A + คือ + B (Gleichsetzung, „das ist“)"],
   ["ex",[["นี่คือแม่ผม","nîi khʉʉ mɛ̂ɛ phǒm","Das ist meine Mutter."]]],
   ["pat","A + อยู่ + Ort (sich befinden, wohnen)"],
   ["ex",[["ผมอยู่กรุงเทพฯ","phǒm yùu grung-thêep","Ich wohne in Bangkok."]]],
   ["pat","A + Adjektiv (ohne „sein“!)"],
   ["ex",[
     ["อาหารอร่อย","aa-hǎan à-rɔ̀i","Das Essen ist lecker."],
     ["วันนี้ร้อน","wan-níi rɔ́ɔn","Heute ist es heiß."]
   ]],
   ["tip","✗ อาหารเป็นอร่อย – Adjektive brauchen kein เป็น. Sie bedeuten im Thai schon „lecker sein“.","Typischer Fehler"],
   ["h","Name und Herkunft"],
   ["ex",[
     ["ผมชื่อทอม","phǒm chʉ̂ʉ thɔm","Ich heiße Tom."],
     ["คุณชื่ออะไรครับ","khun chʉ̂ʉ à-rai khráp","Wie heißt du?"],
     ["ฉันมาจากเยอรมนี","chǎn maa jàak yəə-rá-man-nii","Ich komme aus Deutschland."]
   ]]
  ]},
  {k:"gefuehl", t:"Adjektive sind Verben", b:[
   ["p","Thai hat keine eigene Wortart „Adjektiv“ wie das Deutsche. ร้อน heißt eher „heiß sein“. Deshalb steht es direkt hinter dem Thema und wird genauso verneint und erfragt wie ein Verb."],
   ["ex",[
     ["ร้อน","rɔ́ɔn","(Es ist) heiß."],
     ["ไม่ร้อน","mâi rɔ́ɔn","(Es ist) nicht heiß."],
     ["ร้อนไหม","rɔ́ɔn mǎi","Ist es heiß?"]
   ]],
   ["p","Als Beschreibung steht das Adjektiv **hinter** dem Nomen. Thai nennt zuerst den Kern, dann die Details:"],
   ["ex",[
     ["คนดี","khon dii","ein guter Mensch (wörtl. Mensch gut)"],
     ["อาหารไทย","aa-hǎan thai","thailändisches Essen"],
     ["บ้านใหญ่","bâan yài","ein großes Haus"]
   ]],
   ["tip","บ้านใหญ่ kann „ein großes Haus“ oder „Das Haus ist groß.“ heißen. Der Zusammenhang entscheidet – Thai verlässt sich viel stärker auf den Kontext als Deutsch.","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Sich vorstellen", b:[
   ["dlg",[
     ["Tom","สวัสดีครับ ผมชื่อทอม คุณชื่ออะไรครับ","sà-wàt-dii khráp. phǒm chʉ̂ʉ thɔm. khun chʉ̂ʉ à-rai khráp","Hallo, ich heiße Tom. Wie heißt du?"],
     ["Nit","ฉันชื่อนิดค่ะ คุณมาจากไหนคะ","chǎn chʉ̂ʉ nít khâ. khun maa jàak nǎi khá","Ich heiße Nit. Woher kommst du?"],
     ["Tom","ผมมาจากเยอรมนีครับ ผมทำงานที่บริษัท","phǒm maa jàak yəə-rá-man-nii khráp. phǒm tham-ngaan thîi bɔɔ-rí-sàt","Ich komme aus Deutschland. Ich arbeite in einer Firma."],
     ["Nit","ยินดีที่ได้รู้จักค่ะ","yin-dii thîi dâi rúu-jàk khâ","Freut mich, dich kennenzulernen."],
     ["Tom","ยินดีที่ได้รู้จักครับ","yin-dii thîi dâi rúu-jàk khráp","Mich auch."]
   ]],
   ["voc",[
     ["ชื่อ","chʉ̂ʉ","Name; heißen"],
     ["อะไร","à-rai","was"],
     ["มาจาก","maa jàak","kommen aus"],
     ["ไหน","nǎi","wo, welche(r)"],
     ["ทำงาน","tham-ngaan","arbeiten"],
     ["ครู","khruu","Lehrer/in"],
     ["หมอ","mɔ̌ɔ","Arzt, Ärztin"],
     ["นักศึกษา","nák-sʉ̀k-sǎa","Student/in"],
     ["ยินดีที่ได้รู้จัก","yin-dii thîi dâi rúu-jàk","freut mich"]
   ]],
   ["tip","Fast alle Thais haben einen kurzen Spitznamen (ชื่อเล่น, chʉ̂ʉ-lên) wie นิด, ต้น oder เบียร์. Im Alltag hörst du fast nur diese.","Kultur"]
  ]}
 ],
 quiz:[
  ["mc","Welcher Satz heißt „Das Essen ist lecker“?",["อาหารเป็นอร่อย","อาหารอร่อย","อาหารคืออร่อย"],1,"Adjektive stehen ohne „sein“ direkt hinter dem Thema."],
  ["mc","„Ich bin Lehrerin.“",["ฉันเป็นครู","ฉันอยู่ครู","ฉันครูเป็น"],0,"Beruf und Rolle: A + เป็น + B."],
  ["mc","Welcher Buchstabe ist ein unbehauchtes p (bp)?",["บ","ป","ต","ก"],1,"ป (bplaa, Fisch) ist das unbehauchte p. บ ist ein b."],
  ["mc","Wie liest man ดี?",["dii","tii","bii","dɛɛ"],0,"ด = d, อี = ii: dii „gut“."],
  ["mc","บ้านใหญ่ kann bedeuten …",["nur „großes Haus“","nur „Das Haus ist groß.“","beides – je nach Kontext"],2,"Adjektive sind Verben; der Kontext entscheidet."],
  ["ord","Ich komme aus Deutschland.",[["ผม","phǒm"],["มา","maa"],["จาก","jàak"],["เยอรมนี","yəə-rá-man-nii"]],"มาจาก = kommen aus."],
  ["ord","Wie heißt du?",[["คุณ","khun"],["ชื่อ","chʉ̂ʉ"],["อะไร","à-rai"]],"Das Fragewort อะไร steht dort, wo die Antwort stünde: „Du heißt was?“"]
 ]},
{n:3, lvl:"A0", key:["เผ็ดไหม","phèt mǎi","„Ist es scharf?“"],
 title:"Nein & Ja/Nein-Fragen",
 sub:"Verneinen, Ja/Nein-Fragen stellen und so antworten, wie Thais es tun.",
 goals:["Verben und Adjektive mit ไม่ verneinen","Ja/Nein-Fragen stellen und natürlich antworten","die Tiefklasse-Klinger lesen"],
 lessons:[
  {k:"schrift", t:"Schrift 2: Tiefklasse I – die Klinger", b:[
   ["p","Diese sieben Tiefklasse-Konsonanten klingen weich. Sie können auch am Silbenende stehen."],
   ["let",[
     ["ง","งู","nguu","Schlange","ng (auch am Wortanfang)"],
     ["น","หนู","nǔu","Maus","n"],
     ["ม","ม้า","máa","Pferd","m"],
     ["ย","ยักษ์","yák","Riese","y (wie deutsches j)"],
     ["ร","เรือ","rʉa","Boot","r (gerollt)"],
     ["ล","ลิง","ling","Affe","l"],
     ["ว","แหวน","wɛ̌ɛn","Ring","w (wie englisches w)"]
   ]],
   ["tbl",["Zeichen","Laut","Beispiel"],[
     ["อือ","ʉʉ (lang)","มือ mʉʉ „Hand“"],
     ["แอ","ɛɛ (lang, wie ä)","แมว mɛɛo „Katze“"],
     ["เอ","ee (lang)","เวลา wee-laa „Zeit“"],
     ["ออ","ɔɔ (lang, offenes o)","รอ rɔɔ „warten“"],
     ["ใอ","ai","ใจ jai „Herz“"],
     ["อิ","i (kurz)","กิน gin „essen“"]
   ]],
   ["p","Am Silbenende: น = -n, ม = -m, ง = -ng, ย = -i, ว = -o."],
   ["ex",[
     ["จาน","jaan","Teller"],
     ["ยาง","yaang","Gummi"],
     ["นาย","naai","Herr, Chef"],
     ["ดาว","daao","Stern"],
     ["งู","nguu","Schlange"],
     ["ยา","yaa","Medikament"]
   ]],
   ["tip","Tiefklasse + langer Vokal oder Klinger am Ende, ohne Tonzeichen = Mittelton – genau wie bei der Mittelklasse. Der Unterschied zeigt sich erst bei Tonzeichen und kurzen Silben."],
   ["tip","ง am Wortanfang: Sag „singen“ und halte das ng, dann öffne direkt zu „uu“ – งู.","Für Deutschsprachige"]
  ]},
  {k:"gram", t:"Verneinen und Ja/Nein-Fragen", b:[
   ["pat","ไม่ + Verb/Adjektiv = nicht"],
   ["ex",[
     ["ผมไม่กินเผ็ด","phǒm mâi gin phèt","Ich esse nicht scharf."],
     ["ไม่แพง","mâi phɛɛng","nicht teuer"]
   ]],
   ["pat","ไม่ใช่ + Nomen = kein, nicht (das)"],
   ["ex",[["เขาไม่ใช่ครู","khǎo mâi châi khruu","Er/Sie ist kein Lehrer."]]],
   ["pat","Satz + ไหม = Ja/Nein-Frage"],
   ["ex",[
     ["เผ็ดไหม","phèt mǎi","Ist es scharf?"],
     ["ชอบไหม","chɔ̂ɔp mǎi","Magst du es?"],
     ["ไปไหม","bpai mǎi","Kommst du mit?"]
   ]],
   ["p","Geantwortet wird mit dem Verb – mit oder ohne ไม่:"],
   ["ex",[["ชอบไหม – ชอบ / ไม่ชอบ","chɔ̂ɔp mǎi – chɔ̂ɔp / mâi chɔ̂ɔp","Magst du es? – Ja. / Nein."]]],
   ["pat","Satz + ใช่ไหม = „…, oder?“ (Bestätigung erwartet)"],
   ["ex",[["คุณเป็นคนเยอรมันใช่ไหม","khun bpen khon yəə-rá-man châi mǎi","Du bist Deutsche/r, oder?"]]],
   ["pat","Satz + หรือเปล่า = „… oder nicht?“ (neutral, sehr häufig)"],
   ["ex",[["ไปหรือเปล่า","bpai rʉ̌ʉ bplàao","Gehst du oder nicht?"]]],
   ["tip","Umgangssprachlich klingt ไหม wie „mái“ (hoher Ton) und wird oft มั้ย geschrieben."]
  ]},
  {k:"gefuehl", t:"Es gibt kein „Ja“ – man wiederholt", b:[
   ["p","Thai hat kein Allzweck-„Ja“. Statt „ja“ wiederholst du das Verb der Frage. Für Thais klingt das vollständig und natürlich."],
   ["ex",[
     ["หิวไหม – หิว","hǐu mǎi – hǐu","Hast du Hunger? – Ja (hungrig)."],
     ["ว่างไหม – ไม่ว่าง","wâang mǎi – mâi wâang","Hast du Zeit? – Nein (nicht frei)."],
     ["เข้าใจไหม – เข้าใจ","khâo-jai mǎi – khâo-jai","Verstehst du? – Ja (verstehe)."]
   ]],
   ["p","ครับ/ค่ะ allein ist ein höfliches „ja, in Ordnung“. ใช่ bedeutet eher „stimmt, richtig“ und passt vor allem auf ใช่ไหม-Fragen."],
   ["tip","ไม่ sitzt immer direkt vor dem, was verneint wird – wie ein Schalter vor dem Verb: ไม่ + เข้าใจ = „nicht verstehen“.","Sprachgefühl"],
   ["tip","ไม่เป็นไร (wörtlich etwa „ist nichts“) ist mehr als eine Floskel: Es steht für die Thai-Haltung, kleine Pannen gelassen zu nehmen.","Kultur"]
  ]},
  {k:"kontext", t:"Am Essensstand", b:[
   ["dlg",[
     ["Nit","ชอบอาหารไทยไหมคะ","chɔ̂ɔp aa-hǎan thai mǎi khá","Magst du thailändisches Essen?"],
     ["Tom","ชอบครับ อร่อยมาก","chɔ̂ɔp khráp. à-rɔ̀i mâak","Ja! Sehr lecker."],
     ["Tom","ส้มตำเผ็ดไหมครับ","sôm-dtam phèt mǎi khráp","Ist der Papayasalat scharf?"],
     ["Nit","เผ็ดค่ะ คุณกินเผ็ดไหมคะ","phèt khâ. khun gin phèt mǎi khá","Ja, scharf. Isst du scharf?"],
     ["Tom","กินนิดหน่อยครับ","gin nít-nɔ̀i khráp","Ein bisschen."],
     ["Nit","โอเคค่ะ ไม่เป็นไร","oo-kee khâ, mâi bpen rai","Okay, kein Problem."]
   ]],
   ["voc",[
     ["ชอบ","chɔ̂ɔp","mögen"],
     ["อร่อย","à-rɔ̀i","lecker"],
     ["มาก","mâak","sehr, viel"],
     ["เผ็ด","phèt","scharf"],
     ["หิว","hǐu","hungrig sein"],
     ["ว่าง","wâang","frei sein, Zeit haben"],
     ["เข้าใจ","khâo-jai","verstehen"],
     ["นิดหน่อย","nít-nɔ̀i","ein bisschen"]
   ]],
   ["tip","มาก steht immer **hinter** dem Wort, das es verstärkt: อร่อยมาก = „sehr lecker“ (wörtlich: lecker sehr)."]
  ]}
 ],
 quiz:[
  ["mc","Wie verneinst du „Ich verstehe“?",["ผมเข้าใจไม่","ผมไม่เข้าใจ","ไม่ผมเข้าใจ"],1,"ไม่ steht direkt vor dem Verb."],
  ["mc","„Er ist kein Arzt.“",["เขาไม่หมอ","เขาไม่ใช่หมอ","เขาไม่เป็นหมอไหม"],1,"Vor Nomen verneint man mit ไม่ใช่."],
  ["mc","หิวไหม? – Wie antwortest du mit „ja“?",["ใช่","หิว","ไหม"],1,"Du wiederholst das Verb: หิว."],
  ["mc","Was bedeutet ใช่ไหม am Satzende?",["„…, oder?“","„warum?“","„nicht“"],0,"ใช่ไหม erwartet eine Bestätigung."],
  ["mc","Welcher Buchstabe steht für ng?",["น","ง","ม","ย"],1,"ง wie งู (nguu, Schlange)."],
  ["mc","Wie liest man แมว (Katze)?",["mɛɛo","meeo","maao","mʉʉ"],0,"แอ = ɛɛ, ว am Ende = -o."],
  ["ord","Magst du thailändisches Essen?",[["ชอบ","chɔ̂ɔp"],["อาหาร","aa-hǎan"],["ไทย","thai"],["ไหม","mǎi"]],"Das „du“ fällt weg, ไหม steht ganz am Ende."],
  ["ord","Ich esse nicht scharf.",[["ผม","phǒm"],["ไม่","mâi"],["กิน","gin"],["เผ็ด","phèt"]],"ไม่ steht direkt vor dem Verb กิน."]
 ]},
{n:4, lvl:"A0", key:["ไปไหน","bpai nǎi","„Wohin gehst du?“"],
 title:"Fragen stellen",
 sub:"W-Fragen bilden, behauchte Laute unterscheiden und dich unterwegs zurechtfinden.",
 goals:["W-Fragen bilden","behauchte und unbehauchte Laute unterscheiden","nach dem Weg und nach Dingen fragen"],
 lessons:[
  {k:"schrift", t:"Schrift 3: Tiefklasse II – die Behauchten", b:[
   ["p","Diese Konsonanten haben „Zwillinge“ in der Hochklasse mit gleichem Laut. Für die Aussprache wichtig: ค, ท und พ sind behaucht – genau das unterscheidet sie von ก, ต und ป."],
   ["let",[
     ["ค","ควาย","khwaai","Wasserbüffel","kh (behaucht)"],
     ["ช","ช้าง","cháang","Elefant","ch"],
     ["ซ","โซ่","sôo","Kette","s"],
     ["ท","ทหาร","thá-hǎan","Soldat","th (behaucht, kein englisches th)"],
     ["พ","พาน","phaan","Opferschale","ph (behaucht, kein f)"],
     ["ฟ","ฟัน","fan","Zahn","f"],
     ["ฮ","นกฮูก","nók-hûuk","Eule","h"]
   ]],
   ["tbl",["Zeichen","Laut","Beispiel"],[
     ["อั + Endkonsonant","a (kurz)","ฟัน fan „Zahn“"],
     ["อัว","ua","วัว wua „Kuh“"]
   ]],
   ["h","Behaucht oder nicht?"],
   ["ex",[
     ["ตา – ทา","dtaa – thaa","Auge – (Creme) auftragen"],
     ["ปา – พา","bpaa – phaa","werfen – mitnehmen"],
     ["กาง – คาง","gaang – khaang","aufspannen – Kinn"]
   ]],
   ["ex",[
     ["ชา","chaa","Tee"],
     ["ทำ","tham","machen"],
     ["ซอย","sɔɔi","Seitengasse"],
     ["คอ","khɔɔ","Hals"]
   ]],
   ["tip","Tiefklasse ohne Tonzeichen in lebendigen Silben (langer Vokal oder Klinger am Ende) = Mittelton: ชา, ทำ, ซอย."]
  ]},
  {k:"gram", t:"W-Fragen", b:[
   ["p","Im Deutschen springt das Fragewort an den Satzanfang. Im Thai bleibt es dort, wo später die Antwort steht – meistens am Ende."],
   ["ex",[
     ["คุณกินอะไร","khun gin à-rai","Was isst du? (wörtl. Du isst was?)"],
     ["ผมกินข้าวผัด","phǒm gin khâao-phàt","Ich esse gebratenen Reis."],
     ["คุณไปไหน","khun bpai nǎi","Wohin gehst du?"],
     ["ไปตลาด","bpai dtà-làat","Zum Markt."],
     ["ห้องน้ำอยู่ที่ไหน","hɔ̂ng-náam yùu thîi-nǎi","Wo ist die Toilette?"],
     ["นั่นใคร","nân khrai","Wer ist das?"]
   ]],
   ["voc",[
     ["อะไร","à-rai","was"],
     ["ใคร","khrai","wer"],
     ["ที่ไหน","thîi-nǎi","wo"],
     ["ไปไหน","bpai nǎi","wohin"],
     ["เมื่อไหร่","mʉ̂a-rài","wann"],
     ["ยังไง","yang-ngai","wie"],
     ["ทำไม","tham-mai","warum"],
     ["เท่าไหร่","thâo-rài","wie viel (Preis)"]
   ]],
   ["p","ทำไม darf auch vorn stehen: ทำไมไม่มา (tham-mai mâi maa) – „Warum kommst du nicht?“"],
   ["tip","Höflich wird jede Frage mit ครับ (Männer) oder คะ (Frauen): ห้องน้ำอยู่ที่ไหนคะ"]
  ]},
  {k:"gefuehl", t:"„Du gehst wohin?“ – Fragen ohne Umbau", b:[
   ["p","Die Satzstellung bleibt bei Fragen genau wie in der Aussage. Du ersetzt nur die Lücke durch ein Fragewort. Das macht Thai-Fragen sehr leicht."],
   ["ex",[
     ["เขาชื่อนิด","khǎo chʉ̂ʉ nít","Sie heißt Nit."],
     ["เขาชื่ออะไร","khǎo chʉ̂ʉ à-rai","Wie heißt sie? (wörtl. Sie heißt was?)"]
   ]],
   ["p","ไปไหน („Wohin gehst du?“) ist oft keine echte Frage, sondern ein Gruß. Eine vage Antwort genügt völlig:"],
   ["ex",[
     ["ไปไหนมา","bpai nǎi maa","Wo warst du? (wörtl. gehen wohin kommen)"],
     ["ไปเที่ยวมา","bpai thîao maa","War unterwegs."],
     ["ไปธุระ","bpai thú-rá","Hab was zu erledigen."]
   ]],
   ["tip","Die Gegenfrage funktioniert wie im Deutschen: แล้วคุณล่ะ (lɛ́ɛo khun lâ) – „Und du?“","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Unterwegs: Wo ist …?", b:[
   ["dlg",[
     ["Tom","ขอโทษครับ ห้องน้ำอยู่ที่ไหนครับ","khɔ̌ɔ-thôot khráp. hɔ̂ng-náam yùu thîi-nǎi khráp","Entschuldigung, wo ist die Toilette?"],
     ["Verkäuferin","อยู่ข้างหลังค่ะ","yùu khâang-lǎng khâ","Hinten."],
     ["Tom","ขอบคุณครับ แล้วนี่อะไรครับ","khɔ̀ɔp-khun khráp. lɛ́ɛo nîi à-rai khráp","Danke. Und was ist das?"],
     ["Verkäuferin","นี่คือมะม่วงค่ะ อร่อยนะ","nîi khʉʉ má-mûang khâ. à-rɔ̀i ná","Das ist eine Mango. Lecker!"],
     ["Tom","เท่าไหร่ครับ","thâo-rài khráp","Wie viel kostet sie?"],
     ["Verkäuferin","ห้าสิบบาทค่ะ","hâa-sìp bàat khâ","50 Baht."]
   ]],
   ["voc",[
     ["ห้องน้ำ","hɔ̂ng-náam","Toilette, Bad"],
     ["ข้างหน้า","khâang-nâa","vorne"],
     ["ข้างหลัง","khâang-lǎng","hinten"],
     ["นี่ / นั่น","nîi / nân","das hier / das da"],
     ["ตลาด","dtà-làat","Markt"],
     ["ร้านอาหาร","ráan aa-hǎan","Restaurant"],
     ["เที่ยว","thîao","ausgehen, reisen, bummeln"]
   ]],
   ["tip","Mit นี่อะไร („Was ist das?“) und เท่าไหร่ („Wie viel?“) kommst du über jeden Markt."]
  ]}
 ],
 quiz:[
  ["mc","„Was isst du?“",["อะไรคุณกิน","คุณกินอะไร","คุณอะไรกิน"],1,"Das Fragewort bleibt an der Stelle der Antwort."],
  ["mc","Was bedeutet ใคร?",["wo","wer","wann","warum"],1,"ใคร (khrai) = wer."],
  ["mc","ไปไหน als Gruß – eine passende Antwort ist …",["ไปธุระ","ไม่ใช่","ใช่ไหม"],0,"Eine vage Antwort wie „Hab was zu erledigen“ reicht."],
  ["mc","Welcher Laut ist behaucht?",["ต","ป","ท","ก"],2,"ท = th (behaucht). ต, ป und ก sind unbehaucht."],
  ["mc","Wie liest man ชา?",["chaa","jaa","saa","khaa"],0,"ช = ch, อา = aa: chaa „Tee“."],
  ["ord","Wo ist die Toilette?",[["ห้องน้ำ","hɔ̂ng-náam"],["อยู่","yùu"],["ที่ไหน","thîi-nǎi"]],"Ort erfragen: A + อยู่ + ที่ไหน."],
  ["ord","Wohin gehst du?",[["คุณ","khun"],["ไป","bpai"],["ไหน","nǎi"]],"„Du gehst wohin?“"]
 ]},
{n:5, lvl:"A1", key:["เท่าไหร่คะ","thâo-rài khá","„Wie viel kostet das?“"],
 title:"Zahlen & Markt",
 sub:"Zahlen, Preise und freundliches Handeln – dazu die Hochklasse-Konsonanten.",
 goals:["Zahlen bis in die Millionen sagen","Preise erfragen und freundlich handeln","die Hochklasse lesen und ihren Grundton erkennen"],
 lessons:[
  {k:"schrift", t:"Schrift 4: Die Hochklasse", b:[
   ["p","Die Hochklasse hat dieselben Laute wie ihre Tiefklasse-Zwillinge, aber einen anderen Grundton: Lebendige Silben ohne Tonzeichen haben den **steigenden** Ton."],
   ["let",[
     ["ข","ไข่","khài","Ei","kh"],
     ["ฉ","ฉิ่ง","chìng","Zimbeln","ch"],
     ["ถ","ถุง","thǔng","Tüte","th"],
     ["ผ","ผึ้ง","phʉ̂ng","Biene","ph"],
     ["ฝ","ฝา","fǎa","Deckel","f"],
     ["ส","เสือ","sʉ̌a","Tiger","s"],
     ["ห","หีบ","hìip","Truhe","h"]
   ]],
   ["ex",[
     ["ขา","khǎa","Bein"],
     ["สี","sǐi","Farbe"],
     ["หู","hǔu","Ohr"],
     ["ขอ","khɔ̌ɔ","bitten um"],
     ["สอง","sɔ̌ɔng","zwei"],
     ["ถาม","thǎam","fragen"]
   ]],
   ["tip","Gleicher Laut, anderer Ton: คา (khaa, Tiefklasse, Mittelton) und ขา (khǎa, Hochklasse, steigend)."],
   ["tip","Thai-Kinder lernen die Klassen mit Merksätzen. Mittelklasse: ไก่จิกเด็กตายบนปากโอ่ง (gài jìk dèk dtaai bon bpàak òong) – „Das Huhn pickt das Kind tot am Rand des Wasserkrugs.“ Hochklasse: ผีฝากถุงข้าวสารให้ฉัน (phǐi fàak thǔng khâao-sǎan hâi chǎn) – „Ein Geist gibt mir einen Sack Reis zur Aufbewahrung.“ Dazu kommen ein paar seltene Buchstaben; alle übrigen sind Tiefklasse.","Merkhilfe"]
  ]},
  {k:"gram", t:"Zahlen und Preise", b:[
   ["voc",[
     ["ศูนย์","sǔun","0"],["หนึ่ง","nʉ̀ng","1"],["สอง","sɔ̌ɔng","2"],["สาม","sǎam","3"],["สี่","sìi","4"],
     ["ห้า","hâa","5"],["หก","hòk","6"],["เจ็ด","jèt","7"],["แปด","bpɛ̀ɛt","8"],["เก้า","gâo","9"],["สิบ","sìp","10"]
   ]],
   ["p","Größere Zahlen setzt du wie Bausteine zusammen:"],
   ["ex",[
     ["สิบเอ็ด","sìp-èt","11"],
     ["ยี่สิบ","yîi-sìp","20"],
     ["ยี่สิบเอ็ด","yîi-sìp-èt","21"],
     ["สามสิบห้า","sǎam-sìp-hâa","35"],
     ["หนึ่งร้อย","nʉ̀ng-rɔ́ɔi","100"],
     ["สองพันห้าร้อย","sɔ̌ɔng-phan-hâa-rɔ́ɔi","2.500"]
   ]],
   ["voc",[["พัน","phan","1.000"],["หมื่น","mʉ̀ʉn","10.000"],["แสน","sɛ̌ɛn","100.000"],["ล้าน","láan","1.000.000"]]],
   ["tip","Zwei Ausnahmen: Eine 1 am Ende heißt เอ็ด (สิบเอ็ด, ยี่สิบเอ็ด), und 20 heißt ยี่สิบ statt „สองสิบ“.","Typischer Fehler"],
   ["pat","Ding + เท่าไหร่ = Wie viel kostet …?"],
   ["ex",[
     ["อันนี้เท่าไหร่","an-níi thâo-rài","Wie viel kostet das hier?"],
     ["ร้อยบาท","rɔ́ɔi bàat","100 Baht."],
     ["ลดได้ไหม","lót dâi mǎi","Geht’s günstiger?"]
   ]],
   ["p","Thai-Ziffern siehst du auf Formularen, Schildern und manchmal auf Preisen: ๐ ๑ ๒ ๓ ๔ ๕ ๖ ๗ ๘ ๙."]
  ]},
  {k:"gefuehl", t:"Zahlen klingen nach Tönen", b:[
   ["p","Auch Zahlen haben feste Töne und Längen. สี่ (sìi, vier) und สิบ (sìp, zehn) sind beide tief – sie unterscheiden sich nur durch Vokallänge und Endlaut. Wer hier schludert, nennt schnell einen anderen Preis."],
   ["p","Große Summen zählt Thai in Zehntausendern und Hunderttausendern:"],
   ["ex",[
     ["ห้าหมื่น","hâa-mʉ̀ʉn","50.000 (fünf Zehntausender)"],
     ["สามแสน","sǎam-sɛ̌ɛn","300.000 (drei Hunderttausender)"]
   ]],
   ["tip","Im Chat bedeutet 555 „hahaha“ – denn 5 heißt ห้า (hâa).","Sprachgefühl"],
   ["tip","Handeln ist auf Märkten üblich, im Supermarkt und Restaurant nicht. Immer freundlich und mit Lächeln – so wahren beide Seiten ihr Gesicht.","Kultur"]
  ]},
  {k:"kontext", t:"Auf dem Markt", b:[
   ["dlg",[
     ["Tom","มะม่วงกิโลละเท่าไหร่ครับ","má-mûang gì-loo lá thâo-rài khráp","Wie viel kostet ein Kilo Mangos?"],
     ["Händlerin","กิโลละแปดสิบบาทค่ะ","gì-loo lá bpɛ̀ɛt-sìp bàat khâ","80 Baht pro Kilo."],
     ["Tom","แพงไปหน่อยครับ เจ็ดสิบได้ไหมครับ","phɛɛng bpai nɔ̀i khráp. jèt-sìp dâi mǎi khráp","Etwas zu teuer. Geht 70?"],
     ["Händlerin","ได้ค่ะ เอากี่กิโลคะ","dâi khâ. ao gìi gì-loo khá","Okay. Wie viele Kilo?"],
     ["Tom","สองกิโลครับ","sɔ̌ɔng gì-loo khráp","Zwei Kilo."],
     ["Händlerin","ทั้งหมดร้อยสี่สิบบาทค่ะ","tháng-mòt rɔ́ɔi-sìi-sìp bàat khâ","Zusammen 140 Baht."]
   ]],
   ["voc",[
     ["เท่าไหร่","thâo-rài","wie viel"],
     ["บาท","bàat","Baht"],
     ["แพง / ถูก","phɛɛng / thùuk","teuer / billig"],
     ["ลด","lót","reduzieren"],
     ["… ละ …","lá","pro"],
     ["กี่","gìi","wie viele"],
     ["ทั้งหมด","tháng-mòt","insgesamt"],
     ["เอา","ao","nehmen, wollen"]
   ]],
   ["tip","Adjektiv + ไป = „zu …“: แพงไป („zu teuer“), เผ็ดไป („zu scharf“). Mit หน่อย klingt es weicher: แพงไปหน่อย – „ein bisschen zu teuer“."]
  ]}
 ],
 quiz:[
  ["mc","Wie heißt 20?",["สองสิบ","ยี่สิบ","สิบสอง"],1,"20 ist unregelmäßig: ยี่สิบ."],
  ["mc","Wie heißt 21?",["ยี่สิบหนึ่ง","ยี่สิบเอ็ด","สองสิบเอ็ด"],1,"Eine 1 am Ende einer mehrstelligen Zahl heißt เอ็ด."],
  ["mc","50.000 auf Thai:",["ห้าพัน","ห้าหมื่น","ห้าแสน"],1,"หมื่น = Zehntausender."],
  ["mc","Welchen Ton hat ขา (Hochklasse, kein Tonzeichen)?",["Mittelton","steigender Ton","fallender Ton"],1,"Hochklasse in lebendiger Silbe ohne Zeichen = steigend."],
  ["mc","„Zu teuer“ heißt …",["แพงไป","ไปแพง","แพงมาก"],0,"แพงมาก heißt „sehr teuer“ – nicht „zu teuer“."],
  ["mc","Was bedeutet 555 in einer Nachricht?",["555 Baht","hahaha","bis bald"],1,"5 = ห้า (hâa) – also „hahaha“."],
  ["ord","Wie viel kostet das hier?",[["อันนี้","an-níi"],["เท่าไหร่","thâo-rài"],["ครับ","khráp"]],"Das Ding zuerst, dann เท่าไหร่, am Ende ครับ/คะ."]
 ]},
{n:6, lvl:"A1", key:["กาแฟสองแก้ว","gaa-fɛɛ sɔ̌ɔng gɛ̂ɛo","„zwei Kaffee“"],
 title:"Zählwörter",
 sub:"Wie Thai zählt, Tonzeichen lesen und im Café bestellen.",
 goals:["Dinge mit Zählwörtern zählen","die Tonzeichen ่ und ้ lesen","Getränke und Essen bestellen"],
 lessons:[
  {k:"schrift", t:"Schrift 5: Die Tonzeichen", b:[
   ["p","Thai hat vier Tonzeichen. Im Alltag brauchst du vor allem อ่ (ไม้เอก) und อ้ (ไม้โท). Welcher Ton herauskommt, hängt von der Konsonantenklasse ab:"],
   ["tbl",["Klasse","ohne Zeichen","mit อ่","mit อ้"],[
     ["Mittelklasse","Mittelton: ปา bpaa „werfen“","tief: ป่า bpàa „Wald“","fallend: ป้า bpâa „Tante“"],
     ["Hochklasse","steigend: หา hǎa „suchen“","tief: ไข่ khài „Ei“","fallend: ห้า hâa „fünf“"],
     ["Tiefklasse","Mittelton: มา maa „kommen“","fallend: แม่ mɛ̂ɛ „Mutter“","hoch: ม้า máa „Pferd“"]
   ]],
   ["tip","Die Tiefklasse-Falle: Dort ergibt อ่ einen **fallenden** und อ้ einen **hohen** Ton. Die Namen der Zeichen verraten den Ton also nicht.","Typischer Fehler"],
   ["p","Die Zeichen อ๊ (hoch) und อ๋ (steigend) stehen nur auf Mittelklasse-Konsonanten, vor allem in Lehnwörtern: โต๊ะ (dtó, Tisch), ก๋วยเตี๋ยว (gǔay-dtǐao, Nudelsuppe)."],
   ["ex",[
     ["ไม่","mâi","nicht"],
     ["ได้","dâi","können, bekommen"],
     ["บ้าน","bâan","Haus"],
     ["พ่อ","phɔ̂ɔ","Vater"],
     ["แม่","mɛ̂ɛ","Mutter"],
     ["น้ำ","náam","Wasser"],
     ["ใช่","châi","ja, richtig"]
   ]]
  ]},
  {k:"gram", t:"Zählwörter (Klassifikatoren)", b:[
   ["p","Im Thai zählst du Nomen nie direkt. Du brauchst ein Zählwort – so wie im Deutschen „zwei **Tassen** Kaffee“ oder „drei **Stück** Kuchen“, nur bei jedem Nomen."],
   ["pat","Nomen + Zahl + Zählwort"],
   ["ex",[
     ["กาแฟสองแก้ว","gaa-fɛɛ sɔ̌ɔng gɛ̂ɛo","zwei (Gläser) Kaffee"],
     ["หมาสามตัว","mǎa sǎam dtua","drei Hunde"],
     ["นักเรียนห้าคน","nák-rian hâa khon","fünf Schüler"],
     ["เบียร์สองขวด","bia sɔ̌ɔng khùat","zwei Flaschen Bier"]
   ]],
   ["voc",[
     ["คน","khon","Menschen"],
     ["ตัว","dtua","Tiere, Kleidung, Tische, Stühle"],
     ["อัน","an","kleine Dinge (Allzweck)"],
     ["ใบ","bai","Taschen, Tickets, Behälter"],
     ["แก้ว","gɛ̂ɛo","Glas, Becher (Getränke)"],
     ["ขวด","khùat","Flasche"],
     ["จาน","jaan","Teller (Gerichte)"],
     ["ที่","thîi","Portion"],
     ["คัน","khan","Fahrzeuge, Schirme, Löffel"],
     ["เล่ม","lêm","Bücher, Hefte"]
   ]],
   ["pat","Wie viele? → Nomen + กี่ + Zählwort"],
   ["ex",[
     ["มีลูกกี่คน","mii lûuk gìi khon","Wie viele Kinder hast du?"],
     ["ไปกี่คน","bpai gìi khon","Wie viele Leute gehen mit?"]
   ]],
   ["p","Bei „eins“ steht หนึ่ง oft **hinter** dem Zählwort und heißt dann „ein(e)“: กาแฟแก้วหนึ่ง – „einen Kaffee“."]
  ]},
  {k:"gefuehl", t:"Wie Thai die Welt sortiert", b:[
   ["p","Zählwörter verraten, wie Thai Dinge gruppiert. Was einen „Körper“ hat, zählt mit ตัว – Tiere, aber auch Hemden, Hosen, Tische und Stühle. Dinge mit Griff oder Stiel zählen mit คัน – Autos, Fahrräder, Regenschirme, sogar Löffel."],
   ["p","Im Restaurant spielen die Behälter die Hauptrolle: Getränke bestellst du nach แก้ว oder ขวด, Essen nach จาน oder ที่."],
   ["ex",[
     ["ข้าวผัดสองจาน","khâao-phàt sɔ̌ɔng jaan","zweimal gebratenen Reis"],
     ["น้ำเปล่าขวดหนึ่ง","náam-bplàao khùat nʉ̀ng","eine Flasche Wasser"]
   ]],
   ["tip","Unsicher? อัน passt für viele kleine Dinge. Man versteht dich auch mit einem „falschen“ Zählwort – das richtige klingt aber sofort natürlicher.","Sprachgefühl"],
   ["p","Zählwörter stehen auch vor นี้ („dieser“): หมาตัวนี้ – „dieser Hund“. Mehr dazu nächste Woche."]
  ]},
  {k:"kontext", t:"Im Café", b:[
   ["dlg",[
     ["Bedienung","รับอะไรดีคะ","ráp à-rai dii khá","Was darf’s sein?"],
     ["Tom","ขอกาแฟเย็นแก้วหนึ่งครับ แล้วก็ชาเขียวอีกแก้วครับ","khɔ̌ɔ gaa-fɛɛ yen gɛ̂ɛo nʉ̀ng khráp, lɛ́ɛo-gɔ̂ɔ chaa-khǐao ìik gɛ̂ɛo khráp","Einen Eiskaffee, bitte – und noch einen grünen Tee."],
     ["Bedienung","หวานปกติไหมคะ","wǎan bpòk-gà-dtì mǎi khá","Normal süß?"],
     ["Tom","หวานน้อยครับ","wǎan nɔ́ɔi khráp","Wenig süß, bitte."],
     ["Bedienung","ทั้งหมดเก้าสิบบาทค่ะ","tháng-mòt gâo-sìp bàat khâ","Zusammen 90 Baht."]
   ]],
   ["voc",[
     ["รับอะไรดี","ráp à-rai dii","Was darf es sein?"],
     ["ขอ …","khɔ̌ɔ","Ich hätte gern …"],
     ["กาแฟเย็น","gaa-fɛɛ yen","Eiskaffee"],
     ["ชาเขียว","chaa-khǐao","grüner Tee"],
     ["น้ำเปล่า","náam-bplàao","stilles Wasser"],
     ["หวาน","wǎan","süß"],
     ["หวานน้อย","wǎan nɔ́ɔi","wenig süß"],
     ["อีก","ìik","noch (ein)"],
     ["แล้วก็","lɛ́ɛo-gɔ̂ɔ","und (dann noch)"]
   ]],
   ["tip","Kaffee und Tee sind in Thailand oft sehr süß. หวานน้อย („wenig süß“) oder ไม่หวาน („ohne Zucker“) gehört zu den nützlichsten Sätzen überhaupt."]
  ]}
 ],
 quiz:[
  ["mc","„drei Hunde“",["สามหมาตัว","หมาสามตัว","หมาตัวสาม"],1,"Nomen + Zahl + Zählwort."],
  ["mc","Welches Zählwort passt zu เสื้อ (Hemd)?",["คน","ตัว","เล่ม","ขวด"],1,"Kleidung hat einen „Körper“: ตัว."],
  ["mc","Welches Zählwort passt zu รถ (Auto)?",["คัน","ใบ","อัน","จาน"],0,"Fahrzeuge zählen mit คัน."],
  ["mc","Tiefklasse + อ้ ergibt …",["einen fallenden Ton","einen hohen Ton","einen tiefen Ton"],1,"ม้า (máa): hoch."],
  ["mc","Wie liest man แม่?",["mɛ̀ɛ","mɛ̂ɛ","mɛ́ɛ","mɛ̌ɛ"],1,"Tiefklasse + อ่ = fallend: mɛ̂ɛ."],
  ["ord","zwei Flaschen Bier",[["เบียร์","bia"],["สอง","sɔ̌ɔng"],["ขวด","khùat"]],"Nomen + Zahl + Zählwort."],
  ["ord","Ich hätte gern einen Eiskaffee.",[["ขอ","khɔ̌ɔ"],["กาแฟเย็น","gaa-fɛɛ yen"],["แก้ว","gɛ̂ɛo"],["หนึ่ง","nʉ̀ng"]],"Bei „eins“ darf หนึ่ง hinter dem Zählwort stehen.",[[0,1,3,2]]]
 ]},
{n:7, lvl:"A1", key:["คนนั้นใคร","khon nán khrai","„Wer ist die Person da?“"],
 title:"Dies, das & meins",
 sub:"Zeigewörter, Besitz, die Thai-Nominalphrase und tote Silben.",
 goals:["„dieser“, „jener“ und Besitz ausdrücken","lange Nominalphrasen verstehen","tote Silben und Endlaute lesen"],
 lessons:[
  {k:"schrift", t:"Schrift 6: Tote Silben und Endlaute", b:[
   ["p","Silben mit kurzem Vokal ohne Endlaut oder mit den Endlauten -k, -t, -p heißen „tot“ (คำตาย). Sie klingen kurz abgehackt und folgen eigenen Tonregeln:"],
   ["tbl",["Klasse","Ton (ohne Zeichen)","Beispiele"],[
     ["Mittelklasse","tief","จาก jàak „von, aus“, กับ gàp „mit“"],
     ["Hochklasse","tief","สิบ sìp „zehn“, ผัด phàt „braten“"],
     ["Tiefklasse, kurzer Vokal","hoch","รัก rák „lieben“, ทุก thúk „jeder“"],
     ["Tiefklasse, langer Vokal","fallend","มาก mâak „sehr“, พูด phûut „sprechen“"]
   ]],
   ["p","Am Silbenende schrumpfen viele Buchstaben auf wenige Laute:"],
   ["tbl",["Endlaut","Buchstaben","Beispiel"],[
     ["-k","ก ข ค","มาก mâak"],
     ["-t","ด ต ท จ ช ซ ส …","พูด phûut, โอกาส oo-gàat"],
     ["-p","บ ป พ ฟ","ชอบ chɔ̂ɔp"],
     ["-n","น ร ล ญ ณ","อาหาร aa-hǎan"],
     ["-m / -ng","ม / ง","สาม sǎam, สอง sɔ̌ɔng"],
     ["-i / -o","ย / ว","สาย sǎai, ขาว khǎao"]
   ]],
   ["tip","Die Endlaute -k, -t und -p werden nicht „gelöst“: Zunge oder Lippen schließen nur und bleiben stehen. Kein hörbares k am Ende von มาก!","Für Deutschsprachige"]
  ]},
  {k:"gram", t:"Dies & das, mein & dein", b:[
   ["p","Thai unterscheidet drei Entfernungen: hier (นี้), da (นั้น) und dort drüben (โน้น)."],
   ["pat","Nomen + Zählwort + นี้ / นั้น / โน้น"],
   ["ex",[
     ["เสื้อตัวนี้","sʉ̂a dtua níi","dieses Hemd"],
     ["คนนั้น","khon nán","die Person da"],
     ["ร้านโน้น","ráan nóon","der Laden dort drüben"]
   ]],
   ["pat","นี่ / นั่น allein = „das (hier/da)“"],
   ["ex",[
     ["นี่อะไร","nîi à-rai","Was ist das?"],
     ["นั่นบ้านผม","nân bâan phǒm","Das da ist mein Haus."]
   ]],
   ["tip","Hör auf den Ton: นี้ (níi, hoch) braucht ein Nomen davor, นี่ (nîi, fallend) steht allein. Umgangssprachlich sehr häufig: อันนี้ („das hier“), อันนั้น („das da“)."],
   ["pat","Besitz: Ding + (ของ) + Besitzer"],
   ["ex",[
     ["บ้านของผม","bâan khɔ̌ɔng phǒm","mein Haus"],
     ["บ้านผม","bâan phǒm","mein Haus (umgangssprachlich)"],
     ["อันนี้ของใคร","an-níi khɔ̌ɔng khrai","Wem gehört das?"],
     ["ของฉัน","khɔ̌ɔng chǎn","Meins."]
   ]]
  ]},
  {k:"gefuehl", t:"Kern zuerst: die Thai-Nominalphrase", b:[
   ["p","Deutsch stellt Beschreibungen **vor** das Nomen („dieses rote Auto“). Thai beginnt mit dem Kern und hängt alles dahinter – wie ein Zoom vom Allgemeinen zum Konkreten."],
   ["pat","Nomen → Eigenschaft → (Zahl) → Zählwort → Zeigewort"],
   ["ex",[
     ["รถสีแดงคันนั้น","rót sǐi-dɛɛng khan nán","das rote Auto da (wörtl. Auto rot Stück jenes)"],
     ["แมวดำสองตัว","mɛɛo dam sɔ̌ɔng dtua","zwei schwarze Katzen"],
     ["บ้านใหม่ของเพื่อนผม","bâan mài khɔ̌ɔng phʉ̂an phǒm","das neue Haus meines Freundes"]
   ]],
   ["tip","Wenn du bei einer langen Phrase den Faden verlierst: Das erste Nomen ist der Kern. Alles danach präzisiert ihn.","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Familienfotos", b:[
   ["dlg",[
     ["Nit","นี่ใครคะ","nîi khrai khá","Wer ist das?"],
     ["Tom","นี่แม่ผมครับ คนนั้นพี่สาวผม","nîi mɛ̂ɛ phǒm khráp. khon nán phîi-sǎao phǒm","Das ist meine Mutter. Die da ist meine ältere Schwester."],
     ["Nit","น่ารักจัง มีพี่น้องกี่คนคะ","nâa-rák jang. mii phîi-nɔ́ɔng gìi khon khá","Wie süß! Wie viele Geschwister hast du?"],
     ["Tom","สองคนครับ พี่สาวหนึ่งคน น้องชายหนึ่งคน","sɔ̌ɔng khon khráp. phîi-sǎao nʉ̀ng khon, nɔ́ɔng-chaai nʉ̀ng khon","Zwei: eine ältere Schwester und einen jüngeren Bruder."],
     ["Nit","แล้วหมาตัวนี้ล่ะคะ","lɛ́ɛo mǎa dtua níi lâ khá","Und dieser Hund?"],
     ["Tom","ตัวนี้ของน้องชายผมครับ","dtua níi khɔ̌ɔng nɔ́ɔng-chaai phǒm khráp","Der gehört meinem jüngeren Bruder."]
   ]],
   ["voc",[
     ["พ่อ / แม่","phɔ̂ɔ / mɛ̂ɛ","Vater / Mutter"],
     ["พี่","phîi","ältere Geschwister"],
     ["น้อง","nɔ́ɔng","jüngere Geschwister"],
     ["พี่สาว / น้องชาย","phîi-sǎao / nɔ́ɔng-chaai","ältere Schwester / jüngerer Bruder"],
     ["ลูก","lûuk","Kind (eigenes)"],
     ["แฟน","fɛɛn","Partner/in"],
     ["เพื่อน","phʉ̂an","Freund/in"],
     ["มี","mii","haben; es gibt"],
     ["น่ารัก","nâa-rák","süß, niedlich"]
   ]],
   ["tip","Thai unterscheidet Geschwister zuerst nach dem **Alter**. พี่ und น้อง sind auch Anreden: Ältere Fremde sprichst du mit พี่ an, die junge Bedienung mit น้อง.","Kultur"]
  ]}
 ],
 quiz:[
  ["mc","„dieses Hemd“",["นี้เสื้อตัว","เสื้อตัวนี้","ตัวนี้เสื้อ"],1,"Nomen + Zählwort + นี้."],
  ["mc","Welches Wort steht allein für „das hier“?",["นี้ (níi)","นี่ (nîi)"],1,"นี่ (fallend) steht allein, นี้ (hoch) braucht ein Nomen."],
  ["mc","พี่สาว ist …",["die jüngere Schwester","die ältere Schwester","die Mutter","die Tante"],1,"พี่ = älter, สาว = weiblich."],
  ["mc","Welchen Ton hat มาก (Tiefklasse, langer Vokal, tote Silbe)?",["tief","fallend","hoch","steigend"],1,"Tiefklasse + langer Vokal + tote Silbe = fallend."],
  ["mc","รัก (Tiefklasse, kurzer Vokal, tote Silbe) hat den …",["hohen Ton","tiefen Ton","Mittelton"],0,"Tiefklasse + kurzer Vokal + tote Silbe = hoch."],
  ["ord","das rote Auto da",[["รถ","rót"],["สีแดง","sǐi-dɛɛng"],["คัน","khan"],["นั้น","nán"]],"Kern zuerst, dann Farbe, Zählwort, Zeigewort."],
  ["ord","Wem gehört das?",[["อันนี้","an-níi"],["ของ","khɔ̌ɔng"],["ใคร","khrai"]],"„Das hier – von wem?“"]
 ]},
{n:8, lvl:"A1", key:["ขอเมนูหน่อย","khɔ̌ɔ mee-nuu nɔ̀i","„Die Karte, bitte.“"],
 title:"Wünsche & Bitten",
 sub:"Wollen, können, höflich bitten – und die letzten Sonderfälle der Schrift.",
 goals:["Wünsche mit อยาก, เอา und ขอ äußern","sagen, was du kannst","die Sonderfälle der Schrift erkennen"],
 lessons:[
  {k:"schrift", t:"Schrift 7: Sonderfälle", b:[
   ["h","Unsichtbare Vokale"],
   ["p","Zwischen zwei Konsonanten ohne Vokalzeichen steht ein kurzes **o**. Ein einzelner Konsonant vor einer weiteren Silbe bekommt oft ein kurzes **a**."],
   ["ex",[
     ["คน","khon","Mensch"],
     ["รถ","rót","Auto"],
     ["สบาย","sà-baai","angenehm, wohl"],
     ["ตลาด","dtà-làat","Markt"]
   ]],
   ["h","Führendes ห und อ"],
   ["p","Ein stummes ห vor einem Klinger (ง น ม ย ร ล ว) macht ihn zur Hochklasse. In vier Wörtern übernimmt ein stummes อ diese Rolle (Mittelklasse)."],
   ["ex",[
     ["หมา","mǎa","Hund"],
     ["ไหม","mǎi","Fragewort"],
     ["หรือ","rʉ̌ʉ","oder"],
     ["อยู่, อยาก, อย่า, อย่าง","yùu, yàak, yàa, yàang","sein, wollen, nicht!, Art"]
   ]],
   ["h","Konsonantenverbindungen"],
   ["p","Erlaubt sind nur Verbindungen mit ร, ล oder ว an zweiter Stelle. Der Ton richtet sich nach dem ersten Konsonanten."],
   ["ex",[
     ["ปลา","bplaa","Fisch"],
     ["กลับ","glàp","zurückkehren"],
     ["ขวา","khwǎa","rechts"],
     ["ตรง","dtrong","gerade, genau"]
   ]],
   ["h","Weitere Zeichen"],
   ["tbl",["Zeichen","Funktion","Beispiel"],[
     ["อ็","kürzt den Vokal","เล็ก lék „klein“, เป็น bpen „sein“"],
     ["อ์","macht einen Buchstaben stumm","เบียร์ bia „Bier“, จันทร์ jan „Mond“"],
     ["ๆ","wiederholt das Wort davor","ช้าๆ cháa-cháa „langsam“"],
     ["ฯ","kürzt ab","กรุงเทพฯ „Bangkok“"]
   ]],
   ["p","Daneben gibt es seltene Buchstaben aus Pali und Sanskrit, etwa ศ und ษ (s), ณ (n), ญ (y), ธ (th) und ภ (ph). Lerne sie einfach mit den Wörtern, in denen sie vorkommen."],
   ["tip","Damit kennst du alle wichtigen Leseregeln. Ab Woche 9 gibt es jede Woche eine Lese-Ecke: erst selbst lesen, dann auflösen."]
  ]},
  {k:"gram", t:"Wollen, nehmen, können", b:[
   ["pat","อยาก + Verb = etwas tun wollen"],
   ["ex",[
     ["ผมอยากกินส้มตำ","phǒm yàak gin sôm-dtam","Ich will Papayasalat essen."],
     ["อยากไปทะเล","yàak bpai thá-lee","Ich möchte ans Meer."]
   ]],
   ["pat","เอา + Nomen = etwas nehmen"],
   ["ex",[
     ["เอาอันนี้","ao an-níi","Ich nehme das hier."],
     ["ไม่เอาครับ","mâi ao khráp","Nein danke."]
   ]],
   ["tip","✗ อยากข้าวผัด – อยาก braucht ein Verb. Richtig: อยากกินข้าวผัด, เอาข้าวผัด oder อยากได้ + Nomen („haben wollen“): อยากได้รถใหม่.","Typischer Fehler"],
   ["pat","Verb + ได้ = können, dürfen"],
   ["ex",[
     ["พูดไทยได้นิดหน่อย","phûut thai dâi nít-nɔ̀i","Ich kann ein bisschen Thai."],
     ["จ่ายบัตรได้ไหม","jàai bàt dâi mǎi","Kann man mit Karte zahlen?"]
   ]],
   ["pat","Verb + เป็น = gelernt haben, wissen wie"],
   ["ex",[
     ["ว่ายน้ำเป็นไหม","wâai-náam bpen mǎi","Kannst du schwimmen?"],
     ["ขับรถไม่เป็น","khàp rót mâi bpen","Ich kann nicht Auto fahren."]
   ]],
   ["p","Verneint wird hinter dem Verb: ไปไม่ได้ – „Ich kann nicht hingehen.“"]
  ]},
  {k:"gefuehl", t:"Weich bitten: ขอ, ช่วย, หน่อย", b:[
   ["p","Thais bitten gern sanft und indirekt. Ein paar kleine Wörter machen aus einem Befehl eine freundliche Bitte."],
   ["pat","ขอ + Nomen (+ หน่อย) = Ich hätte gern …"],
   ["ex",[["ขอเมนูหน่อยครับ","khɔ̌ɔ mee-nuu nɔ̀i khráp","Die Karte, bitte."]]],
   ["pat","ช่วย + Verb + หน่อย = Könntest du bitte …"],
   ["ex",[["ช่วยพูดช้าๆ หน่อยครับ","chûay phûut cháa-cháa nɔ̀i khráp","Könntest du bitte langsam sprechen?"]]],
   ["pat","… ด้วย = bitte (bei Dienstleistungen)"],
   ["ex",[["เก็บเงินด้วยค่ะ","gèp ngən dûay khâ","Die Rechnung, bitte."]]],
   ["pat","อย่า + Verb = nicht …! (Verbot)"],
   ["ex",[["อย่าลืมนะ","yàa lʉʉm ná","Vergiss es nicht, ja?"]]],
   ["tip","หน่อย heißt wörtlich „ein bisschen“ und verkleinert die Bitte – ähnlich wie das deutsche „mal“: „Gib mir mal …“. Dahinter steht เกรงใจ (greeng-jai): anderen nicht zur Last fallen wollen.","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Bestellen am Straßenstand", b:[
   ["dlg",[
     ["Koch","รับอะไรครับ","ráp à-rai khráp","Was möchtest du?"],
     ["Nit","ขอผัดกะเพราหมูหนึ่งที่ค่ะ ไม่เผ็ดนะคะ","khɔ̌ɔ phàt-gà-phrao mǔu nʉ̀ng thîi khâ. mâi phèt ná khá","Einmal Schwein mit Thai-Basilikum, bitte – nicht scharf, ja?"],
     ["Koch","ใส่ไข่ดาวไหมครับ","sài khài-daao mǎi khráp","Mit Spiegelei?"],
     ["Nit","เอาค่ะ แล้วก็ไม่ใส่ผักชีนะคะ","ao khâ. lɛ́ɛo-gɔ̂ɔ mâi sài phàk-chii ná khá","Ja, gern. Und bitte ohne Koriander."],
     ["Koch","ทานที่นี่หรือใส่กล่องครับ","thaan thîi-nîi rʉ̌ʉ sài glɔ̀ng khráp","Hier essen oder zum Mitnehmen?"],
     ["Nit","ใส่กล่องค่ะ","sài glɔ̀ng khâ","Zum Mitnehmen."]
   ]],
   ["voc",[
     ["ผัดกะเพรา","phàt-gà-phrao","mit Thai-Basilikum gebraten"],
     ["หมู / ไก่","mǔu / gài","Schwein / Huhn"],
     ["ไข่ดาว","khài-daao","Spiegelei (wörtl. Stern-Ei)"],
     ["ใส่","sài","hineintun; anziehen"],
     ["ไม่ใส่ …","mâi sài","ohne …"],
     ["ผักชี","phàk-chii","Koriander"],
     ["ที่นี่","thîi-nîi","hier"],
     ["ใส่กล่อง","sài glɔ̀ng","zum Mitnehmen (in der Box)"],
     ["เก็บเงินด้วย","gèp ngən dûay","die Rechnung, bitte"]
   ]],
   ["tip","ไข่ดาว heißt wörtlich „Stern-Ei“. Thai steckt voller solcher Bildwörter – achte beim Lernen auf die Einzelteile.","Sprachgefühl"]
  ]}
 ],
 quiz:[
  ["mc","„Ich will Papayasalat essen.“",["ผมอยากส้มตำ","ผมอยากกินส้มตำ","ผมกินอยากส้มตำ"],1,"อยาก braucht ein Verb."],
  ["mc","„Ich kann schwimmen.“ (gelernt)",["ว่ายน้ำได้เป็น","ว่ายน้ำเป็น","เป็นว่ายน้ำ"],1,"Gelernte Fähigkeiten: Verb + เป็น."],
  ["mc","Wie machst du eine Bitte weicher?",["mit หน่อย am Ende","mit ไม่ am Anfang","mit ไหม vor dem Verb"],0,"หน่อย verkleinert die Bitte."],
  ["mc","„Die Rechnung, bitte.“",["เก็บเงินด้วย","เงินเก็บไหม","อย่าเก็บเงิน"],0,"เก็บเงิน = Geld einsammeln; ด้วย = bitte."],
  ["mc","Wie liest man หมา?",["maa (Mittelton)","mǎa (steigend)","máa (hoch)"],1,"Das stumme ห macht ม zur Hochklasse: steigend."],
  ["mc","Welches Zeichen macht einen Buchstaben stumm?",["ๆ","อ์","อ็","ฯ"],1,"Das Zeichen การันต์ (อ์) macht stumm, wie in เบียร์."],
  ["ord","Könntest du bitte langsam sprechen?",[["ช่วย","chûay"],["พูด","phûut"],["ช้าๆ","cháa-cháa"],["หน่อย","nɔ̀i"]],"ช่วย + Verb + หน่อย."],
  ["ord","Ich kann ein bisschen Thai.",[["พูด","phûut"],["ไทย","thai"],["ได้","dâi"],["นิดหน่อย","nít-nɔ̀i"]],"ได้ steht hinter dem Verb (und seinem Objekt)."]
 ]},
{n:9, lvl:"A1", key:["จะไปแล้วนะ","jà bpai lɛ́ɛo ná","„Ich geh dann mal, ja?“"],
 title:"Zeit ohne Zeitformen",
 sub:"Zukunft, Verlauf und „schon“ – ganz ohne Verbformen.",
 goals:["über Pläne sprechen","ausdrücken, was gerade passiert oder schon passiert ist","Zeitwörter sicher einsetzen"],
 lessons:[
  {k:"gram", t:"จะ, กำลัง, แล้ว", b:[
   ["p","Thai-Verben haben keine Zeitformen. Wann etwas passiert, zeigen Zeitwörter und drei kleine Marker."],
   ["pat","จะ + Verb = Zukunft, Absicht"],
   ["ex",[["พรุ่งนี้ผมจะไปเชียงใหม่","phrûng-níi phǒm jà bpai chiang-mài","Morgen fahre ich nach Chiang Mai."]]],
   ["pat","กำลัง + Verb (+ อยู่) = gerade dabei"],
   ["ex",[["เขากำลังกินข้าวอยู่","khǎo gam-lang gin khâao yùu","Er/Sie isst gerade."]]],
   ["pat","Verb + แล้ว = schon, erledigt"],
   ["ex",[["ผมกินแล้ว","phǒm gin lɛ́ɛo","Ich habe schon gegessen."]]],
   ["pat","Zeitwort + Satz = Vergangenheit aus dem Kontext"],
   ["ex",[["เมื่อวานผมไปตลาด","mʉ̂a-waan phǒm bpai dtà-làat","Gestern bin ich zum Markt gegangen."]]],
   ["voc",[
     ["วันนี้","wan-níi","heute"],
     ["พรุ่งนี้","phrûng-níi","morgen"],
     ["เมื่อวาน","mʉ̂a-waan","gestern"],
     ["ตอนนี้","dtɔɔn-níi","jetzt"],
     ["เดี๋ยว","dǐao","gleich, Moment"],
     ["อาทิตย์หน้า","aa-thít nâa","nächste Woche"],
     ["อาทิตย์ที่แล้ว","aa-thít thîi-lɛ́ɛo","letzte Woche"]
   ]],
   ["tip","Steht schon ein Zeitwort im Satz, fällt จะ oft weg: พรุ่งนี้ไปทะเล – „Morgen geht’s ans Meer.“"]
  ]},
  {k:"gefuehl", t:"แล้ว – „jetzt ist es so“", b:[
   ["p","แล้ว ist kein Vergangenheitszeichen. Es markiert, dass sich ein Zustand **geändert hat** – jetzt ist es anders als vorher."],
   ["ex",[
     ["อิ่มแล้ว","ìm lɛ́ɛo","Ich bin (jetzt) satt."],
     ["ฝนตกแล้ว","fǒn dtòk lɛ́ɛo","Jetzt regnet es."],
     ["ดีขึ้นแล้ว","dii khʉ̂n lɛ́ɛo","Es geht (mir) schon besser."],
     ["จะไปแล้วนะ","jà bpai lɛ́ɛo ná","Ich geh dann mal, ja?"]
   ]],
   ["tip","Denk an das deutsche „schon“ oder „jetzt“. Deshalb passt แล้ว sogar zur Zukunft: จะไปแล้ว – „Ich bin (jetzt) im Begriff zu gehen.“","Sprachgefühl"],
   ["p","Zeit ist im Thai Kontextsache. Statt jede Aussage zu datieren, setzt man einmal eine Zeitangabe – alles danach gilt für diesen Zeitraum."]
  ]},
  {k:"kontext", t:"Pläne fürs Wochenende", b:[
   ["dlg",[
     ["Nit","เสาร์นี้จะทำอะไรคะ","sǎo níi jà tham à-rai khá","Was machst du diesen Samstag?"],
     ["Tom","จะไปทะเลกับเพื่อนครับ คุณล่ะ","jà bpai thá-lee gàp phʉ̂an khráp. khun lâ","Ich fahre mit Freunden ans Meer. Und du?"],
     ["Nit","ยังไม่รู้ค่ะ อาจจะไปดูหนัง","yang mâi rúu khâ. àat-jà bpai duu nǎng","Weiß ich noch nicht. Vielleicht gehe ich ins Kino."],
     ["Tom","ไปด้วยกันไหมครับ","bpai dûay-gan mǎi khráp","Willst du mitkommen?"],
     ["Nit","ได้ค่ะ ไปกี่โมงคะ","dâi khâ. bpai gìi moong khá","Gern! Um wie viel Uhr?"],
     ["Tom","เจ็ดโมงเช้าครับ","jèt moong cháao khráp","Um sieben Uhr morgens."]
   ]],
   ["voc",[
     ["กับ","gàp","mit"],
     ["ด้วยกัน","dûay-gan","zusammen"],
     ["ดูหนัง","duu nǎng","einen Film sehen"],
     ["อาจจะ","àat-jà","vielleicht"],
     ["ยังไม่รู้","yang mâi rúu","weiß noch nicht"],
     ["ทะเล","thá-lee","Meer"]
   ]],
   ["voc",[
     ["วันจันทร์","wan jan","Montag"],
     ["วันอังคาร","wan ang-khaan","Dienstag"],
     ["วันพุธ","wan phút","Mittwoch"],
     ["วันพฤหัส","wan phá-rʉ́-hàt","Donnerstag"],
     ["วันศุกร์","wan sùk","Freitag"],
     ["วันเสาร์","wan sǎo","Samstag"],
     ["วันอาทิตย์","wan aa-thít","Sonntag"]
   ]],
   ["tip","Jeder Wochentag hat in Thailand eine eigene Farbe – Montag ist Gelb. Viele Thais kennen die Farbe ihres Geburts-Wochentags.","Kultur"]
  ]},
  {k:"lesen", t:"Lese-Ecke 1", b:[
   ["p","Lies jeden Satz zuerst laut, bevor du auflöst. Achte auf Konsonantenklasse, Vokallänge und Tonzeichen."],
   ["read",[
     ["พรุ่งนี้ผมจะไปตลาด","phrûng-níi phǒm jà bpai dtà-làat","Morgen gehe ich zum Markt."],
     ["ตอนนี้ฝนตก","dtɔɔn-níi fǒn dtòk","Jetzt regnet es."],
     ["เขากำลังทำงานอยู่","khǎo gam-lang tham-ngaan yùu","Er/Sie arbeitet gerade."],
     ["กินข้าวแล้ว","gin khâao lɛ́ɛo","(Ich habe) schon gegessen."],
     ["เสาร์นี้ไปทะเลกับเพื่อน","sǎo níi bpai thá-lee gàp phʉ̂an","Diesen Samstag geht’s mit Freunden ans Meer."],
     ["จะไปแล้วนะ","jà bpai lɛ́ɛo ná","Ich geh dann mal, ja?"]
   ]]
  ]}
 ],
 quiz:[
  ["mc","„Morgen fahre ich nach Chiang Mai.“",["พรุ่งนี้ผมจะไปเชียงใหม่","ผมไปแล้วเชียงใหม่พรุ่งนี้","พรุ่งนี้ผมกำลังไปแล้ว"],0,"Zukunft: Zeitwort + จะ + Verb."],
  ["mc","อิ่มแล้ว bedeutet …",["„Ich war satt.“","„Ich bin (jetzt) satt.“","„Ich werde satt sein.“"],1,"แล้ว markiert einen neuen Zustand."],
  ["mc","„Er isst gerade.“",["เขาจะกินข้าว","เขากำลังกินข้าวอยู่","เขากินข้าวแล้ว"],1,"Verlauf: กำลัง + Verb (+ อยู่)."],
  ["mc","Was bedeutet เมื่อวาน?",["morgen","gestern","heute","jetzt"],1,"เมื่อวาน (mʉ̂a-waan) = gestern."],
  ["mc","Welche Aussage stimmt?",["Thai-Verben haben eine Vergangenheitsform","Zeit ergibt sich aus Zeitwörtern und Markern wie จะ und แล้ว","แล้ว bedeutet immer Vergangenheit"],1,"Thai markiert Zeit über Kontext und Marker."],
  ["ord","Morgen gehe ich zum Markt.",[["พรุ่งนี้","phrûng-níi"],["ผม","phǒm"],["จะ","jà"],["ไป","bpai"],["ตลาด","dtà-làat"]],"Zeitwörter stehen meist vorn – am Ende geht auch.",[[1,2,3,4,0]]],
  ["ord","Ich habe schon gegessen.",[["ผม","phǒm"],["กิน","gin"],["ข้าว","khâao"],["แล้ว","lɛ́ɛo"]],"แล้ว steht am Ende."]
 ]},
{n:10, lvl:"A1", key:["กินข้าวหรือยัง","gin khâao rʉ̌ʉ yang","„Schon gegessen?“"],
 title:"Schon & noch nicht",
 sub:"Über Erfahrungen sprechen, „noch nicht“ und „gerade erst“.",
 goals:["über Erfahrungen sprechen","„schon / noch nicht“ fragen und beantworten","Vergangenes verneinen"],
 lessons:[
  {k:"gram", t:"เคย, ยัง, เพิ่ง und ไม่ได้", b:[
   ["pat","เคย + Verb = schon einmal (Erfahrung)"],
   ["ex",[
     ["เคยไปภูเก็ตไหม","khəəi bpai phuu-gèt mǎi","Warst du schon mal in Phuket?"],
     ["ไม่เคย","mâi khəəi","Noch nie."]
   ]],
   ["pat","… หรือยัง = schon? → แล้ว (ja, schon) / ยัง (noch nicht)"],
   ["ex",[
     ["ถึงหรือยัง","thʉ̌ng rʉ̌ʉ yang","Bist du schon angekommen?"],
     ["ถึงแล้ว","thʉ̌ng lɛ́ɛo","Ja, bin da."],
     ["ยังครับ","yang khráp","Noch nicht."]
   ]],
   ["pat","ยังไม่ + Verb = noch nicht"],
   ["ex",[["ยังไม่ได้กินข้าว","yang mâi dâi gin khâao","Ich habe noch nicht gegessen."]]],
   ["pat","เพิ่ง + Verb = gerade erst"],
   ["ex",[["ผมเพิ่งมาถึง","phǒm phə̂ng maa thʉ̌ng","Ich bin gerade erst angekommen."]]],
   ["pat","ไม่ได้ + Verb = (etwas) nicht getan haben"],
   ["ex",[["เมื่อวานไม่ได้ไปทำงาน","mʉ̂a-waan mâi dâi bpai tham-ngaan","Gestern war ich nicht arbeiten."]]]
  ]},
  {k:"gefuehl", t:"„Schon gegessen?“ – Fürsorge statt Neugier", b:[
   ["p","กินข้าวหรือยัง gehört zu den häufigsten Sätzen in Thailand. Er zeigt Fürsorge, ähnlich wie „Wie geht’s?“. Eine kurze Antwort genügt."],
   ["ex",[
     ["กินข้าวหรือยัง","gin khâao rʉ̌ʉ yang","Schon gegessen?"],
     ["กินแล้ว","gin lɛ́ɛo","Ja, schon."],
     ["ยังเลย","yang ləəi","Noch gar nicht."]
   ]],
   ["p","Feiner Unterschied: ไม่ได้ … sagt, dass du etwas (diesmal) nicht getan hast. ไม่เคย … betont, dass dir die Erfahrung ganz fehlt."],
   ["ex",[
     ["ไม่ได้กินเผ็ด","mâi dâi gin phèt","Ich habe (diesmal) nicht scharf gegessen."],
     ["ไม่เคยกินทุเรียน","mâi khəəi gin thú-rian","Ich habe noch nie Durian gegessen."]
   ]],
   ["tip","ไม่ได้ widerspricht auch einer Annahme: ผมไม่ได้โกรธ (phǒm mâi dâi gròot) – „Ich bin doch gar nicht sauer.“","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Erfahrungen austauschen", b:[
   ["dlg",[
     ["Nit","มาเมืองไทยกี่ครั้งแล้วคะ","maa mʉang thai gìi khráng lɛ́ɛo khá","Wie oft warst du schon in Thailand?"],
     ["Tom","ครั้งที่สามครับ","khráng thîi sǎam khráp","Das ist das dritte Mal."],
     ["Nit","เคยไปเชียงใหม่ไหมคะ","khəəi bpai chiang-mài mǎi khá","Warst du schon mal in Chiang Mai?"],
     ["Tom","ยังไม่เคยครับ แต่อยากไปมาก","yang mâi khəəi khráp. dtɛ̀ɛ yàak bpai mâak","Noch nie, aber ich will unbedingt hin."],
     ["Nit","แล้วเคยกินข้าวซอยไหมคะ","lɛ́ɛo khəəi gin khâao-sɔɔi mǎi khá","Und hast du schon mal Khao Soi gegessen?"],
     ["Tom","เพิ่งกินเมื่อวานครับ อร่อยมาก","phə̂ng gin mʉ̂a-waan khráp. à-rɔ̀i mâak","Erst gestern! Sehr lecker."]
   ]],
   ["voc",[
     ["เคย","khəəi","schon einmal (getan haben)"],
     ["ไม่เคย","mâi khəəi","noch nie"],
     ["ครั้ง","khráng","Mal"],
     ["ครั้งที่ …","khráng thîi","das …-te Mal"],
     ["แต่","dtɛ̀ɛ","aber"],
     ["เมืองไทย","mʉang thai","Thailand (umgangssprachlich)"],
     ["ถึง","thʉ̌ng","ankommen; bis"],
     ["เพิ่ง","phə̂ng","gerade erst"]
   ]],
   ["tip","Ordnungszahlen sind einfach: ที่ + Zahl. ที่หนึ่ง (der Erste), ที่สอง (der Zweite) …"]
  ]},
  {k:"lesen", t:"Lese-Ecke 2", b:[
   ["read",[
     ["เคยไปภูเก็ตไหม","khəəi bpai phuu-gèt mǎi","Warst du schon mal in Phuket?"],
     ["ยังไม่เคยไป","yang mâi khəəi bpai","Noch nie (dort gewesen)."],
     ["ผมเพิ่งมาถึง","phǒm phə̂ng maa thʉ̌ng","Ich bin gerade erst angekommen."],
     ["กินข้าวหรือยัง","gin khâao rʉ̌ʉ yang","Schon gegessen?"],
     ["ยังไม่ได้กินเลย","yang mâi dâi gin ləəi","Ich habe noch gar nicht gegessen."],
     ["มาเมืองไทยครั้งที่สาม","maa mʉang thai khráng thîi sǎam","Ich bin zum dritten Mal in Thailand."]
   ]]
  ]}
 ],
 quiz:[
  ["mc","„Warst du schon mal in Phuket?“",["ไปภูเก็ตแล้วไหม","เคยไปภูเก็ตไหม","จะไปภูเก็ตไหม"],1,"Erfahrung: เคย + Verb."],
  ["mc","Antwort auf ถึงหรือยัง, wenn du noch nicht da bist:",["ถึงแล้ว","ยัง","เคย"],1,"ยัง allein heißt „noch nicht“."],
  ["mc","„Ich bin gerade erst angekommen.“",["ผมเพิ่งมาถึง","ผมเคยมาถึง","ผมยังมาถึง"],0,"Gerade erst: เพิ่ง + Verb."],
  ["mc","ไม่เคยกินทุเรียน bedeutet …",["„Ich esse keine Durian.“","„Ich habe noch nie Durian gegessen.“","„Ich habe die Durian nicht gegessen.“"],1,"ไม่เคย = noch nie."],
  ["mc","กินข้าวหรือยัง ist vor allem …",["eine Einladung zum Essen","ein fürsorglicher Gruß","eine Beschwerde"],1,"Eine kurze Antwort reicht."],
  ["ord","Ich habe noch nicht gegessen.",[["ยัง","yang"],["ไม่ได้","mâi dâi"],["กิน","gin"],["ข้าว","khâao"]],"ยังไม่ได้ + Verb."],
  ["ord","Gestern war ich nicht arbeiten.",[["เมื่อวาน","mʉ̂a-waan"],["ไม่ได้","mâi dâi"],["ไป","bpai"],["ทำงาน","tham-ngaan"]],"ไม่ได้ + Verb verneint Vergangenes.",[[1,2,3,0]]]
 ]},
{n:11, lvl:"A1", key:["เลี้ยวซ้ายตรงนี้","líao sáai dtrong níi","„Hier links abbiegen.“"],
 title:"Wo & wohin",
 sub:"Ortsangaben, Richtungsverben und Taxi fahren.",
 goals:["sagen, wo etwas ist","Richtungsverben mit ไป und มา nutzen","einem Taxi den Weg weisen"],
 lessons:[
  {k:"gram", t:"Ortsangaben mit อยู่", b:[
   ["pat","A + อยู่ + Ortswort + B"],
   ["voc",[
     ["ใน","nai","in"],
     ["บน","bon","auf"],
     ["ใต้","dtâi","unter"],
     ["ข้างๆ","khâang-khâang","neben"],
     ["หน้า","nâa","vor"],
     ["หลัง","lǎng","hinter"],
     ["ใกล้","glâi","nahe bei"],
     ["ไกล","glai","weit weg"],
     ["ตรงข้าม","dtrong-khâam","gegenüber"],
     ["ระหว่าง","rá-wàang","zwischen"]
   ]],
   ["ex",[
     ["กุญแจอยู่บนโต๊ะ","gun-jɛɛ yùu bon dtó","Der Schlüssel liegt auf dem Tisch."],
     ["ร้านกาแฟอยู่ข้างๆ ธนาคาร","ráan gaa-fɛɛ yùu khâang-khâang thá-naa-khaan","Das Café ist neben der Bank."],
     ["บ้านผมอยู่ใกล้รถไฟฟ้า","bâan phǒm yùu glâi rót-fai-fáa","Meine Wohnung ist nah am Skytrain."]
   ]],
   ["tip","ใกล้ (glâi, fallend) heißt „nah“, ไกล (glai, Mittelton) heißt „weit“. Das Gegenteil liegt nur im Ton – übe beide laut!","Typischer Fehler"],
   ["ex",[
     ["ไกลไหม","glai mǎi","Ist es weit?"],
     ["ไม่ไกล เดินไปได้","mâi glai, dəən bpai dâi","Nicht weit, man kann hinlaufen."]
   ]]
  ]},
  {k:"gefuehl", t:"ไป und มา – hin und her", b:[
   ["p","ไป („gehen“) und มา („kommen“) hängen sich an andere Verben und zeigen die Richtung: vom Sprecher weg (ไป) oder zu ihm hin (มา). Das funktioniert wie das deutsche „hin“ und „her“."],
   ["ex",[
     ["เอามา","ao maa","herbringen (nehmen + kommen)"],
     ["เอาไป","ao bpai","mitnehmen, hinbringen"],
     ["กลับมา","glàp maa","zurückkommen"],
     ["กลับไป","glàp bpai","zurückgehen"],
     ["ขึ้นไป","khʉ̂n bpai","hinaufgehen"],
     ["เดินไป","dəən bpai","hinlaufen"]
   ]],
   ["p","Auch die Zeit hat eine Richtung: ไป zeigt oft „weg, verloren“, มา „bis jetzt“."],
   ["ex",[
     ["หายไป","hǎai bpai","verschwunden"],
     ["เรียนมาสองปี","rian maa sɔ̌ɔng bpii","(ich) lerne seit zwei Jahren"]
   ]],
   ["tip","Am Telefon: กำลังไป – „Bin unterwegs (zu dir)“. เดี๋ยวกลับมา – „Bin gleich zurück (hier)“.","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Mit dem Taxi", b:[
   ["dlg",[
     ["Tom","ไปสยามไหมครับ","bpai sà-yǎam mǎi khráp","Fahren Sie nach Siam?"],
     ["Fahrer","ไปครับ","bpai khráp","Ja."],
     ["Tom","เปิดมิเตอร์ด้วยครับ","bpə̀ət mí-dtəə dûay khráp","Bitte mit Taxameter."],
     ["Tom","ตรงไปครับ แล้วเลี้ยวซ้ายที่ไฟแดง","dtrong bpai khráp. lɛ́ɛo líao sáai thîi fai-dɛɛng","Geradeaus, dann an der Ampel links."],
     ["Fahrer","ตรงนี้ไหมครับ","dtrong níi mǎi khráp","Hier?"],
     ["Tom","เลยไปอีกนิดครับ จอดตรงนี้ครับ","ləəi bpai ìik nít khráp. jɔ̀ɔt dtrong níi khráp","Noch ein Stück weiter … hier halten, bitte."]
   ]],
   ["voc",[
     ["ตรงไป","dtrong bpai","geradeaus"],
     ["เลี้ยวซ้าย","líao sáai","links abbiegen"],
     ["เลี้ยวขวา","líao khwǎa","rechts abbiegen"],
     ["ไฟแดง","fai-dɛɛng","Ampel (wörtl. rotes Licht)"],
     ["จอด","jɔ̀ɔt","anhalten, parken"],
     ["ตรงนี้","dtrong níi","genau hier"],
     ["เลยไป","ləəi bpai","vorbei, weiter"],
     ["รถไฟฟ้า","rót-fai-fáa","Skytrain, Bahn"]
   ]],
   ["tip","In Bangkok fragt man vor dem Einsteigen: ไป … ไหม? („Fahren Sie nach …?“) – und bittet um das Taxameter.","Kultur"]
  ]},
  {k:"lesen", t:"Lese-Ecke 3", b:[
   ["read",[
     ["ห้องน้ำอยู่ข้างหลัง","hɔ̂ng-náam yùu khâang-lǎng","Die Toilette ist hinten."],
     ["ร้านกาแฟอยู่ตรงข้ามธนาคาร","ráan gaa-fɛɛ yùu dtrong-khâam thá-naa-khaan","Das Café ist gegenüber der Bank."],
     ["ไม่ไกล เดินไปได้","mâi glai, dəən bpai dâi","Nicht weit, man kann hinlaufen."],
     ["เลี้ยวขวาที่ไฟแดง","líao khwǎa thîi fai-dɛɛng","An der Ampel rechts abbiegen."],
     ["จอดตรงนี้ครับ","jɔ̀ɔt dtrong níi khráp","Hier halten, bitte."],
     ["เดี๋ยวกลับมานะ","dǐao glàp maa ná","Bin gleich zurück!"]
   ]]
  ]}
 ],
 quiz:[
  ["mc","„Der Schlüssel liegt auf dem Tisch.“",["กุญแจอยู่บนโต๊ะ","กุญแจบนอยู่โต๊ะ","กุญแจเป็นบนโต๊ะ"],0,"A + อยู่ + Ortswort + B."],
  ["mc","Was heißt „weit weg“?",["ใกล้ (glâi)","ไกล (glai)"],1,"Nur der Ton unterscheidet nah und weit."],
  ["mc","„herbringen“",["เอาไป","เอามา","ไปมา"],1,"มา = zum Sprecher hin."],
  ["mc","Wie sagst du dem Taxifahrer „Hier halten“?",["จอดตรงนี้","ตรงไป","เลยไป"],0,"จอด = anhalten."],
  ["mc","เรียนมาสองปี bedeutet …",["„Ich lerne seit zwei Jahren.“","„Ich werde zwei Jahre lernen.“","„Ich komme in zwei Jahren.“"],0,"มา = „bis jetzt“."],
  ["ord","Das Café ist neben der Bank.",[["ร้านกาแฟ","ráan gaa-fɛɛ"],["อยู่","yùu"],["ข้างๆ","khâang-khâang"],["ธนาคาร","thá-naa-khaan"]],"A + อยู่ + Ortswort + B."],
  ["ord","An der Ampel links abbiegen.",[["เลี้ยวซ้าย","líao sáai"],["ที่","thîi"],["ไฟแดง","fai-dɛɛng"]],"ที่ = an, bei."]
 ]},
{n:12, lvl:"A1", key:["ต้องไปแล้ว","dtɔ̂ng bpai lɛ́ɛo","„Ich muss los.“"],
 title:"Müssen & Verbketten",
 sub:"Modalwörter und wie Thai Verben zu ganzen Abläufen reiht.",
 goals:["Pflichten, Ratschläge und Verbote ausdrücken","Verbketten bilden und verstehen","in der Apotheke Beschwerden beschreiben"],
 lessons:[
  {k:"gram", t:"Modalwörter", b:[
   ["p","Modalwörter stehen vor dem Verb – die Verneinung davor."],
   ["ex",[
     ["ต้องไปแล้ว","dtɔ̂ng bpai lɛ́ɛo","Ich muss jetzt los. (ต้อง = müssen)"],
     ["ไม่ต้องห่วง","mâi dtɔ̂ng hùang","Keine Sorge. (ไม่ต้อง = nicht müssen)"],
     ["ควรพักผ่อน","khuan phák-phɔ̀n","Du solltest dich ausruhen. (ควร = sollte)"],
     ["อาจจะฝนตก","àat-jà fǒn dtòk","Es könnte regnen. (อาจจะ = vielleicht)"],
     ["คงจะมาสาย","khong-jà maa sǎai","Er kommt wohl zu spät. (คงจะ = wahrscheinlich)"],
     ["ห้ามสูบบุหรี่","hâam sùup bù-rìi","Rauchen verboten. (ห้าม = verboten)"]
   ]],
   ["p","Ausnahme: Bei อาจจะ steht ไม่ dahinter – อาจจะไม่มา, „kommt vielleicht nicht“."],
   ["tip","ห้าม siehst du ständig auf Schildern: ห้ามจอด (Parken verboten), ห้ามเข้า (kein Zutritt)."]
  ]},
  {k:"gefuehl", t:"Verbketten: Thai erzählt wie ein Film", b:[
   ["p","Wo Deutsch Nebensätze oder Präpositionen braucht, reiht Thai Verben aneinander – in der Reihenfolge, in der die Handlung passiert. Wie Einstellungen in einem Film."],
   ["ex",[
     ["ไปซื้อกาแฟ","bpai sʉ́ʉ gaa-fɛɛ","Kaffee kaufen gehen (gehen + kaufen)"],
     ["เดินไปทำงาน","dəən bpai tham-ngaan","zu Fuß zur Arbeit gehen (laufen + gehen + arbeiten)"],
     ["ขับรถไปส่งเพื่อน","khàp rót bpai sòng phʉ̂an","einen Freund mit dem Auto hinbringen"],
     ["ไปซื้อกาแฟมาให้หน่อย","bpai sʉ́ʉ gaa-fɛɛ maa hâi nɔ̀i","Hol mir bitte einen Kaffee. (gehen + kaufen + kommen + geben)"]
   ]],
   ["p","ให้ am Ende einer Kette heißt „für jemanden“:"],
   ["ex",[["ทำกับข้าวให้ลูก","tham gàp-khâao hâi lûuk","für das Kind kochen"]]],
   ["tip","Bei langen Sätzen: Folge den Verben. Sie erzählen den Ablauf von links nach rechts.","Sprachgefühl"]
  ]},
  {k:"kontext", t:"In der Apotheke", b:[
   ["dlg",[
     ["Apothekerin","เป็นอะไรคะ","bpen à-rai khá","Was fehlt Ihnen?"],
     ["Tom","ปวดหัวครับ แล้วก็เป็นไข้นิดหน่อย","bpùat-hǔa khráp. lɛ́ɛo-gɔ̂ɔ bpen khâi nít-nɔ̀i","Ich habe Kopfschmerzen und etwas Fieber."],
     ["Apothekerin","แพ้ยาอะไรไหมคะ","phɛ́ɛ yaa à-rai mǎi khá","Sind Sie gegen ein Medikament allergisch?"],
     ["Tom","ไม่แพ้ครับ","mâi phɛ́ɛ khráp","Nein."],
     ["Apothekerin","กินยานี้หลังอาหารนะคะ ต้องพักผ่อนเยอะๆ","gin yaa níi lǎng aa-hǎan ná khá. dtɔ̂ng phák-phɔ̀n yə́-yə́","Nehmen Sie das nach dem Essen. Sie müssen sich gut ausruhen."],
     ["Tom","ขอบคุณครับ","khɔ̀ɔp-khun khráp","Danke."]
   ]],
   ["voc",[
     ["ปวดหัว","bpùat-hǔa","Kopfschmerzen haben"],
     ["ปวดท้อง","bpùat-thɔ́ɔng","Bauchschmerzen haben"],
     ["เป็นไข้","bpen khâi","Fieber haben"],
     ["เป็นหวัด","bpen wàt","erkältet sein"],
     ["แพ้","phɛ́ɛ","allergisch sein"],
     ["ยา","yaa","Medikament"],
     ["ไม่สบาย","mâi sà-baai","krank sein, sich unwohl fühlen"],
     ["พักผ่อน","phák-phɔ̀n","sich ausruhen"]
   ]],
   ["tip","Mit เป็น beschreibst du Krankheiten, die man „hat“ (เป็นหวัด, เป็นไข้), mit ปวด Schmerzen (ปวดหัว, ปวดท้อง)."]
  ]},
  {k:"lesen", t:"Lese-Ecke 4", b:[
   ["read",[
     ["ต้องไปแล้ว","dtɔ̂ng bpai lɛ́ɛo","Ich muss jetzt los."],
     ["ไม่ต้องห่วงนะ","mâi dtɔ̂ng hùang ná","Mach dir keine Sorgen."],
     ["ห้ามสูบบุหรี่","hâam sùup bù-rìi","Rauchen verboten."],
     ["วันนี้อาจจะฝนตก","wan-níi àat-jà fǒn dtòk","Heute könnte es regnen."],
     ["ไปซื้อกาแฟมาให้หน่อย","bpai sʉ́ʉ gaa-fɛɛ maa hâi nɔ̀i","Hol mir bitte einen Kaffee."],
     ["ผมปวดหัวนิดหน่อย","phǒm bpùat-hǔa nít-nɔ̀i","Ich habe leichte Kopfschmerzen."]
   ]]
  ]}
 ],
 quiz:[
  ["mc","„Keine Sorge.“",["ไม่ต้องห่วง","ต้องไม่ห่วง","ห้ามห่วง"],0,"ไม่ต้อง = nicht müssen."],
  ["mc","„Es könnte regnen.“",["ต้องฝนตก","อาจจะฝนตก","ห้ามฝนตก"],1,"อาจจะ = vielleicht, könnte."],
  ["mc","ห้ามเข้า auf einem Schild bedeutet …",["Eingang","kein Zutritt","Bitte eintreten"],1,"ห้าม = verboten, เข้า = hineingehen."],
  ["mc","Was beschreibt ไปซื้อกาแฟมาให้?",["Kaffee kaufen gehen und ihn jemandem bringen","Kaffee wegbringen","Kaffee ablehnen"],0,"Die Verben erzählen den Ablauf."],
  ["mc","„Ich habe Kopfschmerzen.“",["ผมเป็นหัว","ผมปวดหัว","ผมไข้หัว"],1,"Schmerzen: ปวด + Körperteil."],
  ["ord","Du solltest dich ausruhen.",[["คุณ","khun"],["ควร","khuan"],["พักผ่อน","phák-phɔ̀n"]],"Modalwort vor dem Verb."],
  ["ord","Ich gehe Kaffee kaufen.",[["ผม","phǒm"],["ไป","bpai"],["ซื้อ","sʉ́ʉ"],["กาแฟ","gaa-fɛɛ"]],"Erst gehen, dann kaufen – wie der Ablauf."]
 ]},
{n:13, lvl:"A1", key:["ตอนนี้กี่โมง","dtɔɔn-níi gìi moong","„Wie spät ist es?“"],
 title:"Uhrzeit & Alltag",
 sub:"Die thailändische Uhr, Häufigkeiten und dein Tagesablauf.",
 goals:["die Uhrzeit nach Thai-Art nennen","Häufigkeiten ausdrücken","deinen Tagesablauf erzählen"],
 lessons:[
  {k:"gram", t:"Die Thai-Uhr", b:[
   ["p","Im Alltag teilen Thais den Tag in Abschnitte mit eigenen Wörtern. Bei Fahrplänen und offiziellen Angaben gilt die 24-Stunden-Uhr mit นาฬิกา (naa-lí-gaa)."],
   ["tbl",["Uhrzeit","Thai","Umschrift"],[
     ["1–5 Uhr","ตีหนึ่ง … ตีห้า","dtii nʉ̀ng … dtii hâa"],
     ["6–11 Uhr","หกโมงเช้า … สิบเอ็ดโมง","hòk moong cháao … sìp-èt moong"],
     ["12 Uhr","เที่ยง","thîang"],
     ["13 Uhr","บ่ายโมง","bàai moong"],
     ["14–15 Uhr","บ่ายสองโมง, บ่ายสามโมง","bàai sɔ̌ɔng moong, bàai sǎam moong"],
     ["16–18 Uhr","สี่โมงเย็น … หกโมงเย็น","sìi moong yen … hòk moong yen"],
     ["19–23 Uhr","หนึ่งทุ่ม … ห้าทุ่ม","nʉ̀ng thûm … hâa thûm"],
     ["24 Uhr","เที่ยงคืน","thîang-khʉʉn"]
   ]],
   ["p","Halbe Stunde: ครึ่ง (khrʉ̂ng). Minuten: นาที (naa-thii)."],
   ["ex",[
     ["ตอนนี้กี่โมง","dtɔɔn-níi gìi moong","Wie spät ist es?"],
     ["สามทุ่มครึ่ง","sǎam thûm khrʉ̂ng","21:30 Uhr"],
     ["เจอกันบ่ายสามโมง","jəə gan bàai sǎam moong","Wir treffen uns um 15 Uhr."]
   ]],
   ["tip","โมง ahmt den Gong nach, der früher tagsüber geschlagen wurde, ทุ่ม die Trommel am Abend. ตี heißt „schlagen“.","Kultur"]
  ]},
  {k:"gefuehl", t:"Zeit vorn, Häufigkeit hinten", b:[
   ["p","Zeitpunkte stehen meist am Satzanfang, Häufigkeiten eher am Ende. Zusammen ergibt das ein klares Satzgerüst."],
   ["pat","(Zeitpunkt) + Subjekt + Verb + Objekt + (Häufigkeit)"],
   ["ex",[
     ["ตอนเช้าผมดื่มกาแฟทุกวัน","dtɔɔn cháao phǒm dʉ̀ʉm gaa-fɛɛ thúk wan","Morgens trinke ich jeden Tag Kaffee."],
     ["วันเสาร์ฉันไปตลาดบ่อยๆ","wan sǎo chǎn bpai dtà-làat bɔ̀i-bɔ̀i","Samstags gehe ich oft zum Markt."]
   ]],
   ["voc",[
     ["ทุกวัน","thúk wan","jeden Tag"],
     ["บ่อยๆ","bɔ̀i-bɔ̀i","oft"],
     ["บางที","baang-thii","manchmal; vielleicht"],
     ["ไม่ค่อย","mâi khɔ̂i","kaum, nicht so"],
     ["ไม่เคย","mâi khəəi","nie"],
     ["ตอนเช้า","dtɔɔn cháao","morgens"],
     ["ตอนเย็น","dtɔɔn yen","abends"],
     ["ตอนกลางคืน","dtɔɔn glaang-khʉʉn","nachts"]
   ]],
   ["tip","ไม่ค่อย ist das höfliche „eher nicht“: ไม่ค่อยเผ็ด („nicht so scharf“), ไม่ค่อยว่าง („hab gerade nicht so viel Zeit“). Thais mögen solche weichen Formulierungen.","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Mein Tag", b:[
   ["ex",[
     ["ผมตื่นนอนหกโมงครึ่ง","phǒm dtʉ̀ʉn-nɔɔn hòk moong khrʉ̂ng","Ich stehe um halb sieben auf."],
     ["อาบน้ำ แล้วก็กินข้าวเช้า","àap-náam, lɛ́ɛo-gɔ̂ɔ gin khâao-cháao","Ich dusche und frühstücke dann."],
     ["แปดโมงนั่งรถไฟฟ้าไปทำงาน","bpɛ̀ɛt moong nâng rót-fai-fáa bpai tham-ngaan","Um acht fahre ich mit dem Skytrain zur Arbeit."],
     ["เที่ยงกินข้าวกับเพื่อนร่วมงาน","thîang gin khâao gàp phʉ̂an-rûam-ngaan","Mittags esse ich mit Kollegen."],
     ["ห้าโมงเย็นเลิกงาน","hâa moong yen lə̂ək-ngaan","Um fünf ist Feierabend."],
     ["ตอนเย็นไม่ค่อยออกไปไหน","dtɔɔn yen mâi khɔ̂i ɔ̀ɔk bpai nǎi","Abends gehe ich kaum noch raus."],
     ["สี่ทุ่มเข้านอน","sìi thûm khâo-nɔɔn","Um zehn gehe ich schlafen."]
   ]],
   ["voc",[
     ["ตื่นนอน","dtʉ̀ʉn-nɔɔn","aufstehen"],
     ["อาบน้ำ","àap-náam","duschen, baden"],
     ["ข้าวเช้า","khâao-cháao","Frühstück"],
     ["นั่ง","nâng","sitzen; fahren mit"],
     ["เลิกงาน","lə̂ək-ngaan","Feierabend machen"],
     ["เพื่อนร่วมงาน","phʉ̂an-rûam-ngaan","Kollege, Kollegin"],
     ["เข้านอน","khâo-nɔɔn","schlafen gehen"]
   ]],
   ["tip","นั่ง („sitzen“) benutzt man für Verkehrsmittel, in denen man sitzt: นั่งรถไฟ (Zug fahren), นั่งเรือ (Boot fahren)."]
  ]},
  {k:"lesen", t:"Lese-Ecke 5", b:[
   ["read",[
     ["ตอนนี้กี่โมง","dtɔɔn-níi gìi moong","Wie spät ist es jetzt?"],
     ["บ่ายสองโมงครึ่ง","bàai sɔ̌ɔng moong khrʉ̂ng","Halb drei nachmittags (14:30)."],
     ["เจอกันสองทุ่มนะ","jəə gan sɔ̌ɔng thûm ná","Wir sehen uns um 20 Uhr, ja?"],
     ["ผมดื่มกาแฟทุกวัน","phǒm dʉ̀ʉm gaa-fɛɛ thúk wan","Ich trinke jeden Tag Kaffee."],
     ["ฉันไม่ค่อยดูทีวี","chǎn mâi khɔ̂i duu thii-wii","Ich schaue kaum fern."],
     ["ห้าโมงเย็นเลิกงาน","hâa moong yen lə̂ək-ngaan","Um 17 Uhr ist Feierabend."]
   ]]
  ]}
 ],
 quiz:[
  ["mc","Was ist บ่ายโมง?",["1 Uhr nachts","13 Uhr","11 Uhr"],1,"บ่าย = Nachmittag: บ่ายโมง = 13 Uhr."],
  ["mc","Wie heißt 20 Uhr?",["สองทุ่ม","แปดโมงเย็น","ตีสอง"],0,"Abends zählt man ทุ่ม: 19 Uhr = หนึ่งทุ่ม, 20 Uhr = สองทุ่ม."],
  ["mc","ตีสาม ist …",["3 Uhr nachts","15 Uhr","21 Uhr"],0,"ตี = nachts zwischen 1 und 5 Uhr."],
  ["mc","„Ich schaue kaum fern.“",["ฉันไม่เคยดูทีวี","ฉันไม่ค่อยดูทีวี","ฉันดูทีวีบ่อยๆ"],1,"ไม่ค่อย = kaum."],
  ["mc","Wo steht eine Häufigkeit wie ทุกวัน meistens?",["vor dem Verb","am Satzende","direkt nach dem Subjekt"],1,"Zeitpunkt vorn, Häufigkeit hinten."],
  ["ord","Morgens trinke ich Kaffee.",[["ตอนเช้า","dtɔɔn cháao"],["ผม","phǒm"],["ดื่ม","dʉ̀ʉm"],["กาแฟ","gaa-fɛɛ"]],"Zeitpunkt vorn.",[[1,2,3,0]]],
  ["ord","Wie spät ist es jetzt?",[["ตอนนี้","dtɔɔn-níi"],["กี่","gìi"],["โมง","moong"]],"กี่โมง = „wie viel Uhr“."]
 ]},
{n:14, lvl:"A1", key:["มีใหญ่กว่านี้ไหม","mii yài gwàa níi mǎi","„Gibt’s das größer?“"],
 title:"Vergleichen & Beschreiben",
 sub:"Größer, am besten, zu klein – und Verdopplung als Stilmittel.",
 goals:["Dinge vergleichen","Aussagen verstärken und abschwächen","beim Kleiderkauf nach Größen und Farben fragen"],
 lessons:[
  {k:"gram", t:"Vergleiche: กว่า, ที่สุด, เหมือน", b:[
   ["pat","A + Adjektiv + กว่า + B = A ist …er als B"],
   ["ex",[
     ["เชียงใหม่เย็นกว่ากรุงเทพฯ","chiang-mài yen gwàa grung-thêep","Chiang Mai ist kühler als Bangkok."],
     ["อันนี้ถูกกว่า","an-níi thùuk gwàa","Das hier ist billiger."]
   ]],
   ["pat","Adjektiv + ที่สุด = am …sten"],
   ["ex",[["ร้านนี้อร่อยที่สุด","ráan níi à-rɔ̀i thîi-sùt","Dieser Laden ist der leckerste."]]],
   ["pat","A + กับ + B + Adjektiv + เท่ากัน = gleich …"],
   ["ex",[["ห้องนี้กับห้องนั้นใหญ่เท่ากัน","hɔ̂ng níi gàp hɔ̂ng nán yài thâo-gan","Dieses und jenes Zimmer sind gleich groß."]]],
   ["pat","เหมือน / ไม่เหมือน = wie / anders als"],
   ["ex",[
     ["เหมือนกัน","mʉ̌an-gan","gleichfalls, genauso"],
     ["ภาษาไทยไม่เหมือนภาษาจีน","phaa-sǎa thai mâi mʉ̌an phaa-sǎa jiin","Thai ist anders als Chinesisch."]
   ]],
   ["pat","Adjektiv + ไป = zu …"],
   ["ex",[
     ["เล็กไป","lék bpai","zu klein"],
     ["ใหญ่ไปหน่อย","yài bpai nɔ̀i","etwas zu groß"]
   ]]
  ]},
  {k:"gefuehl", t:"Verdoppeln, verstärken, abschwächen", b:[
   ["p","Thai spielt mit Wiederholung. Ein verdoppeltes Wort (geschrieben mit ๆ) klingt lebendiger, weicher oder betonter – je nach Zusammenhang."],
   ["ex",[
     ["ช้าๆ","cháa-cháa","schön langsam"],
     ["ดีๆ","dii-dii","ordentlich, richtig gut"],
     ["ร้อนๆ","rɔ́ɔn-rɔ́ɔn","schön heiß (frisch gemacht)"],
     ["เด็กๆ","dèk-dèk","die Kinder (als Gruppe)"]
   ]],
   ["voc",[
     ["มาก","mâak","sehr (nachgestellt)"],
     ["มากๆ","mâak-mâak","total, wirklich sehr"],
     ["จัง","jang","so (sehr)! (Ausruf)"],
     ["ค่อนข้าง","khɔ̂n-khâang","ziemlich"],
     ["นิดหน่อย","nít-nɔ̀i","ein bisschen"],
     ["ไม่ค่อย …","mâi khɔ̂i","nicht so …"]
   ]],
   ["ex",[
     ["อร่อยจัง","à-rɔ̀i jang","So lecker!"],
     ["สวยมากๆ","sǔay mâak-mâak","Wunderschön!"],
     ["ค่อนข้างแพง","khɔ̂n-khâang phɛɛng","ziemlich teuer"]
   ]],
   ["tip","Statt ไม่อร่อย („nicht lecker“) sagen Thais lieber ไม่ค่อยอร่อย („nicht so lecker“). Das ist weicher und lässt allen ihr Gesicht.","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Kleidung kaufen", b:[
   ["dlg",[
     ["Verkäuferin","ลองได้นะคะ","lɔɔng dâi ná khá","Du kannst es gern anprobieren."],
     ["Tom","ตัวนี้เล็กไปหน่อยครับ มีใหญ่กว่านี้ไหมครับ","dtua níi lék bpai nɔ̀i khráp. mii yài gwàa níi mǎi khráp","Das hier ist etwas zu klein. Gibt’s das größer?"],
     ["Verkäuferin","มีค่ะ ตัวนี้ใหญ่กว่า","mii khâ. dtua níi yài gwàa","Ja, dieses hier ist größer."],
     ["Tom","สีอื่นมีไหมครับ","sǐi ʉ̀ʉn mii mǎi khráp","Gibt es andere Farben?"],
     ["Verkäuferin","มีสีดำกับสีขาวค่ะ สีดำสวยที่สุด","mii sǐi-dam gàp sǐi-khǎao khâ. sǐi-dam sǔay thîi-sùt","Schwarz und Weiß. Schwarz ist am schönsten."],
     ["Tom","เอาสีดำครับ ลดหน่อยได้ไหมครับ","ao sǐi-dam khráp. lót nɔ̀i dâi mǎi khráp","Ich nehme Schwarz. Geht’s etwas günstiger?"],
     ["Verkäuferin","สามร้อยค่ะ ราคาพิเศษ","sǎam-rɔ́ɔi khâ, raa-khaa phí-sèet","300 – Sonderpreis."]
   ]],
   ["voc",[
     ["ลอง","lɔɔng","probieren, anprobieren"],
     ["เล็ก / ใหญ่","lék / yài","klein / groß"],
     ["สีดำ / สีขาว","sǐi-dam / sǐi-khǎao","schwarz / weiß"],
     ["สีแดง / สีฟ้า","sǐi-dɛɛng / sǐi-fáa","rot / hellblau"],
     ["อื่น","ʉ̀ʉn","andere(r, s)"],
     ["สวย","sǔay","schön"],
     ["ราคา","raa-khaa","Preis"],
     ["พิเศษ","phí-sèet","besonders, Sonder-"]
   ]],
   ["tip","Farben bildest du mit สี + Farbwort und stellst sie hinter das Ding: เสื้อสีแดง – „ein rotes Hemd“."]
  ]},
  {k:"lesen", t:"Lese-Ecke 6", b:[
   ["read",[
     ["เชียงใหม่เย็นกว่ากรุงเทพฯ","chiang-mài yen gwàa grung-thêep","Chiang Mai ist kühler als Bangkok."],
     ["ร้านนี้อร่อยที่สุด","ráan níi à-rɔ̀i thîi-sùt","Dieser Laden ist der leckerste."],
     ["เสื้อตัวนี้เล็กไป","sʉ̂a dtua níi lék bpai","Dieses Hemd ist zu klein."],
     ["มีสีอื่นไหม","mii sǐi ʉ̀ʉn mǎi","Gibt es andere Farben?"],
     ["อร่อยมากๆ เลย","à-rɔ̀i mâak-mâak ləəi","Wahnsinnig lecker!"],
     ["ไม่ค่อยแพง","mâi khɔ̂i phɛɛng","Nicht so teuer."]
   ]]
  ]}
 ],
 quiz:[
  ["mc","„billiger (als)“",["ถูกกว่า","กว่าถูก","ถูกที่สุด"],0,"Adjektiv + กว่า."],
  ["mc","„Das ist zu klein.“",["อันนี้เล็กไป","อันนี้ไปเล็ก","อันนี้เล็กกว่า"],0,"Adjektiv + ไป = zu …"],
  ["mc","Was klingt höflicher als ไม่อร่อย?",["ไม่อร่อยเลย","ไม่ค่อยอร่อย","อร่อยไป"],1,"ไม่ค่อย schwächt ab."],
  ["mc","„ein rotes Hemd“",["สีแดงเสื้อ","เสื้อสีแดง","แดงเสื้อสี"],1,"Die Farbe steht hinter dem Ding."],
  ["mc","ช้าๆ bedeutet …",["sehr schnell","schön langsam","zweimal langsam"],1,"Verdopplung macht weicher und lebendiger."],
  ["ord","Chiang Mai ist kühler als Bangkok.",[["เชียงใหม่","chiang-mài"],["เย็น","yen"],["กว่า","gwàa"],["กรุงเทพฯ","grung-thêep"]],"A + Adjektiv + กว่า + B."],
  ["ord","Gibt es andere Farben?",[["มี","mii"],["สี","sǐi"],["อื่น","ʉ̀ʉn"],["ไหม","mǎi"]],"มี … ไหม = Gibt es …?"]
 ]},
{n:15, lvl:"A1", key:["ใจเย็นๆ นะ","jai-yen-yen ná","„Ganz ruhig, ja?“"],
 title:"Partikeln & Gefühle",
 sub:"Wie kleine Wörter am Satzende die Stimmung färben.",
 goals:["die wichtigsten Satzendpartikeln einsetzen","Gefühle mit ใจ-Ausdrücken beschreiben","lockeren Smalltalk führen"],
 lessons:[
  {k:"gram", t:"Die wichtigsten Satzendpartikeln", b:[
   ["p","Satzendpartikeln haben keine Wortbedeutung. Sie färben den Satz – wie Tonfall, Mimik oder ein Emoji."],
   ["ex",[
     ["ไปก่อนนะ","bpai gɔ̀ɔn ná","Ich geh schon mal vor, okay? (นะ: weich, bittend)"],
     ["ลองสิ","lɔɔng sì","Probier doch mal! (สิ: auffordernd)"],
     ["ไม่เผ็ดเลย","mâi phèt ləəi","Überhaupt nicht scharf. (เลย: verstärkend)"],
     ["จริงเหรอ","jing rə̌ə","Echt? (เหรอ: Erstaunen)"],
     ["ไม่แพงหรอก","mâi phɛɛng rɔ̀ɔk","Ach, so teuer ist das nicht. (หรอก: weicher Widerspruch)"],
     ["แล้วคุณล่ะ","lɛ́ɛo khun lâ","Und du? (ล่ะ: Gegenfrage)"],
     ["ได้จ้า","dâi jâa","Klar doch! (จ้า: freundlich-vertraut)"]
   ]],
   ["tip","นะ ist dein bester Freund: Es macht fast jeden Satz freundlicher. Zusammen mit Höflichkeit: นะครับ, นะคะ."]
  ]},
  {k:"gefuehl", t:"Gleicher Satz, andere Stimmung", b:[
   ["p","Vergleiche, wie die Partikel denselben Satz verwandelt:"],
   ["ex",[
     ["ไป","bpai","(Ich) gehe. – neutral, knapp"],
     ["ไปนะ","bpai ná","Ich geh dann, ja? – weich"],
     ["ไปสิ","bpai sì","Geh doch! – auffordernd"],
     ["ไปเลย","bpai ləəi","Los, geh ruhig! – ermunternd"],
     ["ไปเหรอ","bpai rə̌ə","Du gehst? – überrascht"]
   ]],
   ["p","Gefühle wohnen im Thai buchstäblich im Herzen (ใจ):"],
   ["voc",[
     ["ดีใจ","dii-jai","sich freuen (Herz gut)"],
     ["เสียใจ","sǐa-jai","traurig sein, bedauern (Herz kaputt)"],
     ["ใจเย็น","jai-yen","gelassen (Herz kühl)"],
     ["ใจร้อน","jai-rɔ́ɔn","ungeduldig (Herz heiß)"],
     ["ใจดี","jai-dii","gutherzig, nett"],
     ["เข้าใจ","khâo-jai","verstehen (ins Herz gehen)"]
   ]],
   ["tip","ใจเย็นๆ („kühles Herz“) hörst du, wenn dich jemand beruhigen will. Gelassenheit gilt in Thailand als große Tugend.","Kultur"]
  ]},
  {k:"kontext", t:"Smalltalk mit Gefühl", b:[
   ["dlg",[
     ["Nit","เป็นยังไงบ้างคะ","bpen yang-ngai bâang khá","Wie geht’s dir so?"],
     ["Tom","เหนื่อยนิดหน่อยครับ วันนี้ร้อนจัง","nʉ̀ay nít-nɔ̀i khráp. wan-níi rɔ́ɔn jang","Ein bisschen müde. Heute ist es so heiß!"],
     ["Nit","จริงค่ะ ไปกินอะไรเย็นๆ กันไหมคะ","jing khâ. bpai gin à-rai yen-yen gan mǎi khá","Stimmt! Wollen wir was Kaltes essen gehen?"],
     ["Tom","ไปสิครับ หิวมากเลย","bpai sì khráp. hǐu mâak ləəi","Klar, los! Ich hab total Hunger."],
     ["Nit","ดีใจที่ได้เจอนะคะ","dii-jai thîi dâi jəə ná khá","Schön, dich zu sehen!"],
     ["Tom","เหมือนกันครับ","mʉ̌an-gan khráp","Gleichfalls!"]
   ]],
   ["voc",[
     ["เป็นยังไงบ้าง","bpen yang-ngai bâang","Wie geht’s so?"],
     ["เหนื่อย","nʉ̀ay","müde, erschöpft"],
     ["ง่วง","ngûang","schläfrig"],
     ["สนุก","sà-nùk","Spaß machen"],
     ["เบื่อ","bʉ̀a","gelangweilt sein"],
     ["จริง","jing","wahr, wirklich"],
     ["เหมือนกัน","mʉ̌an-gan","gleichfalls"]
   ]],
   ["tip","สนุก (Spaß) ist ein Kernwert: Was keinen Spaß macht, lohnt sich kaum. สนุกไหม („Hat’s Spaß gemacht?“) fragt man nach fast jedem Ausflug.","Kultur"]
  ]},
  {k:"lesen", t:"Lese-Ecke 7", b:[
   ["read",[
     ["ลองสิ อร่อยนะ","lɔɔng sì, à-rɔ̀i ná","Probier doch mal, ist lecker!"],
     ["จริงเหรอ","jing rə̌ə","Echt?"],
     ["ไม่แพงหรอก","mâi phɛɛng rɔ̀ɔk","So teuer ist das nicht."],
     ["ใจเย็นๆ นะ","jai-yen-yen ná","Ganz ruhig, ja?"],
     ["วันนี้เหนื่อยมากเลย","wan-níi nʉ̀ay mâak ləəi","Heute bin ich total müde."],
     ["ดีใจที่ได้เจอ","dii-jai thîi dâi jəə","Schön, dich zu sehen."]
   ]]
  ]}
 ],
 quiz:[
  ["mc","Welche Partikel macht einen Satz weich und freundlich?",["นะ","หรอก","เหรอ"],0,"นะ ist die freundlichste Allzweck-Partikel."],
  ["mc","„Probier doch mal!“",["ลองนะ","ลองสิ","ลองเหรอ"],1,"สิ fordert auf: „doch mal“."],
  ["mc","จริงเหรอ drückt aus …",["Erstaunen","Ärger","Zustimmung"],0,"เหรอ = „echt?“"],
  ["mc","ดีใจ bedeutet …",["traurig sein","sich freuen","verstehen"],1,"Herz + gut = sich freuen."],
  ["mc","Jemand wird ungeduldig. Was sagst du?",["ใจร้อนๆ","ใจเย็นๆ","ใจดีๆ"],1,"ใจเย็นๆ = „ganz ruhig“."],
  ["ord","Heute ist es so heiß!",[["วันนี้","wan-níi"],["ร้อน","rɔ́ɔn"],["จัง","jang"]],"จัง am Ende = „so …!“"],
  ["ord","Ich habe total Hunger.",[["หิว","hǐu"],["มาก","mâak"],["เลย","ləəi"]],"มาก verstärkt, เลย legt noch eins drauf."]
 ]},
{n:16, lvl:"A1", key:["ถ้าว่างก็มาเที่ยวนะ","thâa wâang gɔ̂ɔ maa thîao ná","„Wenn du Zeit hast, komm vorbei!“"],
 title:"Verbinden & Erzählen",
 sub:"Sätze verknüpfen, Thema vor Kommentar – und eine eigene kleine Geschichte.",
 goals:["Sätze mit weil, aber, deshalb und wenn verbinden","Thema-Kommentar-Sätze bilden","eine kurze Geschichte erzählen"],
 lessons:[
  {k:"gram", t:"Sätze verbinden", b:[
   ["voc",[
     ["และ / กับ","lɛ́ / gàp","und / mit"],
     ["แต่","dtɛ̀ɛ","aber"],
     ["หรือ","rʉ̌ʉ","oder"],
     ["แล้วก็","lɛ́ɛo-gɔ̂ɔ","und dann"],
     ["เพราะ(ว่า)","phrɔ́ (wâa)","weil"],
     ["ก็เลย","gɔ̂ɔ-ləəi","deshalb"],
     ["ถ้า … ก็ …","thâa … gɔ̂ɔ …","wenn … dann …"],
     ["ว่า","wâa","dass (nach sagen, denken)"]
   ]],
   ["ex",[
     ["ผมชอบกาแฟแต่ไม่ชอบชา","phǒm chɔ̂ɔp gaa-fɛɛ dtɛ̀ɛ mâi chɔ̂ɔp chaa","Ich mag Kaffee, aber keinen Tee."],
     ["วันนี้ไม่ไปทำงานเพราะไม่สบาย","wan-níi mâi bpai tham-ngaan phrɔ́ mâi sà-baai","Heute gehe ich nicht arbeiten, weil ich krank bin."],
     ["ฝนตกก็เลยไม่ได้ไป","fǒn dtòk gɔ̂ɔ-ləəi mâi dâi bpai","Es hat geregnet, deshalb bin ich nicht gegangen."],
     ["ถ้าว่างก็มาเที่ยวนะ","thâa wâang gɔ̂ɔ maa thîao ná","Wenn du Zeit hast, komm vorbei!"],
     ["ผมคิดว่าเขาจะมา","phǒm khít wâa khǎo jà maa","Ich glaube, dass er/sie kommt."]
   ]],
   ["tip","และ klingt eher schriftlich. Im Gespräch verbindet man Nomen mit กับ und Handlungen mit แล้วก็."]
  ]},
  {k:"gefuehl", t:"Erst das Thema, dann der Kommentar", b:[
   ["p","Thai stellt gern zuerst das **Thema** auf die Bühne und sagt dann etwas darüber – auch wenn es grammatisch gar nicht das Subjekt ist."],
   ["ex",[
     ["ร้านนี้ อาหารอร่อยมาก","ráan níi aa-hǎan à-rɔ̀i mâak","Dieser Laden – das Essen ist super."],
     ["ภาษาไทย ผมชอบมาก","phaa-sǎa thai phǒm chɔ̂ɔp mâak","Thai – das mag ich sehr."],
     ["เรื่องนี้ ไม่ต้องห่วง","rʉ̂ang níi mâi dtɔ̂ng hùang","Was das angeht: keine Sorge."]
   ]],
   ["p","ก็ (gɔ̂ɔ) ist das kleine Gelenk dazwischen – je nach Satz „dann“, „also“, „eben“ oder „auch“:"],
   ["ex",[
     ["ผมก็ไม่รู้","phǒm gɔ̂ɔ mâi rúu","Ich weiß es auch nicht."],
     ["อะไรก็ได้","à-rai gɔ̂ɔ dâi","Egal was. / Alles gut."],
     ["ก็ดีนะ","gɔ̂ɔ dii ná","Ist doch gut."]
   ]],
   ["tip","Thema vorn, ก็ als Gelenk: Mit diesen zwei Werkzeugen klingen deine Sätze sofort natürlicher.","Sprachgefühl"]
  ]},
  {k:"kontext", t:"Mein Wochenende", b:[
   ["ex",[
     ["เมื่อวานเป็นวันเสาร์","mʉ̂a-waan bpen wan sǎo","Gestern war Samstag."],
     ["ตอนเช้าผมไปตลาดกับแฟน","dtɔɔn cháao phǒm bpai dtà-làat gàp fɛɛn","Morgens war ich mit meiner Freundin auf dem Markt."],
     ["เราซื้อผลไม้เยอะมาก เพราะถูกและอร่อย","rao sʉ́ʉ phǒn-lá-máai yə́ mâak, phrɔ́ thùuk lɛ́ à-rɔ̀i","Wir haben viel Obst gekauft, weil es billig und lecker war."],
     ["ตอนบ่ายฝนตก ก็เลยอยู่บ้านดูหนัง","dtɔɔn bàai fǒn dtòk, gɔ̂ɔ-ləəi yùu bâan duu nǎng","Nachmittags hat es geregnet, deshalb sind wir zu Hause geblieben und haben einen Film geschaut."],
     ["ตอนเย็นเพื่อนโทรมาชวนไปกินหมูกระทะ","dtɔɔn yen phʉ̂an thoo maa chuan bpai gin mǔu-grà-thá","Abends rief ein Freund an und lud uns zum Thai-Grillen ein."],
     ["สนุกมาก แต่กินเยอะไปหน่อย","sà-nùk mâak, dtɛ̀ɛ gin yə́ bpai nɔ̀i","Hat Riesenspaß gemacht – aber wir haben etwas zu viel gegessen."]
   ]],
   ["voc",[
     ["ผลไม้","phǒn-lá-máai","Obst"],
     ["โทรมา","thoo maa","anrufen (hierher)"],
     ["ชวน","chuan","einladen (zu etwas)"],
     ["อยู่บ้าน","yùu bâan","zu Hause bleiben"],
     ["หมูกระทะ","mǔu-grà-thá","Thai-Grill mit Suppenrand"],
     ["เยอะ","yə́","viel (umgangssprachlich)"]
   ]],
   ["tip","In der ganzen Geschichte gibt es keine einzige Vergangenheitsform – เมื่อวาน am Anfang genügt.","Sprachgefühl"]
  ]},
  {k:"lesen", t:"Lese-Ecke 8: Abschluss", b:[
   ["read",[
     ["ผมชอบกาแฟแต่ไม่ชอบชา","phǒm chɔ̂ɔp gaa-fɛɛ dtɛ̀ɛ mâi chɔ̂ɔp chaa","Ich mag Kaffee, aber keinen Tee."],
     ["ถ้าว่างก็มาเที่ยวนะ","thâa wâang gɔ̂ɔ maa thîao ná","Wenn du Zeit hast, komm vorbei!"],
     ["ฝนตกก็เลยไม่ได้ไป","fǒn dtòk gɔ̂ɔ-ləəi mâi dâi bpai","Es hat geregnet, deshalb bin ich nicht gegangen."],
     ["ร้านนี้อาหารอร่อยมาก","ráan níi aa-hǎan à-rɔ̀i mâak","In diesem Laden ist das Essen sehr lecker."],
     ["ผมคิดว่าภาษาไทยสนุก","phǒm khít wâa phaa-sǎa thai sà-nùk","Ich finde, Thai macht Spaß."],
     ["ขอบคุณที่เรียนด้วยกันนะ","khɔ̀ɔp-khun thîi rian dûay-gan ná","Danke, dass wir zusammen gelernt haben!"]
   ]]
  ]}
 ],
 quiz:[
  ["mc","„…, weil ich krank bin.“",["เพราะไม่สบาย","ก็เลยไม่สบาย","แต่ไม่สบาย"],0,"เพราะ = weil."],
  ["mc","„Wenn du Zeit hast, komm vorbei!“",["ถ้าว่างก็มาเที่ยวนะ","ว่างถ้ามาเที่ยว","ก็ว่างถ้ามา"],0,"ถ้า … ก็ …"],
  ["mc","อะไรก็ได้ bedeutet …",["„Was ist das?“","„Egal was.“","„Gar nichts.“"],1,"Fragewort + ก็ได้ = egal …"],
  ["mc","Welcher Satz ist richtig?",["ผมเป็นหิว","ผมหิวมาก","ผมหิวเป็นมาก"],1,"Zustände wie หิว brauchen kein เป็น."],
  ["mc","„zwei Katzen“",["แมวสองตัว","สองแมวตัว","แมวตัวสอง"],0,"Nomen + Zahl + Zählwort."],
  ["mc","„Ich war noch nie in Chiang Mai.“",["ผมไม่เคยไปเชียงใหม่","ผมไม่ได้ไปเชียงใหม่แล้ว","ผมยังไปเชียงใหม่"],0,"ไม่เคย = noch nie."],
  ["mc","21 Uhr heißt …",["สามทุ่ม","เก้าโมงเย็น","ตีเก้า"],0,"19 Uhr = หนึ่งทุ่ม, also 21 Uhr = สามทุ่ม."],
  ["ord","Ich mag Kaffee, aber keinen Tee.",[["ผม","phǒm"],["ชอบ","chɔ̂ɔp"],["กาแฟ","gaa-fɛɛ"],["แต่","dtɛ̀ɛ"],["ไม่","mâi"],["ชอบ","chɔ̂ɔp"],["ชา","chaa"]],"Das Subjekt muss im zweiten Teil nicht wiederholt werden."],
  ["ord","Ich glaube, dass er kommt.",[["ผม","phǒm"],["คิด","khít"],["ว่า","wâa"],["เขา","khǎo"],["จะ","jà"],["มา","maa"]],"ว่า leitet den Inhalt ein: „denken, dass …“."],
  ["mc","Was stimmt über Thai?",["Die Zeit steckt in den Verbformen","Das Thema steht oft vorn, dann folgt der Kommentar","Adjektive brauchen immer เป็น"],1,"Thema vorn, Kommentar danach."]
 ]}
]};
