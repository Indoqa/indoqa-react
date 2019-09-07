import {UIETheme} from '../uietheme/UIETheme'

export const scrollbarStyles = (theme: UIETheme) => ({
  // Chrome
  '&::-webkit-scrollbar-thumb': {
    background: theme.colors.bgScrollbarThumb,
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.colors.bgScrollbarThumbHover,
  },
  '&::-webkit-scrollbar-track': {
    background: theme.colors.bgScrollbarTrack,
  },
  '&::-webkit-scrollbar-track:hover': {
    background: theme.colors.bgScrollbarTrackHover,
  },
  '&::-webkit-scrollbar': {
    width: 8,
  },
  // Firefox
  'scrollbar-color': `${theme.colors.bgScrollbarTrack} ${theme.colors.bgScrollbarThumb}`,
  'scrollbar-width': 'thin',
})
