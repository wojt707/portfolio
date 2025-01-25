import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui'
import { useTheme } from '@/components'

const ModeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme('dark')}
        className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme('light')}
        className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button onClick={() => setTheme('light')}>Light</Button>
      <Button onClick={() => setTheme('dark')}>Dark</Button>
      <Button onClick={() => setTheme('system')}>System</Button>
    </>
  )
}
export { ModeToggle }
