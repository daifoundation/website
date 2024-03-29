

const theme = {
  breakpoints: [ '40em' ],
  buttons: {
    icon: {
      color: 'muted',
      cursor: 'pointer',
      padding: 0,
      transition: 'color 0.2s',
      ':hover': {
        color: 'accent',
      }
    }
  },
  colors: {
    surface: {
      gray: '#DAD7D1',
      gold: '#FBE38E',
      conch: '#CADAD2',
      lightGray: '#F6F0EB'
    },
    background: "#FFF",
    primary: '#111',
    text: '#333',
    accent: '#000',
    onLightGray: '#494847',
    muted: '#999',
  },
  fonts: {
    body: 'Acumin Pro, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  fontSizes: {
    'xs': 16,
    's': 18,
    'm': 24,
    'l': 33,
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  text: {
    default: {
      fontSize: ['xs', 'm'],
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    heading: {
      fontFamily: 'body',
      lineHeight: 'heading',
      fontWeight: 'body',
      fontSize: 'l',
      mb: ['24px', '28px']
    },
    ethAddress: {
      variant: 'text.default',
      fontSize: '20px',
    },
    logo: {
      fontFamily: 'body',
      fontSize: '26px',
      fontWeight: 'bold',
      color: 'primary',
      whiteSpace: 'nowrap',
    },
    nav: {
      fontSize: 's',
      color: 'text',
      borderColor: 'text',
      ':hover': {
        color: 'accent'
      }
    }
  },
  layout: {
    container: {
      maxWidth: '1208px',
      px: '24px'
    },
    text: {
      maxWidth: '752px',
      margin: '0 24px 0 0',
      paddingTop: '26px'
    }
  },
  styles: {
    root: {
      variant: 'text.default'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 'l',
    },
    h2: {
      fontWeight: 'body',
    },
    h3: {
      fontWeight: 'body',
    },
    h4: {
      fontWeight: 'body',
    },
    h5: {
      fontWeight: 'body',
    },
    a: {
      color: 'text',
      ':hover': {
        color: 'accent'
      }
    }
  }
}


export default theme
