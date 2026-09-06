# Alex Rweyemamu Portfolio

A responsive personal portfolio website for Alex Rweyemamu, a Tanzanian digital, AI, cybersecurity, and youth development advocate. The site presents Alex's profile, portfolio themes, experience, speaking work, impact, and collaboration details.

The project is a lightweight static website. It does not require a build tool, package manager, backend, database, or JavaScript framework.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Website Sections](#website-sections)
- [How The Site Works](#how-the-site-works)
- [Project Structure](#project-structure)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [Editing Content](#editing-content)
- [Design And Responsive Behavior](#design-and-responsive-behavior)
- [SEO And Metadata](#seo-and-metadata)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Security](#security)
- [Browser Support](#browser-support)
- [Maintenance Checklist](#maintenance-checklist)

## Overview

The website uses a single-page application-style layout without a framework:

- `index.html` contains all page content.
- `assets/css/style.css` contains the visual system and responsive rules.
- `assets/js/script.js` controls navigation, sidebar contacts, theme switching, and accessibility interactions.
- The browser displays one content article at a time while keeping the navigation in place.

The site is designed for:

- Organisations looking for a speaker, facilitator, or programme collaborator.
- Educators and youth programmes working on digital learning.
- People interested in digital safety, AI literacy, cybersecurity awareness, and inclusive technology.
- Visitors who want a quick professional overview and direct contact options.

## Features

- Responsive layout for desktop, tablet, and mobile screens.
- Fixed desktop profile sidebar with profile image, contact information, LinkedIn, and theme controls.
- Mobile-friendly profile panel and bottom navigation.
- Single-page navigation between About, Portfolio, Resume, Speaking, and Contact.
- Dark and light theme switching.
- Theme preference persistence through `localStorage` when browser storage is available.
- Collapsible contact information on smaller screens.
- Hide/show control for the mobile navigation bar.
- Keyboard support, visible focus states, skip link, and Escape-to-close behavior.
- External LinkedIn link with `noopener` protection.
- SEO metadata, Open Graph metadata, Twitter metadata, and Person structured data.
- Web app manifest for installable browser experiences.
- Reduced-motion support through `prefers-reduced-motion` CSS rules.
- No build step and no runtime backend.

## Website Sections

### About

Introduces Alex's positioning, point of view, focus areas, audiences, working style, and the relationship between technical knowledge and human learning.

The page includes:

- Hero statement and CyberSwahili identity.
- Positioning statement.
- Three engagement principles.
- Point of view and focus areas.
- Audience groups: young people, educators, and institutions.
- Working approach.
- Proof points showing how Alex bridges disciplines, localizes knowledge, and designs for action.

### Portfolio

Explains the areas where Alex creates value and the way engagements are structured.

The page includes:

- CyberSwahili and digital inclusion.
- AI and emerging technology literacy.
- Everyday cybersecurity and digital safety.
- Education and capacity building.
- Swahili knowledge and communication.
- Engagement model from audience understanding to learning capture.
- CyberSwahili University Roadshow case study.
- Workshop and conference practice.
- Impact, conference, and workshop evidence cards.
- Potential deliverables such as talks, workshops, resources, and programme design.
- Intended outcomes: clarity, confidence, and continuity.

### Resume

Presents professional experience, education, certifications, and capabilities.

The page includes:

- Professional profile.
- CyberSwahili experience.
- ARINC network engineering support experience.
- Computer engineering and ICT education.
- Cybersecurity and networking certifications.
- Capability snapshot covering technical systems, learning design, and public communication.

### Speaking

Shows speaking experience and the formats available for different audiences.

The page includes:

- AI literacy, digital safety, youth leadership, and Swahili knowledge topics.
- Keynote, workshop, panel, and masterclass formats.
- Conference and programme engagements.
- Audience takeaways focused on understanding, questioning, and acting.

### Contact

Provides a direct collaboration path for:

- Youth and educator learning programmes.
- Cybersecurity and digital safety campaigns.
- AI literacy and responsible technology sessions.
- Swahili knowledge and communication projects.

The page explains what information to share, how the response is shaped, and how the engagement becomes useful.

## How The Site Works

### Navigation

Each main navigation button has a `data-page-target` value:

```html
<button data-nav-link data-page-target="portfolio">Portfolio</button>
```

Each content article has a matching `data-page` value:

```html
<article class="portfolio" data-page="portfolio">
```

When a navigation button is clicked, `assets/js/script.js`:

1. Hides all page articles.
2. Shows the article whose `data-page` matches the target.
3. Updates the active navigation state.
4. Updates `aria-current` for screen readers.
5. Scrolls the document to the top.

The About page also contains links using `data-nav-target`, which use the same navigation function.

### Sidebar Contacts

The contact toggle uses:

- `[data-sidebar]` for the sidebar container.
- `[data-sidebar-btn]` for the contact toggle button.
- `.sidebar-info_more` for the expandable contact details.

On small screens, clicking the control toggles the `active` class and updates `aria-expanded` and the accessible button label. On wide desktop screens, the contact details are shown by default.

### Theme Switching

The theme button uses `[data-theme-toggle]`. The script switches the body between:

```html
<body>
<body data-theme="light">
```

The light theme is defined in CSS under `body[data-theme="light"]`. The selected preference is stored as `alex-theme` in `localStorage`. If storage is blocked, the theme still works for the current page visit.

### Mobile Navigation Visibility

The mobile navigation toggle uses `[data-nav-toggle]`. It adds or removes `.navbar-hidden` and updates the icon, label, and `aria-expanded` state. This control only appears below the desktop breakpoint.

### Icons

The site uses Ionicons from the UNPKG CDN. Icons are written as custom elements such as:

```html
<ion-icon name="mail-outline"></ion-icon>
```

The Content Security Policy permits the specific UNPKG origin required by Ionicons.

## Project Structure

```text
Alexportfolio/
├── index.html                 # Complete website markup and page content
├── README.md                  # Project documentation
├── LICENSE                    # Project license
├── site.webmanifest           # Installable site metadata
├── .gitattributes             # Git attributes
├── .github/                   # Repository automation or configuration
└── assets/
    ├── css/
    │   └── style.css          # Theme, components, layout, and breakpoints
    ├── images/
    │   └── ALEX.jpg           # Profile image
    └── js/
        └── script.js          # Navigation, theme, sidebar, and keyboard behavior
```

## Run Locally

Because this is a static website, it can be opened directly:

1. Open `index.html` in a browser.
2. For a more production-like local environment, serve the project directory with any static file server.

Example using Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Example using Node.js and `npx`:

```bash
npx serve .
```

Opening through a local HTTP server is recommended when testing the manifest, security headers, caching, and external assets.

## Deployment

The project can be deployed to any static hosting service, including:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- An Apache or Nginx static server

Deploy the project root as the publish directory. No build command is required.

For production hosting, configure these response headers at the hosting layer when possible:

```text
Content-Security-Policy: Use the policy in index.html as the starting point
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
```

A server-level header is stronger than a meta tag because it is applied before the document is parsed.

## Editing Content

Most content changes happen in `index.html`.

### Change a page heading

Find the relevant article and edit its heading:

```html
<article class="portfolio" data-page="portfolio">
  <h2 class="h2 article-title">A portfolio for digital confidence.</h2>
</article>
```

Keep the `data-page` value unchanged unless you also update the matching navigation button.

### Add a portfolio card

Add another `.portfolio-card` inside `.portfolio-grid`. Keep the existing structure for consistent spacing and responsive behavior:

```html
<article class="portfolio-card">
  <div class="card-icon"><ion-icon name="sparkles-outline"></ion-icon></div>
  <p class="eyebrow">Category</p>
  <h3 class="h3">Project or capability title</h3>
  <p>Explain the problem, audience, approach, and practical value.</p>
  <div class="card-tags">
    <span>Tag</span>
    <span>Another tag</span>
  </div>
</article>
```

### Add an impact card

Add a `.impact-stat` inside `.impact-stats`:

```html
<div class="impact-stat">
  <strong>Heading</strong>
  <span>Explain the evidence or contribution in one clear sentence.</span>
</div>
```

Avoid publishing unsupported numbers. Use qualitative descriptions until verified figures are available.

### Update contact details

Contact details appear in the sidebar and Contact page. Update both locations when changing email, phone, LinkedIn, or location information.

### Update the profile image

Replace `assets/images/ALEX.jpg` with the new image and update the `alt` text if the subject changes. Keep explicit `width` and `height` attributes to reduce layout shift.

## Design And Responsive Behavior

The design uses a dark editorial interface with warm yellow accents and cyan signals. Typography uses DM Sans for body text and Space Grotesk for display headings.

Main responsive behavior:

- Below `450px`: compact mobile layout, one-column content cards, stacked impact cards, smaller headings, and simplified profile controls.
- `450px` to `767px`: flexible mobile/tablet layout with two-column content grids where space allows.
- `768px` to `1249px`: centered tablet layout with wider article panels.
- `1250px` and above: fixed profile sidebar, scrolling content column, desktop grid layout, and expanded spacing.

The desktop sidebar remains fixed while the main content scrolls. The sidebar has visible overflow so contact details and profile controls are not clipped.

## SEO And Metadata

`index.html` includes:

- Descriptive page title.
- Meta description.
- Author and robots directives.
- Theme and color-scheme metadata.
- Referrer policy.
- Open Graph title, description, image, and image alt text.
- Twitter card metadata.
- Schema.org `Person` structured data.
- Web app manifest link.

Before publishing, consider adding a canonical URL and an absolute social image URL once the production domain is confirmed.

## Performance

Current performance choices include:

- No framework or build runtime.
- Deferred local JavaScript.
- Profile image dimensions to reduce layout shift.
- High priority for the above-the-fold profile image.
- Async image decoding.
- Font preconnect and `display=swap` Google Fonts loading.
- DNS prefetch and preconnect for the Ionicons CDN.
- CSS-driven responsive layout.
- Reduced-motion support.

For further production optimization:

- Convert the profile image to WebP or AVIF while keeping a fallback.
- Self-host fonts and icons if third-party requests need to be eliminated.
- Add long-term cache headers for versioned assets.
- Use a real production URL in Open Graph and canonical metadata.
- Run Lighthouse or PageSpeed Insights after deployment.

## Accessibility

The site includes:

- Semantic `main`, `aside`, `nav`, `article`, `section`, `header`, `address`, and list elements.
- A skip-to-content link.
- Button labels and `aria-expanded` state for interactive controls.
- `aria-current` for the active page.
- Visible keyboard focus states.
- Descriptive profile image alternative text.
- External link protection.
- Reduced-motion support.
- A no-JavaScript message for users who disable scripts.

When adding new content, maintain heading order and ensure interactive elements have accessible names.

## Security

The page includes a restrictive Content Security Policy allowing:

- Local document, style, and script assets.
- Google Fonts styles and fonts.
- Ionicons scripts, images, and connections from `unpkg.com`.

Additional protections include:

- `Permissions-Policy` disables camera, microphone, location, and payment APIs.
- `object-src 'none'` blocks embedded plugin content.
- `base-uri 'self'` limits base URL manipulation.
- `form-action 'self'` limits form submission targets.
- `strict-origin-when-cross-origin` limits referrer detail.
- External LinkedIn links use `rel="noopener"`.
- Theme storage failures are handled without breaking the page.

The site has no server-side authentication, database, payment flow, or user-submitted form. If a form or analytics service is added later, update the CSP and review the privacy implications before deployment.

## Browser Support

The site targets modern browsers with support for:

- CSS Grid and Flexbox.
- Custom properties.
- `backdrop-filter` where available.
- Web components used by Ionicons.
- `localStorage` with a safe fallback.
- `prefers-reduced-motion`.

If an older browser does not support an enhancement, the core content remains available as standard HTML.

## Maintenance Checklist

Before publishing a content or design update:

- Confirm all navigation buttons still match their `data-page` targets.
- Test About, Portfolio, Resume, Speaking, and Contact navigation.
- Test both dark and light themes.
- Test the fixed sidebar at a wide viewport.
- Test mobile widths around `390px` and `450px`.
- Check for horizontal overflow.
- Keep image dimensions and alternative text updated.
- Run the JavaScript syntax check:

```bash
node --check .\assets\js\script.js
```

- Review external URLs and contact details.
- Run Lighthouse after deployment.

## License

See [LICENSE](LICENSE) for the project license.
