---
trigger: always_on
---

# My Portfolio Astro - Development Rules

## Project Overview

This is a **One Page Portfolio** website built with Astro 5.x, consuming data from local JSON files. All sections are displayed on a single scrollable page with smooth navigation. The project focuses on performance, type safety, and modern web development practices.

**Project Structure:**
- **Astro Project Directory:** `c:\laragon\www\my_online_portfolio\myPortfolio2026`
- **Base Reference File:** `c:\laragon\www\my_online_portfolio\base_information.html` (contains all content and layout to migrate)

**Tech Stack:**
- **Astro 5.x** - Main framework (SSG/SSR hybrid)
- **Tailwind CSS v4** - Styling with @theme
- **TypeScript** - Static typing
- **Zod** - Schema validation for JSON data
- **Leaflet** - Interactive maps
- **PhotoSwipe** - Image galleries lightbox
- **Notyf** - Toast notifications

---

## 1. Project Architecture

### Folder Structure Example

```
src/
├── actions/           # Astro Actions (server-side)
│   └── contact.ts     # Form submission logic
├── assets/            # Local optimized images and JSON data files
│   └── data/          # JSON files with content
├── components/        # Reusable Astro components
│   ├── myTechnicalAbilities/    # Technical abilities section component
│   ├── heroSection/       # Engineer profile section component
│   ├── myRecentWorks/           # Recent works section component
│   ├── myCareer/                # Career timeline section component
│   ├── myCertifications/        # Certifications section component
│   └── ui/                      # General UI components (buttons, cards, etc.)
├── helpers/           # Utility functions
├── layouts/           # Main layouts
│   └── Layout.astro   # Base layout with Header/Footer
├── pages/             # Site routes (file-based routing)
│   └── index.astro    # Main one-page portfolio (ALL sections here)
├── styles/            # Global styles
│   └── global.css     # Tailwind + custom utilities
└── types/             # Zod schemas and TypeScript types
    └── index.ts       # All schemas centralized
```

### Architecture Principles

1. **One Page Design:** All sections on a single scrollable page with smooth scroll navigation
2. **Component-Driven:** Every section is a reusable component imported into `index.astro`
3. **Type-Safe:** Strict validation with Zod at runtime + TypeScript at compile time
4. **Data-First:** All data comes from local JSON files in `src/assets/data/`
5. **Performance-First:** SSG by default, image optimization, lazy loading
6. **Mobile-First:** Responsive design from mobile to desktop

---

## 2. Image Optimization

### Picture Component Usage

**ALWAYS use Astro's `Picture` component for images** instead of `<img>` tags for maximum performance.

```astro
---
import { Picture } from 'astro:assets';
---

<Picture 
  src="/src/assets/img/image-name.jpg"
  alt="Descriptive alt text"
  width={512}
  height={512}
  formats={['avif', 'webp', 'jpg']}
  class="your-classes-here"
/>
```

**Benefits:**
- ✅ Automatic image optimization
- ✅ Multiple format generation (AVIF, WebP, JPG)
- ✅ Responsive images with srcset
- ✅ Lazy loading by default
- ✅ Better Core Web Vitals scores

**Rules:**
- NEVER use `<img>` tags directly
- ALWAYS import `Picture` from `'astro:assets'`
- ALWAYS specify `width` and `height`
- ALWAYS use `formats={['avif', 'webp', 'jpg']}` for maximum compatibility
- ALWAYS provide descriptive `alt` text

---

## 3. Design System: "The Architectural Logic"

### Creative Philosophy

The core philosophy is **Architectural Logic** - treating the digital interface as a high-end IDE meets an editorial tech journal. We showcase the precision of a senior engineer's mental model through **Tonal Layering** and **Intentional Asymmetry**.

**Key Principles:**
- No standard UI tropes (heavy borders, flat shadows)
- Developer-centric aesthetic with subtle grid backgrounds
- High-contrast, authoritative typography
- Depth through tonal layering, not shadows

---

### Color System: Depth and Luminance

**Base Palette:**
- **Background:** `#081425` - The primary void, foundation for all depth
- **Primary:** `#adc6ff` - Light and interaction, soft glow against dark base
- **Tertiary:** `#ffb786` - Unexpected warmth for high-impact technical callouts

