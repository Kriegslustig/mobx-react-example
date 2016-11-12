const lang = 'en'
const strings = {
  'errors.no-empty-strings': { en: 'Field may not be empty.' },
  'errors.alphanumeric': { en: 'Field value must only contain numbers and letters.' }
}

export type TranslationKey = $Keys<typeof strings>
export default (key: TranslationKey): string => strings[key][lang]

