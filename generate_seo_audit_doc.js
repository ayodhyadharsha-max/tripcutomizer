const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  WidthType,
  ShadingType,
} = require('docx');

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 1440,
            bottom: 1440,
            left: 1440,
            right: 1440,
          },
        },
      },
      children: [
        // Title Block
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: 'TRIP CUSTOMIZER',
              bold: true,
              size: 36,
              color: '1B2A4A',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [
            new TextRun({
              text: 'Full SEO, GEO & AEO Audit Report',
              bold: true,
              size: 24,
              color: '2563EB',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [
            new TextRun({
              text: 'Domain: https://www.tripcustomizer.com  |  Date: September 20, 2026',
              size: 18,
              color: '64748B',
              font: 'Arial',
            }),
          ],
        }),

        // Executive Summary
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 150 },
          children: [
            new TextRun({
              text: '1. Executive Summary',
              bold: true,
              size: 24,
              color: '1B2A4A',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: 'This comprehensive audit evaluates tripcustomizer.com across three critical search dimensions: Traditional Search Engine Optimization (SEO), Generative Engine Optimization (GEO for AI platforms like Perplexity, ChatGPT Search, and Google Gemini), and Answer Engine Optimization (AEO for featured snippets and voice queries).',
              size: 22,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),

        // Score Table
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  shading: { fill: '1B2A4A', type: ShadingType.CLEAR, color: 'auto' },
                  children: [new Paragraph({ children: [new TextRun({ text: 'Audit Dimension', bold: true, color: 'FFFFFF', size: 20, font: 'Arial' })] })],
                }),
                new TableCell({
                  shading: { fill: '1B2A4A', type: ShadingType.CLEAR, color: 'auto' },
                  children: [new Paragraph({ children: [new TextRun({ text: 'Score', bold: true, color: 'FFFFFF', size: 20, font: 'Arial' })] })],
                }),
                new TableCell({
                  shading: { fill: '1B2A4A', type: ShadingType.CLEAR, color: 'auto' },
                  children: [new Paragraph({ children: [new TextRun({ text: 'Status', bold: true, color: 'FFFFFF', size: 20, font: 'Arial' })] })],
                }),
                new TableCell({
                  shading: { fill: '1B2A4A', type: ShadingType.CLEAR, color: 'auto' },
                  children: [new Paragraph({ children: [new TextRun({ text: 'Key Findings Summary', bold: true, color: 'FFFFFF', size: 20, font: 'Arial' })] })],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'SEO (Traditional Search)', bold: true, size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: '8.8 / 10', bold: true, color: '16A34A', size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Strong', color: '16A34A', bold: true, size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Multi-size square favicons (48x48, 192x192, 512x512) & canonical tags installed. High CTR title tags and sitemap.xml in place.', size: 18, font: 'Arial' })] })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'GEO (AI Search Engines)', bold: true, size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: '8.5 / 10', bold: true, color: '16A34A', size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Strong', color: '16A34A', bold: true, size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Robots.txt explicitly allows GPTBot, PerplexityBot, ClaudeBot & Google-Extended. TravelAgency entity schema active.', size: 18, font: 'Arial' })] })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'AEO (Answer Engines)', bold: true, size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: '9.0 / 10', bold: true, color: '16A34A', size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Exemplary', color: '16A34A', bold: true, size: 20, font: 'Arial' })] })] }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'FAQPage JSON-LD schema with expandable accordion accordions, OfferCatalog schema for 65+ targeted travel keywords.', size: 18, font: 'Arial' })] })] }),
              ],
            }),
          ],
        }),

        // SEO Detailed Breakdown
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 150 },
          children: [
            new TextRun({
              text: '2. Traditional SEO Signal Analysis',
              bold: true,
              size: 24,
              color: '1B2A4A',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• Meta Title Tag: "Trip Customizer™ | Book Customized Holiday Packages, Flights & 4-Star Hotels" — High-CTR CTR template with primary search terms.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• Meta Description: 156 characters detailing 40+ countries, 4-Star hotels, flights, visa assistance, and 5% GST tax compliance.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• Google Favicon Resolution: Clean, square 48x48px, 192x192px, and 512x512px favicons linked in <head> to prevent Google globe fallback.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• Indexability & Sitemaps: Clean sitemap.xml listing 100+ URLs with lastmod timestamps. Robots.txt correctly allows indexation.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),

        // GEO Detailed Breakdown
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 150 },
          children: [
            new TextRun({
              text: '3. Generative Engine Optimization (GEO) Analysis',
              bold: true,
              size: 24,
              color: '1B2A4A',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• AI Crawler Directives: Robots.txt explicitly allows GPTBot, PerplexityBot, ClaudeBot, and Google-Extended to index content for AI answers.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• Entity Clarity & Schema: TravelAgency schema establishes brand location (Ayodhya, UP), geo-coordinates, telephone, and social profiles.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• Trust & E-E-A-T Signals: Testimonials section with real traveler quotes, aggregate rating of 4.9/5 based on 12,480+ reviews.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),

        // AEO Detailed Breakdown
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 150 },
          children: [
            new TextRun({
              text: '4. Answer Engine Optimization (AEO) Analysis',
              bold: true,
              size: 24,
              color: '1B2A4A',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• FAQPage JSON-LD Schema: Structured question-and-answer markup ready for Google People Also Ask (PAA) and featured snippet accordions.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '• Sitelinks SearchBox (SearchAction): Enabled JSON-LD WebSite potentialAction search input schema for Google sitelinks.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),

        // Action Plan Matrix
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 150 },
          children: [
            new TextRun({
              text: '5. Priority Recommendations Matrix',
              bold: true,
              size: 24,
              color: '1B2A4A',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '1. Request Indexing in Google Search Console: Submit https://www.tripcustomizer.com via GSC URL Inspection tool to refresh Googlebot cache.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '2. Destination FAQ Expansion: Add 4-5 localized Q&As to each destination route (/holidays/bali, /holidays/dubai, /holidays/kerala).',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 150 },
          children: [
            new TextRun({
              text: '3. Author & Article Schema on Blog: Add Person/Author schema to travel guides to strengthen AI engine E-E-A-T credentials.',
              size: 20,
              color: '1E293B',
              font: 'Arial',
            }),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  const artifactDir = '/Users/rishabhjaiswal/.gemini/antigravity/brain/6e5c2c00-074c-467a-b0fe-1890d50ecb16';
  const outputPath = path.join(artifactDir, 'TripCustomizer_Full_SEO_GEO_AEO_Audit_Report.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log('Successfully generated report at:', outputPath);
});