**Surface Hierarchy:**
```
Level 0 (Base):        surface (#081425)
Level 1 (Sections):    surface_container_low (#111c2d)
Level 2 (Cards):       surface_container_high (#1f2a3c)
Level 3 (Elevated):    surface_container_highest (#2a3548)
```

**The "No-Line" Rule:**
❌ **NEVER** use standard 1px solid borders for structural sectioning

✅ **DO** define boundaries through:
1. **Background Shifts:** Transition from `surface` to `surface_container_low`
2. **Negative Space:** Use spacing scale (12-20) to create content "islands"
3. **Luminous Gradients:** Subtle gradient from `primary` to `primary_container` for hero elements

**Surface Nesting Example:**
```astro
<!-- Global Background -->
<div class="bg-surface">
  <!-- Project Card -->
  <div class="bg-surface-container-low">
    <!-- Code Snippet -->
    <div class="bg-surface-container-highest">
      <!-- Content -->
    </div>
  </div>
</div>
```

---

### Typography: Editorial Precision

**Font Strategy:**
- **Plus Jakarta Sans** - Display, headlines, titles (tight letter-spacing: -0.02em)
- **Inter** - Body text (generous line-height: 1.6 for legibility)
- **Space Grotesk** - Technical labels, metadata, tags

**Scale Usage:**

```css
/* Display Scale - Plus Jakarta Sans */
.display-lg { font-size: 3.5rem; letter-spacing: -0.02em; }
.display-md { font-size: 2.75rem; letter-spacing: -0.02em; }
.display-sm { font-size: 2rem; letter-spacing: -0.02em; }

/* Headline/Title - Plus Jakarta Sans */
.headline-lg { font-size: 1.75rem; }
.title-md { font-size: 1.25rem; }

/* Body - Inter */
.body-lg { font-size: 1.125rem; line-height: 1.6; }
.body-md { font-size: 1rem; line-height: 1.6; }

/* Label - Space Grotesk */
.label-md { font-size: 0.875rem; text-transform: uppercase; }
.label-sm { font-size: 0.75rem; text-transform: uppercase; }
```

---

### Elevation & Depth: Tonal Physics

**NO BLACK SHADOWS** - Depth is an interaction of light and surface.

**Ambient Shadows (for floating elements):**
```css
/* Soft ambient glow mimicking monitor in dark room */
box-shadow: 0 0 40px rgba(216, 227, 251, 0.06);
/* or */
box-shadow: 0 0 60px rgba(216, 227, 251, 0.08);
```

**Glassmorphism (for overlays like header nav):**
```css
.glass-panel {
  background: rgba(42, 53, 72, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(140, 144, 159, 0.15);
}
```

---

### Component Patterns

#### Buttons

**Primary Button:**
```astro
<button class="bg-gradient-to-r from-primary to-primary-container rounded-lg px-6 py-3">
  Action
</button>
```

**Secondary Button:**
```astro
<button class="bg-surface-container-highest text-primary rounded-lg px-6 py-3">
  Action
</button>
```

**Tertiary Button:**
```astro
<button class="text-primary underline decoration-primary hover:decoration-2">
  Action
</button>
```

#### Cards & Projects

**Rules:**
- ❌ NO divider lines between sections
- ✅ Separate sections with vertical spacing (`spacing-6`)
- ✅ On hover: shift from `surface_container_low` to `surface_container_high`
- ✅ Add subtle `primary` glow at bottom-right corner on hover

```astro
<div class="bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 p-8 rounded-xl relative group">
  <!-- Project Header -->
  <h3 class="font-headline text-2xl mb-6">Project Name</h3>
  
  <!-- Tech Stack (separated by spacing, not lines) -->
  <div class="flex gap-2">
    <!-- Tech chips -->
  </div>
  
  <!-- Hover glow -->
  <div class="absolute bottom-0 right-0 w-20 h-20 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
```

#### Technical Chips (Metadata)

```astro
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-label uppercase tracking-wider rounded-full">
  React
</span>
```

#### Code Snippets & Technical Blocks

```astro
<div class="bg-surface-container-highest rounded-r-lg rounded-l-none p-6 relative">
  <!-- Glow bar on left edge -->
  <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
  
  <pre class="font-mono text-sm">
    <code>const example = "code";</code>
  </pre>
</div>
```

---

### Design Do's and Don'ts

#### ✅ DO:

