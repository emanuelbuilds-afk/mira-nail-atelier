# Predarea site-ului — pași compleți

Acest ghid duce site-ul de la fișierele de aici la un site live, găzduit complet pe
conturile **dvs.**, fără ca altcineva să mai aibă acces. Urmați pașii în ordine.

---

## 0. Înainte de a începe

- Aveți nevoie de o adresă de email și ~20 de minute.
- Înainte de a încărca fișierele, **ștergeți folderul `.vercel/`** din acest proiect
  (dacă există). Așa site-ul nu rămâne legat de un cont Vercel vechi.

---

## 1. Creați un cont GitHub (gratuit)

1. Mergeți pe https://github.com și apăsați **Sign up**.
2. Folosiți emailul dvs. și alegeți un nume de utilizator (ex: `luminitageorgescu`).
3. Confirmați emailul.

> Notați numele de utilizator — îl veți folosi la pasul 4.

## 2. Creați repository-ul și încărcați fișierele

1. În GitHub, apăsați **New repository**.
2. Nume: **`luminita-georgescu`**. Lăsați-l **Public**. Apăsați **Create**.
3. Pe pagina nouă, apăsați **uploading an existing file** și trageți **toate**
   fișierele site-ului (`index.html`, `styles.css`, `content.json`, `admin.html`, etc.).
4. Apăsați **Commit changes**.

## 3. Publicați pe Vercel (gratuit)

1. Mergeți pe https://vercel.com și apăsați **Sign up → Continue with GitHub**.
2. Apăsați **Add New → Project**, alegeți repository-ul `luminita-georgescu`, apăsați **Deploy**.
3. În câteva secunde site-ul e live pe o adresă `...vercel.app`.

## 4. Conectați domeniul dvs.

1. În proiectul Vercel: **Settings → Domains → Add**, introduceți domeniul dvs.
2. Vercel vă arată ce setări (DNS) să puneți la furnizorul domeniului. Urmați-le.

## 5. Activați editarea din panou (admin.html)

Panoul `/admin.html` vă lasă să schimbați texte, poze, prețuri și contactul, singură,
fără cod. Pentru ca butonul **Salvează** să funcționeze pe contul dvs.:

1. Deschideți fișierul `admin.html` și, în blocul **HANDOFF CONFIG** de sus, puneți la
   `GH_OWNER` numele dvs. de utilizator GitHub (de la pasul 1). Salvați și re-încărcați
   fișierul în GitHub (ca la pasul 2).
   - Opțional: schimbați `PASS` cu o parolă proprie pentru panou.
2. Generați un token GitHub:
   - GitHub → **Settings → Developer settings → Personal access tokens →
     Fine-grained tokens → Generate new token**.
   - Repository access: **Only select repositories → `luminita-georgescu`**.
   - Permissions → Repository permissions → **Contents: Read and write**.
   - Generați și **copiați** token-ul (începe cu `github_pat_...`).
3. Deschideți `https://domeniuldvs/admin.html`, intrați cu parola, lipiți token-ul în
   câmpul de sus și apăsați **Salvează**. Gata — token-ul rămâne doar în browserul dvs.

## 6. Conectați programările (Setmore)

1. În contul dvs. **Setmore**, copiați link-ul **Booking Page** (pagina de programări).
2. În `/admin.html`, secțiunea **Programări**, lipiți link-ul și apăsați
   **Salvează și publică**.
3. Toate butoanele «Programează-te» de pe site vor duce automat la Setmore.

---

## Gata

De aici totul e pe conturile dvs.: GitHub (fișiere), Vercel (găzduire), domeniul dvs.,
Setmore (programări). Nimeni altcineva nu are acces.

**Magazinul online** (existent) se conectează separat — pașii aceia se fac după.
