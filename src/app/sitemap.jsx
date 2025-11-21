// app/sitemap.js
import { productsData, projectsData, newsData } from '@/system';

export default function sitemap() {
  const baseUrl = 'https://www.gab.co.id';
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic product division pages
  const divisions = [...new Set(productsData.filter(p => p.isPublished).map(p => p.division))];
  const divisionPages = divisions.map(division => ({
    url: `${baseUrl}/products/${division.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic project pages
  const projectPages = projectsData.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic news pages
  const newsPages = newsData.map(article => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: article.highlight ? 0.8 : 0.6,
  }));

  return [...staticPages, ...divisionPages, ...projectPages, ...newsPages];
}