1. **Use asymmetrical layouts** - Push content right, leave left for vertical label metadata
2. **Use `primary_fixed_dim` for icons** - Makes them feel part of the interface, not stickers
3. **Embrace vertical white space** - If you think there's enough space, add `spacing-4` more
4. **Use tonal shifts for depth** - Layer surface tiers instead of shadows
5. **Use `on_surface` (#d8e3fb) for text** - Never pure white to reduce eye strain

#### ❌ DON'T:

1. **Don't use 100% white (#FFFFFF)** - All "white" text should be `on_surface` (#d8e3fb)
2. **Don't use high-contrast borders** - If you can see the line clearly, it's too heavy
3. **Don't use standard drop shadows** - Use tonal shifts and blurs to define depth
4. **Don't use divider lines in cards** - Use spacing to separate sections
5. **Don't ignore the surface hierarchy** - Always nest surfaces logically

---

### Grid Background Pattern

```css
.bg-grid-pattern {
  background-image: radial-gradient(circle, #4d8eff 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.05;
}
```

**Usage:** Apply to hero sections or full-page backgrounds to suggest infinite scale.

---

## 3. Data Validation with Zod

### Validation Philosophy

**Principle:** Always validate external data (JSON files) with Zod schemas.

**Benefits:**
1. **Type Safety:** TypeScript automatically infers types
2. **Runtime Validation:** Detects errors in production
3. **Documentation:** Schemas document data structure
4. **Transformations:** Allows coercion and data transformation

### Base Schema Pattern

```typescript
const imageSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
})

export const BaseContentSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  image: imageSchema,
  subtitle: z.string().optional(),
});
```

### Schema Extension

```typescript
// Gallery
export const GalleryPageSchema = BaseContentSchema.extend({
  gallery: z.array(imageSchema),
})

// Technical Abilities
export const TechnicalAbilitySchema = BaseContentSchema.extend({
  command: z.string(),
  description: z.string().optional(),
})
```

### Validation Best Practices

✅ **DO:**
```typescript
const result = PostsSchema.safeParse(jsonData);
if (!result.success) {
    console.error(result.error);
    return [];
}
const posts = result.data;
```

❌ **DON'T:**
```typescript
const data = PostsSchema.parse(jsonData);  // Can break the build
```

### Type Inference

```typescript
export type TechnicalAbility = z.infer<typeof TechnicalAbilitySchema>
```

**IMPORTANT:** Always use `safeParse()` in `getStaticPaths` to prevent build failures.

---

## 3. One Page Structure

### Single Page Architecture

**File structure:**
```
src/pages/
└── index.astro    # Main one-page portfolio
```

### Main Page Structure (index.astro)

```astro
---
import Layout from '../layouts/Layout.astro';
import heroSection from '../components/heroSection/heroSection.astro';
import MyTechnicalAbilities from '../components/myTechnicalAbilities/MyTechnicalAbilities.astro';
import MyRecentWorks from '../components/myRecentWorks/MyRecentWorks.astro';
import MyCareer from '../components/myCareer/MyCareer.astro';
import MyCertifications from '../components/myCertifications/MyCertifications.astro';
import ContactForm from '../components/ui/ContactForm.astro';

// Load data from JSON files
import technicalAbilitiesData from '../assets/data/technicalAbilities.json';
import recentWorksData from '../assets/data/recentWorks.json';
import careerData from '../assets/data/career.json';
import certificationsData from '../assets/data/certifications.json';
---

<Layout title="My Portfolio">
  <!-- Hero Section -->
  <section id="home">
    <HeroSection />
  </section>
  
  <!-- Technical Abilities Section -->
  <section id="skills">
    <MyTechnicalAbilities abilities={technicalAbilitiesData} />
  </section>
  
  <!-- Recent Works Section -->
  <section id="projects">
    <MyRecentWorks works={recentWorksData} />
  </section>
  
  <!-- Career Timeline Section -->
  <section id="experience">
    <MyCareer timeline={careerData} />
  </section>
  
  <!-- Certifications Section -->
  <section id="certifications">
    <MyCertifications certs={certificationsData} />
  </section>
  
  <!-- Contact Section -->
  <section id="contact">
    <ContactForm />
  </section>
</Layout>
```

### Smooth Scroll Navigation

**Header navigation with anchor links:**

```astro
<nav>
  <a href="#home">Home</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#experience">Experience</a>
  <a href="#certifications">Certifications</a>
  <a href="#contact">Contact</a>
</nav>
```

**CSS for smooth scrolling:**

```css
html {
  scroll-behavior: smooth;
}

section {
  scroll-margin-top: 80px; /* Offset for fixed header */
}
```

### Layout Slots

**Layout with multiple slots:**

```astro
<slot name="before-main-content" />
<main>
    <slot />  <!-- Default slot -->
</main>
<slot name="after-main-content" />
```

**Usage:**

```astro
<Layout>
    <div>Main content</div>
    
    <HomeGallery slot="after-main-content" />
    <ProductsMenu slot="after-main-content" />
</Layout>
```

---

## 4. Image Optimization

### Picture Component

**Basic usage:**

```astro
<Picture 
    src={imageUrl} 
    alt="Description" 
    width={1200} 
    height={800} 
    formats={["avif", "webp"]} 
    class="w-full"
/>
```

**Generated formats:**
1. **AVIF** - Best compression (50% better than WebP)
2. **WebP** - Modern fallback
3. **Original** - Fallback for old browsers

### Local vs Remote Images

**Conditional rendering:**

```astro
{typeof bgImage === 'string' ? (
    <img 
        src={bgImage} 
        alt="Background" 
        class="absolute inset-0 w-full h-full object-cover"
    />
) : (
    <Picture 
        src={bgImage} 
        alt="Background" 
        formats={["avif", "webp"]}
        class="absolute inset-0 w-full h-full object-cover"
    />
)}
```

### Image Best Practices

✅ **DO:**
```astro
<Picture 
    src={image.url} 
    width={image.width} 
    height={image.height}
    formats={["avif", "webp"]}
/>
```

❌ **DON'T:**
```astro
<img src={image.url}>  <!-- No optimization -->
```

---

## 5. Forms and Actions

### Astro Actions (Server-Side)

**Definition:**

```typescript
// src/actions/contact.ts
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const nullToEmptyString = (val: unknown) => val === null ? '' : val;

export const contact = {
    sendEmail: defineAction({
        accept: "form",  // Accepts FormData
        input: z.object({
            name: z.preprocess(
                nullToEmptyString,
                z.string().min(1, { message: "Name is required" })
            ),
            email: z.preprocess(
                nullToEmptyString,
                z.string()
                    .min(1, { message: "Email is required" })
                    .email({ message: "Invalid email" })
            ),
            message: z.preprocess(
                nullToEmptyString,
                z.string().min(10, { message: "Message must be at least 10 characters" })
            ),
        }),
        
        handler: async (input) => {
            // Server-side logic here
            // Send email, save to database, etc.
            
            return {
                error: false,
                message: "Message sent successfully!"
            }
        }
    })
}
```

### Client-Side Handling

```astro
<script>
  import { actions, isInputError } from 'astro:actions';
  import { Notyf } from 'notyf';

  const form = document.querySelector('form');
  
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    const { data, error } = await actions.contact.sendEmail(formData);
    const inputErrors = isInputError(error) ? error.issues : [];
    
    const notyf = new Notyf({
        duration: 5000,
        position: { x: 'right', y: 'top' },
        dismissible: true,
    });
    
    if (inputErrors.length > 0) {
      inputErrors.forEach(error => {
        notyf.error(error.message);
      });
      return;
    }
    
    if (data?.message && !data.error) {
      notyf.success(data.message);
      form.reset();
    }
  });
</script>
```

---

## 6. Section Components

### Component Structure Pattern

**Each section component should:**
1. Accept data as props
2. Be self-contained and reusable
3. Include its own styling
4. Have a unique `id` for anchor navigation

**Example: MyTechnicalAbilities.astro**

```astro
---
import type { TechnicalAbility } from '@/types';
import { TechnicalAbilitiesSchema } from '@/types';

interface Props {
  abilities: TechnicalAbility[];
}

const { abilities } = Astro.props;

// Validate data
const result = TechnicalAbilitiesSchema.safeParse(abilities);
if (!result.success) {
  console.error('Validation error:', result.error);
}
const validAbilities = result.success ? result.data : [];
---

<section id="skills" class="py-20">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold mb-10">Technical Abilities</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {validAbilities.map(ability => (
        <div class="card">
          <h3>{ability.title}</h3>
          <p>{ability.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Data Loading Pattern

**In index.astro:**

```astro
---
import technicalAbilitiesData from '../assets/data/technicalAbilities.json';
import recentWorksData from '../assets/data/recentWorks.json';
import careerData from '../assets/data/career.json';

// Pass data to components as props
---

<MyTechnicalAbilities abilities={technicalAbilitiesData} />
<MyRecentWorks works={recentWorksData} />
<MyCareer timeline={careerData} />
```

---

## 7. Image Galleries

### PhotoSwipe Integration

**Component:**

```astro
---
import type { Gallery } from "@/types";
import { Picture } from 'astro:assets';

interface Props {
    gallery: Gallery[];
}
const { gallery } = Astro.props;
---

<div class="grid gap-5 grid-cols-1 lg:grid-cols-3" id="gallery">
    {gallery.map((image, index) => (
        <a 
            href={image.full.url} 
            data-pswp-width={image.full.width}
            data-pswp-height={image.full.height}
            target="_blank"
        >
            <Picture 
                src={image.large.url} 
                alt={`Image ${index + 1}`}
                width={image.large.width}
                height={image.large.height}
                formats={["avif", "webp"]}
                class="w-full h-full object-cover"
            />
        </a>
    ))}
</div>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: () => import('photoswipe')
});

