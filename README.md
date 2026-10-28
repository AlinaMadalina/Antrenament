# Antrenament pe zile

Aplicație de telefon (PWA) cu antrenamente acasă, fără echipament: o grupă
musculară pe zi, fiecare exercițiu cu propria scară de nivele.

Site: https://alinamadalina.github.io/Antrenament/

## Ce face

- **Calendar** — alegi ziua, vezi ce se lucrează atunci. Zilele bifate complet
  se umplu cu roșu, cele începute primesc un punct.
- **Șapte zile, șapte grupe** — împins, tras, picioare, umeri, abdomen,
  fesieri, iar duminica odihnă (mers și mobilitate).
- **Nivele** — fiecare exercițiu pornește de la cea mai ușoară variantă
  (flotări la perete) și urcă până la cea grea. Urci când termini toate
  seriile cu formă bună și mai aveai două repetări în rezervă.
- **Bifă pe serie** — fiecare exercițiu are câte o bulină pentru fiecare
  serie. Bifezi pe rând, vezi unde ai rămas, iar când sunt toate gata se
  bifează singur exercițiul. Apeși din nou pe ultima bulină dacă te-ai
  grăbit.
- **Cronometru** — pentru exercițiile ținute pe timp și pentru pauza de 90 de
  secunde, care pornește singură după fiecare serie bifată.
- **Clipuri** — fiecare exercițiu are un buton care caută pe YouTube exact
  varianta de la nivelul la care ești.
- **Merge offline** — după prima deschidere, aplicația pornește și fără
  internet.

## Cum o pui pe telefon

1. Deschide linkul de mai sus în Chrome (Android) sau Safari (iPhone).
2. Android: meniul cu trei puncte → *Adaugă la ecranul principal*.
   iPhone: butonul de partajare → *Add to Home Screen*.

De atunci se deschide ca o aplicație normală, fără bara de browser.

## Actualizările

Nu trebuie să reinstalezi nimic. La fiecare modificare publicată aici,
telefonul ia singur versiunea nouă data viitoare când deschizi aplicația.
Dacă tocmai scrii ceva într-o căsuță, apare în schimb un buton
„Versiune nouă” și treci când vrei tu. Versiunea instalată scrie în josul
secțiunii de sincronizare.

## Sincronizarea

Nivelele și bifele pe zile se sincronizează între telefon și laptop prin
Firebase — **același cont** ca la aplicațiile *Croșetat* și *Săptămâna mea*.
Deschizi secțiunea „Sincronizare telefon și laptop”, te conectezi cu emailul
și parola, și de atunci merge singur, inclusiv offline: ce bifezi fără semnal
pleacă la următoarea conexiune.

Ziua pe care o ai deschisă în calendar **nu** se sincronizează — e alegerea
dispozitivului din mână.

Datele stau la `users/<uid>/apps/antrenament` în Firestore. Regulile publicate
pentru proiectul `crosetat-270da` acoperă deja calea asta (fiecare cont vede
numai ce e sub propriul `uid`), deci nu e nevoie de nimic nou în consolă.

Valorile din `firebase-config.js` nu sunt secrete: cheia `apiKey` e publică
prin design la Firebase. Ce protejează datele sunt regulile Firestore și
parola contului, care nu apare nicăieri în cod.

## Fișierele

| Fișier | Ce e |
| --- | --- |
| `index.html` | toată aplicația: program, nivele, calendar, cronometru |
| `sw.js` | service worker-ul: offline și actualizarea automată |
| `manifest.json` | numele, iconițele și felul în care se instalează |
| `sync.js` | sincronizarea peste Firebase |
| `firebase-config.js` | configurația proiectului Firebase |
| `scripts/serve.ps1` | server local pentru încercat pe laptop |
| `.github/workflows/pages.yml` | publică singur pe GitHub Pages la fiecare push |

## Pe laptop

```powershell
powershell -ExecutionPolicy Bypass -File scripts\serve.ps1
```

Apoi deschizi http://localhost:8767/. E nevoie de un server, nu merge
deschizând fișierul direct: service worker-ul și modulele cer `http://`.

## Când schimbi ceva

Ridică `VERSION` din `sw.js` (de exemplu `v1.0.0` → `v1.1.0`) și dă push pe
`main`. Workflow-ul publică singur, iar telefoanele iau versiunea nouă.
Fără schimbarea versiunii, ele rămân pe cea veche din cache.
