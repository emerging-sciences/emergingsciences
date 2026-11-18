# Emerging Sciences — School / Entrance Portal

Content sirf `data.js` me add hota hai. Pages khud ban jaate hain.

**Flow:** Category (`cats`) → Exam (`exams`, `cat` = category id) → Subject (`papers`) → Topic (`subjects`, `p` = subject id) → lectures / material.

- **Naya lecture:** `lectures` me `{"id":"ph-elec-02","s":"ph-elec","n":"L-02","t":"Title","k":"T","yt":"YOUTUBE_ID"}` (id unique)
- **Nayi PDF:** `material` me `{"id":"m15","t":"Title","d":"note","k":"Notes","s":"ph-elec","drive":"DRIVE_FILE_ID"}`
- **Naya topic:** `subjects` me add karo, phir us exam ki `subjects` list me uski id daalo. Ek topic kai exams me ho sakta hai, lecture ek baar add karo.
- **Naya exam:** `exams` me block copy karo, `cat` set karo. Date fields neeche "Exam dates" me samjhaye hain.

## Exam dates (Home page)
Har exam ke block me: `date` (pehla exam din, `YYYY-MM-DD`; official date na aaye to khali `""`), `end` (multi-day exam ka aakhri din, optional), `dateText` (card par jo dikhe, jaise `20–28 Jan 2027`; khali date par `Date awaited`), `note` (ek chhoti line), `dsrc` (date kahan se li — exam body ka notice / calendar), `site` (official website). Home par `datesChecked` (data.js ke upar-neeche) me jis din dates check ki, wo likho. Sirf official announcement par hi date bharo; baaki `Date awaited`.

## Exam essentials (Step 3 — Exam Pattern, Syllabus, PYQs)
Category → Exam kholte hi, subject chunne se pehle, sabse upar 3 card aate hain: **Exam Pattern**, **Syllabus**, **PYQs** (+ Official website). Subject ke andar bhi wahi 3 card hain (subject-wise notes ke saath).
- **Exam Pattern:** `patterns` me ek entry per exam: `{"e":"jeemain","t":"…","ed":"…","sm":"card par ek line","facts":[[label,value]…],"cols":[…],"rows":[[…]…],"notes":[…],"pn":{"ph":["Physics ke liye line"]},"src":[[label,url]]}`. `pn` = subject-wise line (subject id ke hisaab se).
- **Syllabus:** `syllabus` me `{"e":"jeemain","t":"…","url":"official link","src":"…","n":"…"}`. `p` (subject) na likho to row poore exam ke liye hai (har subject me dikhegi). Syllabus page par is site ke topics bhi subject-wise dikhte hain.
- **PYQs:** `pyqPortals` me official papers page; saal-wise PDF ke liye `pyqs` me `{"e","y","t","qp","key"}` (Google Sheet ka PYQs tab bhi chalta hai; subject khali = poore exam ke liye).

## Mock instructions — har exam ke apne
Mock test kholte hi us exam ke **official instructions** dikhte hain (`exam-info.js` me har exam ka block). Exam `cfg.exam` se ya test id ke shuru se pehchana jata hai (`neet-full-1` → NEET, `nda-full-1` → NDA, `jeemain-full-1` → JEE Main…). Negative marking aur notes `test.html` ke `RULES` me hain (har exam ke liye alag).
- Kisi ek mock ki alag extra instructions: `cfg:{…, instr:["line 1","line 2"]}` — "Instructions for this mock" me dikhengi.
- Exam ka rule badle to us ek mock me `negAbs` / `negFrac` se override karo.
- **SSC MTS:** sections ke key `NM`, `RE` (Session I, no negative) aur `GA`, `EN` (Session II, −1) rakho.
- **NEST / Navy / JEE Advanced:** negative marking har saal alag hoti hai — mock me `negAbs` / `negFrac` ya per-question `n` se brochure ke hisaab se likho. JEE Advanced ke MSQ me partial marking engine me nahi hai (poore sahi options par hi marks).
- Sample JEE Main mock hata diya gaya hai; `mocks.js` abhi khali hai.
- Header/nav: `nav.js`. Colors/fonts: `theme.css`. Support page: `support.html` + `support-data.js`.
- Google Sheet se content chalana ho to `sheet-config.js` bharo (abhi khali hai).

**Mock tests** (`mocks.js` me questions, `data.js` -> `mocks` me listing; `id` dono jagah same). Teen tarah ke mock:
- **Full-Length (poora exam, saare subjects mix)** — `"s":"all"`. Jaise JEE Main = Physics+Chemistry+Maths, NEET = Physics+Chemistry+Biology. Mock → Category → Exam ke baad subject-list ke sabse upar "Full-Length Mock Tests" card me dikhta hai.
  `{"id":"jeemain-full-1","e":"jeemain","s":"all","t":"JEE Main Full Mock 1","q":75,"min":180}`
- **Ek subject ka full test** — `"s":"full"` + `"p":"<subject id>"` (ph / ch / ma / bi). Us subject ke andar topics ke upar "Physics Full Test" card me dikhta hai.
  `{"id":"jeemain-ph-full-1","e":"jeemain","s":"full","p":"ph","t":"Physics Full Test 1","q":25,"min":60}`
- **Topic-wise** — `"s":"<topic id>"` (jaise `ph-kin`). Us topic ke card me dikhta hai.
  `{"id":"jeemain-kin-1","e":"jeemain","s":"ph-kin","t":"Kinematics Test 1","q":20,"min":30}`

Jab tak kisi exam ka mock add nahi hota, card "Coming soon" dikhta hai.

**Attempt any N of M** (jaise purana NEET / JEE Main Section B, CUET UG 40 of 50): mock ke `cfg` me `pick:{"B":10}` likho (section key : N). NTA ka rule chalta hai: agar N se zyada answer kiye to jo pehle N answer kiye vahi check hote hain, baaki ignore. Max marks me sirf N questions ginte hain. Test me upar ek line dikhti hai "answered: k" aur zyada answer karne par chetavani.
