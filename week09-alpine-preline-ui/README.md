# WebWorks Studio — Module 9 Student Starter
## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

## Start Here

Open this entire folder in Visual Studio Code.

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Keep `npm run dev` running while you work.

The `dev` command:

- copies Preline's browser JavaScript to `js/vendor/preline.js`;
- starts Tailwind watch mode;
- rebuilds `css/output.css` when your HTML changes.

Preview `index.html` with Live Server.

## What Is Already Set Up?

- Tailwind CSS 4
- Preline UI
- Tailwind Forms
- Alpine.js through the approved CDN
- responsive client page
- accessible baseline HTML
- client content and starter images
- clearly marked Alpine and Preline work areas
- Mac/Windows-friendly npm scripts

### Versions

- Tailwind CSS 4.3.3
- Tailwind CLI 4.3.3
- Preline UI 4.2.0
- Tailwind Forms 0.5.11
- Alpine.js CDN 3.17.1

Do not change versions unless your instructor tells you to.

# Requirement 1 — Alpine-Powered Exploration Tool

Use Alpine to help a visitor explore, narrow, compare, select, or better understand the supplied maker content.

Required:

- `x-data`
- at least one user event
- at least one additional reactive directive
- visible, understandable interface response
- semantic, keyboard-accessible controls

Search `index.html` for:

`TODO: REQUIRED ALPINE INTERACTION`

Do not copy the classroom Alpine playground unchanged.

# Requirement 2 — Adapted Preline Component

Choose one Preline component that improves the supplied client page.

Possible choices:

- accordion
- tabs
- modal
- dropdown
- alert
- another instructor-approved component

Required:

- solve a real client/user need
- use official Preline structure
- retain meaningful client content
- adapt styling with Tailwind utilities
- remain keyboard usable
- preserve accessibility behavior
- work at narrow, medium, and wide widths

Search `index.html` for:

`TODO: REQUIRED PRELINE COMPONENT`

# Scope Rule

Your Alpine interaction and Preline component must solve **different problems**.

# Why `js/vendor/preline.js` Exists

`node_modules` should not be committed or relied on by GitHub Pages.

Running:

```bash
npm run dev
```

or:

```bash
npm run build
```

copies Preline from:

```text
node_modules/preline/dist/preline.js
```

to:

```text
js/vendor/preline.js
```

Commit the copied runtime with your finished project.

# Before Pushing to GitHub

Run:

```bash
npm run build
```

Then confirm these contain real generated code:

```text
css/output.css
js/vendor/preline.js
```

Commit both files.

Do not commit `node_modules/`.

# Required README Documentation

Replace each TODO before submitting.

## Project Summary

I would be able to improve the Mission City Makers Market website by adding an Alpine powered maker search and catagory filter. I would also add a Preline to organize users questions and answers.

## Alpine Decision

**User/client need:**  

Users need to have an easier way to find makers and products they are interested in.

**Alpine directives used:**  

- `x-data` creates the search and filter state.
- `x-model` connects the search box and category selection to Alpine.
- `x-show` displays only the matching maker cards.
- `x-text` updates the search status.
- `@click` resets the search and category filters.


**Why Alpine was appropriate:**  

Alpine is useful for the small interaction because it updates the marker cards without needing another JS framework.

## Preline Decision

**Preline component selected:**  

Accordion.

**Problem it solves:**  

Users need to find answers to common market questions without reading every answers at once.

**How you adapted it:**  

I used Preline's accordion structure and kept the original four users questions and answers. I also used the Tailwind CSS to use on the borders with colors, borders, spacing, and focus styles.

## Accessibility Notes

1. I used labels for the search field and catagory section.
2. I used semantic buttons and visible keyboard focus styles.
3. Added live status message for search feedback.
4. Added accessible labels and aria attributes 

## Testing Notes

**Narrow viewport:** [Describe your test at 375px.]

**Medium viewport:** [Describe your test at 768px.]

**Wide viewport:** [Describe your test at 1440px.]

**Keyboard testing:** [Describe your Tab, Enter, and Space tests.]

**Browser console:** [Record whether any errors appeared.]

## Dependencies

**Alpine.js:** Used for the interactive maker search and category filter.

**Preline UI:** Used for the users FAQ accordion.

**Tailwind CSS:** Used to style the page, search controls, maker cards, and accordion.

## Official Documentation Used

- Alpine.js: https://alpinejs.dev/directives/
- Preline UI: https://preline.co/docs/
- Preline Accordion: https://preline.co/docs/accordion.html

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [x] `npm run build` completes.
- [x] Tailwind styles load.
- [x] Alpine interaction works.
- [x] Preline component works.
- [x] They solve different needs.
- [x] Keyboard testing works.
- [x] Responsive testing is complete.
- [x] Console has no unresolved errors.
- [x] README is complete.
- [x] `css/output.css` is committed.
- [x] `js/vendor/preline.js` is committed.
- [x] `node_modules` is not committed.
- [x] Work is pushed to GitHub.
