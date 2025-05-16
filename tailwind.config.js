module.exports = {
  content: [
    './**/*.html',
    './**/*.md'
  ],
  darkMode: 'media',
}

// tailwind.config.js
module.exports = {
  content: [
    './**/*.html',
    './**/*.md'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // 1. Paragraphs: remove default top/bottom gap, add first-line indent
            p: {
              marginTop: 0,
              marginBottom: theme('spacing.2'),    // ≈0.5rem
              textIndent: '1.5em',
              '&:first-of-type': {
                textIndent: 0
              },
            },
            // 2. Subsection headings (h3 -> your “2.1”, “2.2”)
            h3: {
              marginBottom: theme('spacing.4'),   // ≈1rem
            },
            // 3. List items: air out bullets
            'ul > li': {
              marginTop: theme('spacing.2'),
              marginBottom: theme('spacing.2'),
            },
            // 4. Link underlines: faint by default, darken on hover
            a: {
              textDecoration: 'underline',
              textDecorationColor: theme('colors.gray.400'),
              transition: 'text-decoration-color 0.2s ease',
              '&:hover': {
                textDecorationColor: theme('colors.gray.700'),
              },
            },
            // 5. Bold weight for your “CRYPTO 2025”
            strong: {
              fontWeight: theme('fontWeight.bold'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
