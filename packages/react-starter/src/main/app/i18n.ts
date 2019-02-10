import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        Vienna: 'Vienna',
        'New York': 'New York',
        and: 'and',
        'Invalid Location': 'Invalid location',
        Clear: 'Clear',
      },
      forms: {
        edit: 'Edit',
        cancel: 'Cancel',
        save: 'Save',
        addUser: 'Add User',
        name: 'Name',
        email: 'Email',
        addresses: 'Addresses',
        address: 'Address',
        street: 'Street',
        city: 'City',
        zipCode: 'ZIP code',
        country: 'Country',
        errorMissingEmail: 'The field \'E-Mail\' is required.',
      },
    },
    de: {
      translations: {
        Vienna: 'Wien',
        and: 'und',
        'Invalid Location': 'Ungültiger Ort',
        Clear: 'Zurücksetzen',
      },
      forms: {
        edit: 'Bearbeiten',
        cancel: 'Abbrechen',
        save: 'Speichern',
        addUser: 'Benutzer hinzufügen',
        name: 'Name',
        email: 'E-Mail',
        addresses: 'Adressen',
        address: 'Adresse',
        street: 'Straße',
        city: 'Ort',
        zipCode: 'Postleitzahl',
        country: 'Land',
        errorMissingEmail: 'Es wird eine E-Mail-Adresse benötigt.',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
})

export default i18n
