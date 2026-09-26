V53 CUMULATIVE CLEANUP PATCH

Upload every file in this ZIP to the GitHub repository root and overwrite matching files.
This includes the prior V52 cumulative patch plus the V53 cleanup.

V53 changes
- Before / After Engineering is hidden by default on the public site.
- Featured Work system-selector panel is hidden by default on the public site.
- Both modules remain in code and can be toggled independently from the existing content editor under DISPLAY MODULES.
- Removed the large Achievement Cabinet presentation; About now gets a compact stylized Credentials + Training list.
- Xcelodose work row gets View investigation deck + Download PPTX actions.
- Lonza equipment gallery now exposes a browser-viewable PDF presentation and a separate PPTX download.
- Included XD600s_Asset_Numbers_Only_Redacted.pdf (17 pages) so the presentation displays in normal browsers.

Still included from V52
- Xcelodose 17-slide asset-number-only redacted PPTX.
- Five-photo Lonza Equipment Investigation gallery.
- Persistent / cross-tab sound state.
- Page-specific Currently Building.exe and shark removal.
- Hidden CAD viewer prototype.
- CARRT enclosure + electrical before/after implementation (hidden by default in V53).
- SMURF process-flow fallback and Shape Fight YouTube fallback.
- CARRT 80 x 60 mm -> 48 x 36 mm / 64.0% footprint-reduction wording.

Feature toggle storage
- Browser key: gr-v53-feature-flags
- Defaults: showBeforeAfter=false, showFeaturedWork=false

Generated file metadata author/creator: Gustavorodriguezpc
