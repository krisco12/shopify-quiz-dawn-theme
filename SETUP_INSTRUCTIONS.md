# KC Theory Shopify Store - Setup Instructions

## Fixing 404 Catalogue Errors

Your theme has been updated with all the KC Theory branding and features. To fix the 404 errors on catalogue/collection links, follow these steps in your Shopify admin:

### Step 1: Create Product Collections

1. Log in to your Shopify admin
2. Go to **Products > Collections**
3. Create the following three collections:

#### Collection 1: ADHD Tools
- Click **Create collection**
- **Title:** ADHD Tools
- **Handle:** adhd-tools (auto-generated)
- **Description:** Practical tools designed to help men with ADHD improve focus and organization in daily life.
- **Collection type:** Manual
- Click **Save**

#### Collection 2: Stress Relief
- Click **Create collection**
- **Title:** Stress Relief
- **Handle:** stress-relief (auto-generated)
- **Description:** Evidence-based products for managing stress, anxiety, and overwhelm.
- **Collection type:** Manual
- Click **Save**

#### Collection 3: Journals & Planners
- Click **Create collection**
- **Title:** Journals & Planners
- **Handle:** journals-planners (auto-generated)
- **Description:** Structured planning tools designed for neurodivergent thinking patterns.
- **Collection type:** Manual
- Click **Save**

#### Collection 4: All Products (Optional)
- Click **Create collection**
- **Title:** All Products
- **Handle:** all (auto-generated)
- **Collection type:** Automated
- **Conditions:** Product price is greater than 0
- Click **Save**

### Step 2: Update Your Homepage

1. Go to **Online Store > Themes**
2. Click **Customize** on your active theme
3. On the homepage:

#### Add KC Theory Hero Section
- Click **Add section**
- Select **KC Theory Hero**
- The default KC Theory background image will be used automatically
- Customize the heading and buttons:
  - **Heading:** "Welcome to The KC Theory"
  - **Subheading:** "Supporting men with ADHD through evidence-based tools and resources"
  - **Primary Button:** "Take the Quiz" → `/pages/quiz`
  - **Secondary Button:** "Shop Now" → `/collections/all`
- Click **Save**

#### Add KC Collections Section
- Click **Add section**
- Select **KC Collections**
- Click **Add block** three times to add three collection blocks
- For each block:
  - Select the collection (ADHD Tools, Stress Relief, Journals & Planners)
  - Enable "Show collection description"
  - Enable "Show product count"
- Click **Save**

### Step 3: Fix Navigation Menu

1. Go to **Online Store > Navigation**
2. Click on **Main menu**
3. Look for any "Catalogue" or "Catalog" links
4. Click on the link to edit it
5. Change the link to: **Collections > All Products** (or `/collections/all`)
6. Click **Save menu**

### Step 4: Create the Quiz Page

1. Go to **Online Store > Pages**
2. Click **Add page**
3. **Title:** What's Your ADHD Focus Type?
4. **Content:** (leave blank or add intro text)
5. **Template:** Select `page.quiz` from the dropdown
6. Click **Save**
7. Add this page to your navigation menu if desired

### Step 5: Remove Password Protection (If Applicable)

If your store is showing "This store does not exist":

1. Go to **Online Store > Preferences**
2. Scroll to **Password protection**
3. If enabled, uncheck "Enable password"
4. Click **Save**

Your store will now be publicly accessible.

### Step 6: Add Products (When Ready)

1. Go to **Products > Add product**
2. Create products for each category
3. In the product editor, scroll to **Product organization**
4. Select which collection(s) the product belongs to
5. Click **Save**

## What's Been Added to Your Theme

### New Sections
- **KC Theory Hero** (`sections/kc-hero.liquid`) - Landing page hero with your logo background
- **KC Collections** (`sections/kc-collections.liquid`) - Beautiful collection grid display
- **KC Quiz** (`sections/kc-quiz.liquid`) - ADHD Focus Type Quiz intro

### New Assets
- **kc-base.css** - Brand colors, typography, button system
- **kc-accessibility.css/js** - ADHD-friendly accessibility features
- **kc-hero-section.css** - Hero section styling
- **kc-collection.css** - Collections display styling
- **kc-quiz.css/js** - Complete quiz functionality
- **kc-hero-background.png** - Your KC Theory logo background image

### Accessibility Features (Already Active)
- Text size control (4 levels)
- High contrast mode
- Reduced motion
- Focus mode (Alt+F)
- Dyslexia-friendly font
- Keyboard shortcuts (Alt+A for menu)

All settings are saved automatically and persist across sessions.

## Testing Your Store

### Test Checklist
- [ ] Homepage loads with KC Theory hero background
- [ ] Accessibility button appears (bottom-right corner)
- [ ] All navigation links work (no 404 errors)
- [ ] Collections display products
- [ ] Quiz page loads correctly
- [ ] Mobile responsive design works
- [ ] Accessibility features function properly

### Common Issues

**Issue:** Still getting 404 on catalogue link
**Solution:** Make sure you created the collections AND updated the navigation menu to point to the correct collection URL

**Issue:** Hero background not showing
**Solution:** The default KC Theory background is included. If you want to use a different image, upload it in the theme customizer

**Issue:** Collections are empty
**Solution:** Add products and assign them to collections in the product editor

**Issue:** Store not accessible
**Solution:** Remove password protection in Online Store > Preferences

## Next Steps

1. **Add Products:** Create at least 3-5 products per collection
2. **Customize Content:** Update hero section text, collection descriptions
3. **Set Up Payments:** Configure payment methods in Settings > Payments
4. **Configure Shipping:** Set up shipping zones in Settings > Shipping
5. **Add Legal Pages:** Create Privacy Policy, Terms of Service, Returns Policy
6. **Connect Domain:** Add your custom domain in Settings > Domains

## Support

All changes have been pushed to your GitHub repository and will automatically sync to your Shopify store within 1-2 minutes.

If you need additional features or customizations, refer to the deployment summary documents provided earlier.

Your KC Theory store is ready to launch! 🚀