lightbox.init();

// Reinitialize after View Transitions
document.addEventListener('astro:after-swap', function () {
    lightbox.init();
})
</script>
```

### View Transitions Compatibility

**Problem:** Third-party libraries don't reinitialize after SPA navigation

**Solution:** Event listener `astro:after-swap`

```javascript
document.addEventListener('astro:after-swap', function () {
    lightbox.init();
})
```

---

## 8. Performance and Cache

### Cache Strategies

**For development:**
```typescript
// Force fresh data during development
const jsonData = await import('../assets/data/content.json?v=' + Date.now());
```

### Cache Cleanup

**Script in package.json:**

```json
{
  "scripts": {
    "clean": "powershell -Command \"Remove-Item -Recurse -Force -ErrorAction SilentlyContinue .astro, node_modules\\.vite, dist\""
  }
}
```

**Usage:**
```bash
npm run clean
```

**Cache folders:**
- `.astro/` - Astro cache
- `node_modules/.vite/` - Vite optimized dependencies
- `dist/` - Build output

### Lazy Loading Fonts

```html
<link 
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=PT+Sans:wght@400;700&display=swap" 
    rel="stylesheet" 
    media="print" 
    onload="this.media='all'"
>
<noscript>
    <link href="..." rel="stylesheet">
</noscript>
```

**Benefits:**
- Doesn't block initial render
- Async loading
- Fallback for users without JS

---

## 9. Deployment

### Netlify Adapter

**Installation:**
```bash
npm install @astrojs/netlify
```

**Configuration:**

```javascript
// astro.config.mjs
import netlify from '@astrojs/netlify'

