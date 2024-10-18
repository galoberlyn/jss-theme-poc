import './App.css'
import { createUseStyles, ThemeProvider, useTheme } from 'react-jss'
import { useCustomTheme } from './useCustomTheme'


const useStyles = createUseStyles((theme: any) => {
  return {
    hello: {
      color: theme.color.primary,
    }
  }
});

function App() {

  const { brand, customTheme} = useCustomTheme();
  
  const classes = useStyles({ theme: customTheme});
  
  if (customTheme) {
    return (
      <>
        <ThemeProvider theme={customTheme}>
          <h1 className={classes.hello}>hello</h1>
        </ThemeProvider>
      </>
    )
  }
  
}

export default App
