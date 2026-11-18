# Emerging Sciences — School / Entrance Portal

Content sirf `data.js` me add hota hai. Pages khud ban jaate hain.

**Flow:** Category (`cats`) → Exam (`exams`, `cat` = category id) → Subject (`papers`) → Topic (`subjects`, `p` = subject id) → lectures / material.

- **Naya lecture:** `lectures` me `{"id":"ph-elec-02","s":"ph-elec","n":"L-02","t":"Title","k":"T","yt":"YOUTUBE_ID"}` (id unique)
- **Nayi PDF:** `material` me `{"id":"m15","t":"Title","d":"note","k":"Notes","s":"ph-elec","drive":"DRIVE_FILE_ID"}`
- **Naya topic:** `subjects` me add karo, phir us exam ki `subjects` list me uski id daalo. Ek topic kai exams me ho sakta hai, lecture ek baar add karo.
- **Naya exam:** `exams` me block copy karo, `cat` set karo. `date` khali rakho jab tak official date na aaye, phir `YYYY-MM-DD`.
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
