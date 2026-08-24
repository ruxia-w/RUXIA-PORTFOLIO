# QA Checklist

## Truth and content

- [ ] Project is labeled Independent Concept Project.
- [ ] Duration is 3 weeks; year is 2026; role is Solo Product Designer.
- [ ] No unconfirmed tool appears in public metadata.
- [ ] No formal interviews, testing participants, or measured outcomes are claimed.
- [ ] No “findings from testing” panel is visible.
- [ ] Static sample data is clearly distinguished from live data.
- [ ] AI confidence is not described as prediction accuracy.
- [ ] “Better than 68%” is not presented as a verified benchmark.
- [ ] No broker, exchange, live trading, or execution is implied.
- [ ] Scenario and rebalancing states are estimates/simulations.
- [ ] Not-financial-advice and nothing-executed boundaries remain visible.
- [ ] No awards, launches, or business results are invented.

## Structure

- [ ] One shared CaseStudyLayout is used.
- [ ] Sidebar and main sections use the same data source.
- [ ] Exactly eight AURIC sidebar chapters appear.
- [ ] Secondary headings do not overcrowd the sidebar.
- [ ] Project metadata is in the header, not the sidebar.
- [ ] Previous/Next is derived from central project order.
- [ ] Main content remains readable without JavaScript.

## Navigation and scroll

- [ ] Every section has a stable anchor.
- [ ] Direct hash links open at the correct heading.
- [ ] Sticky navigation does not cover section headings.
- [ ] Scroll spy is stable and uses `aria-current`.
- [ ] Scroll updates do not create excessive browser history.
- [ ] Reduced Motion disables smooth/stacking behavior.
- [ ] Mobile Contents opens, closes, navigates, and restores focus correctly.
- [ ] Sidebar collapses before primary media becomes too small.

## Media

- [ ] Intrinsic dimensions are set for every image.
- [ ] Hero is prioritized; below-fold media is lazy-loaded.
- [ ] Images preserve aspect ratio.
- [ ] Important UI is not destructively cropped.
- [ ] Full images are available when limited presentation crops are used.
- [ ] Dense user-flow diagram opens in an accessible viewer.
- [ ] Low-resolution Profile image is not enlarged.
- [ ] Reference-only assets are not accidentally published.
- [ ] Images have accurate alt text; decorative images have empty alt.
- [ ] Image failure does not collapse narrative content.

## Accessibility

- [ ] Skip to Content works.
- [ ] One `h1`; headings follow a logical order.
- [ ] Semantic `nav`, `main`, `aside`, `article`, and `section` are used.
- [ ] All controls work with keyboard only.
- [ ] Focus is visible.
- [ ] ImageViewer traps/restores focus and closes with Escape.
- [ ] Mobile Contents traps/restores focus and closes with Escape.
- [ ] No information relies on color alone.
- [ ] Text/control contrast is sufficient.
- [ ] Sticky elements never cover focused content.

## Responsive and performance

- [ ] Large desktop, standard desktop, tablet, and narrow mobile are checked.
- [ ] Mobile is a single readable column.
- [ ] Previous/Next can stack on mobile.
- [ ] No horizontal overflow.
- [ ] No unexpected layout shift as images load.
- [ ] The same high-resolution asset is not downloaded repeatedly.
- [ ] Long screenshots remain legible or can be enlarged.

## Engineering

- [ ] Existing repository conventions are preserved.
- [ ] No unnecessary large animation/UI library is added.
- [ ] Content is separate from monolithic page markup.
- [ ] Lint passes.
- [ ] Type check passes.
- [ ] Production build passes.
- [ ] No console errors on the AURIC route.
- [ ] External prototype link works and has an accessible label.
- [ ] Nothing is deployed without explicit instruction.

