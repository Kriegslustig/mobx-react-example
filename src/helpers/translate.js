const lang = 'en'
const strings = {
  'errors.no-empty-strings': { en: 'Field may not be empty' }
}

export type TranslationKey = $Keys<typeof strings>
export default (key: string) => strings[key][lang]