export default defineConfig({
    adapter: netlify()
});
```

### Build Process

**Command:**
```bash
npm run build
```

**Output:**
- Generates static site in `dist/`
- Pre-renders all dynamic routes
- Optimizes assets (images, CSS, JS)

### Common Deploy Errors

**Error: "Outdated Optimize Dep"**
- Cause: Obsolete Vite cache
- Solution: `npm run clean` before deploy

**Error: "Cannot read properties of undefined"**
- Cause: API data unavailable or incorrect schema
- Solution: Use `safeParse` in `getStaticPaths`

**Error: "Zod validation failed in getStaticPaths"**
- Cause: Using `parse()` instead of `safeParse()`
- Solution: Always use `safeParse()` in static route generation

---

## 10. Best Practices

### 1. Data Validation

✅ **DO:**
```typescript
const result = PostsSchema.safeParse(data);
if (!result.success) {
    console.error(result.error);
    return [];
}
```

❌ **DON'T:**
```typescript
const data = PostsSchema.parse(data);  // Can break the build
```

### 2. Asset Paths

✅ **DO:**
```astro
<img src="/icon_coffee.svg">  <!-- Absolute path -->
```

❌ **DON'T:**
```astro
<img src="icon_coffee.svg">  <!-- Relative path, fails with View Transitions -->
```

### 3. Zod Schemas

✅ **DO:**
```typescript
// Extend base schemas
export const PostSchema = BaseContentSchema.extend({
    date: z.string(),
});
```

❌ **DON'T:**
```typescript
// Duplicate definitions
export const PostSchema = z.object({
    id: z.number(),
    title: z.string(),
    // ... repeat all BaseContentSchema
});
```

### 4. Reusable Components

✅ **DO:**
```astro
<!-- Generic component with props -->
<PostCard post={post} />
```

❌ **DON'T:**
```astro
<!-- Duplicated HTML on each page -->
<article>...</article>
```

### 5. Type Safety

✅ **DO:**
```typescript
interface Props {
    location: Location;  // Type inferred from Zod
}
```

❌ **DON'T:**
```typescript
interface Props {
    location: any;  // Loses type safety
}
```

### 6. Performance

✅ **DO:**
```astro
<!-- Lazy load heavy scripts -->
<script>
  const lightbox = await import('photoswipe/lightbox');
