export const typography = {
  title: {
    regular: {
      fontSize: 26,
      lineHeight: 34,
    },
    strong: {
      fontSize: 26,
      lineHeight: 34,
    },
  },
  titleSmall: {
    regular: {
      fontSize: 22,
      lineHeight: 28.6,
    },
    strong: {
      fontSize: 22,
      lineHeight: 28.6,
    },
  },
  titleXSmall: {
    regular: {
      fontSize: 18,
      lineHeight: 23.4,
    },
    strong: {
      fontSize: 18,
      lineHeight: 23.4,
    },
  },
  subtitle: {
    regular: {
      fontSize: 16,
      lineHeight: 24,
    },
    strong: {
      fontSize: 16,
      lineHeight: 24,
    },
  },
  body: {
    regular: {
      fontSize: 16,
      lineHeight: 22,
    },
    strong: {
      fontSize: 16,
      lineHeight: 22,
    },
  },
  bodySmall: {
    regular: {
      fontSize: 14,
      lineHeight: 20,
    },
    strong: {
      fontSize: 14,
      lineHeight: 20,
    },
  },
  caption: {
    regular: {
      fontSize: 12,
      lineHeight: 18,
    },
    strong: {
      fontSize: 12,
      lineHeight: 18,
    },
  },
} as const;

export type TypographyVariant = keyof typeof typography;

export type FontWeight = 'regular' | 'strong';
