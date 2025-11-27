PRODUCT REQUIREMENTS DOCUMENT (PRD)

Meckley’s Parts & Service Website Redesign

Version 1.1 — Updated for HTML/CSS/JS Stack

⸻

1. Goal & Summary

Meckley’s Parts & Service (MPS) needs a modern, rugged, trustworthy website that reflects the true scale and capability of their business: auto repair, towing, salvage, metal recycling, and specialty parts (especially square-body Chevy pickups).

The new site will increase inbound calls, improve clarity of services, showcase the yard’s extensive inventory, and elevate the brand with a clean, rural-industrial design consistent with their physical identity.

This PRD defines what the website will do, how it will function, and the necessary standards for design, code, performance, content, and usability.

⸻

2. Objectives

Primary Objectives
	•	Modernize the MPS web presence with a clean, premium look
	•	Increase inbound calls and part requests
	•	Improve trust through real photography and heritage storytelling
	•	Present services clearly and concisely
	•	Demonstrate the scale and organization of the salvage yard
	•	Highlight their niche: 70s–80s Chevy trucks (“Squareville”)

Secondary Objectives
	•	Improve SEO for local services
	•	Provide mobile-first access for rural customers
	•	Support future part/inventory expansion

⸻

3. User Personas

1. Local Driver Needing Repair

Needs quick clarity and fast calling access.

2. Classic Truck Builder

Looking for rare square-body Chevy parts and photos.

3. Rural Equipment Owner

Needs towing, repair, or used parts.

4. Scrap Customer

Needs info on recycling and hauling.

5. Mechanic/Small Shop

Searching for rare parts sources.

⸻

4. Core Features & Requirements

A. Homepage

Must include:
	•	Hero banner with real photography (shop or tow truck)
	•	Visible phone number in header
	•	Quick service links
	•	Services overview grid
	•	“A Yard Like No Other” aerial section
	•	About the company
	•	Call-to-action banner
	•	Footer with hours, map, and contacts

Acceptance Criteria:
	•	Phone number visible above the fold on all devices
	•	Loads under 2.5 seconds on 4G
	•	Design matches the MPS Design System

⸻

B. Services Pages

Auto Repair Page
	•	Engines, brakes, AC, exhaust, general repair
	•	Real shop images
	•	CTA to call

Towing & Hauling Page
	•	Tow truck photos
	•	Vehicles/equipment hauled
	•	Clear call instructions

Welding & Fabrication Page
	•	Images of tools, shop space

Tires, Batteries & Oil Changes Page

Scrap & Metal Recycling Page
	•	Info on scrap vehicle removal
	•	What they accept

Used & New Parts Page
	•	Services list
	•	CTA to Part Request Form

Acceptance Criteria:
	•	Each service has visual support
	•	Clear bulleted lists, no long paragraphs

⸻

C. Parts & Salvage Yard Page

Features:
	•	Overview of salvage yard scale
	•	Aerial photos (Junkyard1–4)
	•	Inventory categories
	•	Squarebody specialty highlight
	•	Part Request Form

Acceptance Criteria:
	•	Salvage yard looks organized and professional
	•	Form is easy to use on mobile

⸻

D. Squareville Page

Features:
	•	Page dedicated to 70s–80s Chevy pickups
	•	Photos of real square-body trucks
	•	Explanation of specialty inventory
	•	CTA: “Call Us for Squarebody Parts”

⸻

E. About Page

Features:
	•	Family-owned since 1977
	•	Storytelling with old and new photos
	•	Core values
	•	Why people trust MPS

⸻

F. Contact Page

Features:
	•	Phone number
	•	Hours
	•	Map embed
	•	Address
	•	“Call for appointment” on Saturdays
	•	Small photo of front office

⸻

G. Part Request Form

Fields:
	•	Name
	•	Phone
	•	Email
	•	Year / Make / Model
	•	Part needed
	•	VIN (optional)
	•	File upload (optional)

Technical Implementation:
	•	Implemented using JavaScript + Formspree or similar email handler
	•	Graceful fallback for no-JS users (HTML form POST)
	•	Mobile-first layout

⸻

5. Non-Functional Requirements (NFRs)

Performance
	•	Load time under 2.5 seconds
	•	Images optimized (WebP where possible)
	•	Lazy loading for salvage yard photos

Mobile
	•	Fully responsive
	•	Thumb-friendly tap zones for CTAs

SEO
	•	Alt tags for all images
	•	Metadata per page
	•	Local Business schema
	•	Clean semantic HTML
	•	Service-area keywords

Security
	•	HTTPS/SSL required
	•	Form submission protected from spam (honeypot recommended)

Accessibility
	•	WCAG AA contrast
	•	Keyboard navigation
	•	Semantic headings (H1 → H2 → H3)

⸻

6. Technical Requirements

Tech Stack

✔️ Vanilla HTML
✔️ Vanilla CSS
✔️ Vanilla JavaScript

Rationale:
	•	Simple maintenance
	•	Fast loading
	•	Easy for the business to host anywhere
	•	No dependencies required

Hosting Options (Flexible)
	•	Netlify (recommended)
	•	Vercel
	•	Static hosting (S3, DigitalOcean, cPanel)

Form Handling
	•	JavaScript fetch to Formspree (preferred)
	•	OR Netlify Forms if on Netlify
	•	OR mailto fallback

Organization

/index.html
/services/
    repair.html
    towing.html
    scrap.html
    parts.html
    welding.html
/squareville/
    index.html
/about/
    index.html
/contact/
    index.html
/assets/
    css/
    js/
    images/
    fonts/


⸻

7. Dependencies
	•	Final MPS Design System (Complete)
	•	All approved photography (Complete)
	•	Hosting provider (To be chosen)
	•	Form handler (Formspree or Netlify Forms)

⸻

8. Risks & Mitigations

Large images slow load times
→ Use WebP and lazy loading

Owner cannot update content frequently
→ Keep site static, minimal updates required

Mobile network speeds in rural areas
→ Optimize assets, compress images

⸻

9. Timeline

Phase	Deliverable	Duration
Week 1	Wireframes + sitemap	1 week
Week 2	Homepage + design	1 week
Week 3–4	Build HTML/CSS/JS	2 weeks
Week 5	Testing + polish	1 week

Total: 5–6 weeks

⸻

10. Acceptance Criteria

The website is considered complete when:
	•	All required pages built
	•	Fully responsive
	•	Matches design system
	•	Form works reliably
	•	Loads fast on mobile
	•	All images optimized
	•	SEO metadata added
	•	Phone number always visible
	•	Client approves look & content

⸻

END OF PRD — Version 1.1