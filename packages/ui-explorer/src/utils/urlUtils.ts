const charTable = {
  Ä: 'Ae',
  ä: 'ae',
  Ö: 'Oe',
  ö: 'oe',
  Ü: 'Ue',
  ü: 'ue',
  ß: 'ss',
  ' ': '-', // Leerzeichen
  '–': '-', // Gedankenstrich
  ',': '',
  ';': '',
  '/': '_',
  '„': '',
  '“': '',
}

const cleanChars = (c: string) => {
  const replacement = charTable[c]
  if (replacement || replacement === '') {
    return replacement
  }
  return c
}

export const cleanUrlPathPart = (text: string) => {
  if (!text) {
    return ''
  }
  return text
    .replace(/[^A-Za-z0-9,;]/g, cleanChars)
    .replace(/(-)+/g, '-')
    .toLowerCase()
}
