import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads without errors
    await expect(page).toHaveTitle(/ZMS IT Hub/);
    
    // Check for main heading
    await expect(page.getByRole('heading', { name: /Transform Your Business/ })).toBeVisible();
    
    // Check for CTA buttons
    await expect(page.getByRole('link', { name: /Get Free Quote/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /View Our Work/ })).toBeVisible();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    
    // Click on Get Free Quote button
    await page.getByRole('link', { name: /Get Free Quote/ }).click();
    
    // Should navigate to contact page
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: /Get In Touch/ })).toBeVisible();
  });

  test('should display services section', async ({ page }) => {
    await page.goto('/');
    
    // Check for services section
    await expect(page.getByRole('heading', { name: /Our Core Services/ })).toBeVisible();
    
    // Check for service cards
    await expect(page.getByText('Custom Software Development')).toBeVisible();
    await expect(page.getByText('Mobile App Development')).toBeVisible();
    await expect(page.getByText('Web Application Development')).toBeVisible();
  });

  test('should display testimonials', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to testimonials section
    await page.getByRole('heading', { name: /What Our Clients Say/ }).scrollIntoViewIfNeeded();
    
    // Check for testimonials
    await expect(page.getByText('Sarah Johnson')).toBeVisible();
    await expect(page.getByText('Ahmed Hassan')).toBeVisible();
    await expect(page.getByText('Maria Rodriguez')).toBeVisible();
  });
});

test.describe('Contact Form', () => {
  test('should submit contact form successfully', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill out the form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.selectOption('select[name="service"]', 'Custom Software Development');
    await page.fill('textarea[name="message"]', 'I need help with a custom software project.');
    
    // Submit the form
    await page.getByRole('button', { name: /Send Message/ }).click();
    
    // Check for success message
    await expect(page.getByText('Message Sent Successfully!')).toBeVisible();
  });

  test('should show validation errors for required fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    await page.getByRole('button', { name: /Send Message/ }).click();
    
    // Check for validation errors
    await expect(page.getByText('Name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Please select a service')).toBeVisible();
    await expect(page.getByText('Message is required')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to About page
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole('heading', { name: /About ZMS IT Hub/ })).toBeVisible();
    
    // Navigate to Services page
    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL('/services');
    await expect(page.getByRole('heading', { name: /Our Software Development Services/ })).toBeVisible();
    
    // Navigate to Contact page
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: /Get In Touch/ })).toBeVisible();
  });

  test('should work on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Check if mobile menu button is visible
    await expect(page.getByRole('button', { name: 'Toggle menu' })).toBeVisible();
    
    // Open mobile menu
    await page.getByRole('button', { name: 'Toggle menu' }).click();
    
    // Check if mobile menu items are visible
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });
});

test.describe('SEO and Performance', () => {
  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check for meta description
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDescription).toBeTruthy();
    
    // Check for Open Graph tags
    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content');
    expect(ogTitle).toBeTruthy();
    
    const ogDescription = await page.getAttribute('meta[property="og:description"]', 'content');
    expect(ogDescription).toBeTruthy();
  });

  test('should load images with proper alt text', async ({ page }) => {
    await page.goto('/');
    
    // Check for images with alt text
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check for H1
    await expect(page.locator('h1')).toBeVisible();
    
    // Check for H2 headings
    const h2Elements = await page.locator('h2').count();
    expect(h2Elements).toBeGreaterThan(0);
  });
});