</script>
```

❌ **DON'T:**
```astro
<!-- Synchronous import of everything -->
import PhotoSwipeLightbox from 'photoswipe/lightbox';
```

### 7. Smooth Scrolling & Navigation

✅ **DO:**
```css
html {
  scroll-behavior: smooth;
}

section {
  scroll-margin-top: 80px; /* Account for fixed header */
}
```

✅ **DO:** Use intersection observer for active nav state
```javascript
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
```

❌ **DON'T:**
```astro
<!-- Don't use View Transitions for one-page sites -->
<ViewTransitions />
```

---

## Common Code Patterns

### Load JSON + Validate Pattern

```typescript
import jsonData from '../assets/data/content.json';
import { ContentSchema } from '../types';

const result = ContentSchema.safeParse(jsonData);
if (!result.success) {
    console.error('Validation error:', result.error);
    return [];
}
const data = result.data;
```

### Conditional Rendering

```astro
{items.length > 0 ? (
    <div>{items.map(item => <Component {...item} />)}</div>
) : (
    <p>No items available</p>
)}
```

### Dynamic Class Names Example

```astro
<a 
    href={item.href} 
    class={`${isActive(item.href) ? 'text-white' : 'text-black'} uppercase text-lg`}
>
    {item.name}
</a>
```

---

## Debugging Tips

### 1. Verify JSON Data

```typescript
console.log('Raw JSON:', jsonData);
console.log('After Zod parse:', data);
```

### 2. Validate Schemas

```typescript
const result = Schema.safeParse(data);
if (!result.success) {
    console.error('Zod errors:', result.error.issues);
}
```

### 3. Inspect Props

```astro
---
console.log('Component props:', Astro.props);
---
```

### 4. Build Errors

```bash
# Clean cache before build
npm run clean
npm run build

# Build with verbose logs
npm run build -- --verbose
```

---

## Project Checklist

- [ ] Define Zod schemas in `src/types/index.ts`
- [ ] Create `BaseContentSchema` for common structure
- [ ] Create JSON data files in `src/assets/data/`
- [ ] Implement base Layout with Header/Footer
- [ ] Create reusable UI components
- [ ] Configure Tailwind with custom colors
- [ ] Implement View Transitions with `ClientRouter`
- [ ] Add cache cleanup script
- [ ] Configure deployment adapter (Netlify)
- [ ] Implement error handling with `safeParse`
- [ ] Optimize images with `Picture` component
- [ ] Lazy load fonts and heavy scripts
- [ ] Test smooth scroll navigation
- [ ] Verify all section anchor links work
- [ ] Test active navigation state with scroll
- [ ] Ensure all sections have proper IDs

---

## Key Features of One Page Design

1. **Single Page:** All content on `index.astro` with section components
2. **Anchor Navigation:** Hash-based navigation (#home, #skills, #projects, etc.)
3. **Smooth Scrolling:** CSS `scroll-behavior: smooth` for better UX
4. **Data Source:** JSON files in `src/assets/data/` loaded once
5. **No Routing:** No dynamic routes or pagination needed
6. **Fast Loading:** All content pre-rendered in single HTML file
7. **SEO Friendly:** Single page with all content indexed at once

---

## Resources

**Documentation:**
- [Astro Docs](https://docs.astro.build)
- [Zod Documentation](https://zod.dev)
- [Tailwind CSS v4](https://tailwindcss.com)

**Libraries:**
- [Leaflet](https://leafletjs.com)
- [PhotoSwipe](https://photoswipe.com)
- [Notyf](https://github.com/caroso1222/notyf)

**Tools:**
- [Netlify](https://www.netlify.com)