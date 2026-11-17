# Emerging Sciences — School / Entrance Portal

Content sirf `data.js` me add hota hai. Pages khud ban jaate hain.

**Flow:** Category (`cats`) → Exam (`exams`, `cat` = category id) → Subject (`papers`) → Topic (`subjects`, `p` = subject id) → lectures / material.

- **Naya lecture:** `lectures` me `{"id":"ph-elec-02","s":"ph-elec","n":"L-02","t":"Title","k":"T","yt":"YOUTUBE_ID"}` (id unique)
- **Nayi PDF:** `material` me `{"id":"m15","t":"Title","d":"note","k":"Notes","s":"ph-elec","drive":"DRIVE_FILE_ID"}`
- **Naya topic:** `subjects` me add karo, phir us exam ki `subjects` list me uski id daalo. Ek topic kai exams me ho sakta hai, lecture ek baar add karo.
- **Naya exam:** `exams` me block copy karo, `cat` set karo. `date` khali rakho jab tak official date na aaye, phir `YYYY-MM-DD`.
- Header/nav: `nav.js`. Colors/fonts: `theme.css`. Support page: `support.html` + `support-data.js`.
- Google Sheet se content chalana ho to `sheet-config.js` bharo (abhi khali hai).
