# Tropic Responses | Biology Learning Lab — implementation plan

## Product scope
A single-page, self-paced biology lesson based on `14.5Tropicresponses.pptx`, preserving all source syllabus points and visibly tagging every session as **CORE** or **EXTENDED**. Content is grouped into a clear pathway with immediate, spread-out multiple-choice checks after selected sessions; there is no end-only quiz dump.

## Design direction
- **Design movement:** editorial field-guide / modern scientific notebook.
- **Core principles:** readable first; evidence before assertion; generous visual hierarchy; active recall at the moment of need.
- **Color philosophy:** deep ink/navy for stable scientific authority, chlorophyll green for growth and correct understanding, warm amber for extended challenge, pale paper surfaces for calm long-form reading.
- **Layout paradigm:** left-side lesson rail + wide reading column, with chapter cards and “evidence strips” rather than a dense dashboard grid.
- **Signature elements:** a vertical “growth trace” progress rail; pill labels for CORE/EXTENDED; oversized botanical diagram frames with captions.
- **Interaction philosophy:** learners choose, reveal, and revisit; quiz feedback appears beside the question and wrong answers explain the misconception.
- **Animation:** subtle 180–240ms fades/lifts on cards and answer states; no distracting looping motion.
- **Typography:** system sans stack with high x-height, 18px base, 1.65 line-height; display headings use a condensed fallback to keep scientific labels prominent.
- **Brand essence:** a calm, visual study companion that turns plant movement into a sequence of observable evidence. Personality: precise, encouraging, curious.
- **Brand voice:** “Trace the signal. Explain the bend.” / “If the cells expand unevenly, the whole organ changes direction.”
- **Wordmark/mark:** a simple two-line leaf + arrow mark beside the wordmark “GROWTH TRACE”.
- **Signature brand color:** chlorophyll green `#2F7D4A`.

## Readability update
The opening section now visibly labels the **STARTER**, presents **Learning objectives — What / Why / How**, and the final evaluation is explicitly labeled **PLENARY**. Body copy and instructional labels are larger, while diagram frames and experiment visuals use more vertical space. The final plenary visual is now a source-derived coleoptile experiment diagram rather than a speech-bubble/dialogue graphic, with a second visual recall gallery. Multiple-choice checks now use measurements, controls, histology and evidence interpretation rather than only definition recall. The course label is **IGCSE Biology 0610**. Figure 1, the two-organs/four-directions comparison and every major diagram use a permanent super-size classroom projection treatment; Figure 1 has an extra-large 600px display and 24px caption.

## Lesson structure
1. Start here: objectives, tropism definition, positive/negative responses.
2. Core orientation: phototropism, gravitropism, shoot/root organ responses.
3. **Check-in 1** immediately after the core orientation.
4. Experimental design: phototropism and gravitropism investigations, clinostat, variables and controls.
5. **Check-in 2** immediately after investigations.
6. Extended mechanism: auxin synthesis, transport, cell-wall loosening and elongation.
7. Phototropism and shoot gravitropism step sequences; root-versus-shoot comparison.
8. **Check-in 3** immediately after the auxin mechanism.
9. Evidence: coleoptile experiments, mica barriers, Went agar block, cell histology.
10. **Check-in 4** immediately after evidence.
11. Applications and evaluation: misconceptions, microgravity, rooting powders/weed control, recap, vocabulary, plenary prompt.
12. **Check-in 5** near the end, followed by a “next topic” bridge.

## Project structure
- `index.html`: semantic shell, lesson sections and accessible quiz containers.
- `styles.css`: responsive editorial layout, typography, rail, diagrams and quiz states.
- `app.js`: progress tracking, rail navigation, quiz scoring/feedback, vocabulary filter, accordions.
- `public/assets/`: selected, high-resolution worksheet diagrams only; use original files when they materially clarify a mechanism or experiment.
- `public/manus-routes.json`: route manifest for the root page.
- `app.config.ts`: project logo metadata.

## Material constraints
No server, login, or database is needed. Use only the attached worksheet-derived visuals; do not add generic stock imagery. Keep images large and legible with captions and alt text. Static preview listens on port 3000 with a minimal Node server and no external runtime dependencies.
