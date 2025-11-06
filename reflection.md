# Reflektion – Git & Agilt (1–2 sidor)

## 1) Egen user story + Acceptance Criteria + INVEST

**Story:** Som <utvecklare> vill jag <skapa en funktion där användaren kan filtrera boknamn, författare och lägga till länkar >så att <förbättra användarupplevelsen genom att göra det lätt att hitta och organisera bokmärken> <nytta>.

**Acceptance Criteria (checkboxar):**

-Det ska finnas ett formulär där användaren kan ange titel

-Ett fält för författarens namn.

-Ett fält för URL.

-När bokmärket läggs till ska det visas i listan med bokmärken.

**INVEST – kort motivering (2–4 meningar):**
Vilka av I, N, V, E, S, T uppfyller storyn och varför?
User story 1:
-Independent: Titeln och länken för bokmärket kan hanteras och användas självständigt, utan att vara beroende av andra delar.

-Negotiable: Detaljerna kring titeln och länken kan lätt ändras eller förbättras under utvecklingens gång för att uppnå bästa resultat.

-Valuable: Titeln och länken ger ett mervärde för användaren och underlättar åtkomst till relevant information.

-Estimable: Det går att uppskatta arbetsinsatsen som krävs för att lägga till titeln och länken, vilket gör att vi kan planera tid och resurser.

-Small: Titeln och länken är tillräckligt små och hanterbara för att kunna genomföras inom en enda sprint.

-Testable: Vi kan tydligt och noggrant testa titeln och länken för att säkerställa att de fungerar korrekt.

## 2) Sprintmål + Definition of Done (DoD)
**Sprintmål:** (1–2 meningar)
Sprintens mål är att skapa ett effektivt och användarvänligt bokmärkesystem där användare enkelt kan lägga till, redigera och ta bort bokmärken, och att all data på ett hållbart sätt lagras i Local Storage. Detta kommer att förbättra användarupplevelsen och öka systemets effektivitet.

**DoD (checklista):**
1)User Stories

-Alla valda user stories i sprinten är implementerade och testade

-Acceptance Criteria (AC) för varje story är uppfyllda

2)Kod och funktionalitet

-Koden körs lokalt utan fel

-Funktionalitet fungerar enligt specifikation

-Eventuella buggar eller blockerande problem är lösta

4)Git / Pull Requests

-Alla commits är pushade till feature-branches

-Pull Requests har minst 1 godkänd review

-Merge till main är genomförd och eventuella konflikter lösta

5)Dokumentation

-Nödvändig dokumentation, såsom kodbeskrivningar och användarguider, är komplett

-Trello-kort är länkat till respektive PR och markerat som Done

-Ceremoniloggar (Planning, Daily, Retro) uppdaterade

6)Test och kvalitet

-Manuell test har genomförts (beskriv teststeg om relevant)

-Små ändringar eller refaktoriseringar genomförda

-Koden följer gruppens kodstandard och PR-policy



## 3) Retro: Start / Stop / Continue
- Start:
Skriva tydligare och mer beskrivande Pull Request-beskrivningar, inklusive vad som ändrats och varför det gjordes.
* För att göra det enklare för andra att förstå syftet och koden vid review.

- Stop:
Göra för stora PR (över 200 rader kod) som innehåller många olika ändringar.
* För att minska risken för konflikter och göra det enklare att granska varje del för sig.

- Continue:
Använda tydliga och konsekventa branch-namn som feature/namn och fix/namn.
* Det gör projektet mer organiserat och det är lättare att förstå varje branches syfte.

**Förbättring jag provar nästa sprint:**
Jag kommer att skriva mer detaljerade commit-meddelanden och PR-beskrivningar, så att det blir tydligt vad som har ändrats och varför.
* Det hjälper teamet vid code review och dokumentation


## 4) Hänvisningar (VG)
- Add a button for remove av PR/commit: <69995f>
- feature/us1-author-bookNames-links av PR/commit: <747524d>
