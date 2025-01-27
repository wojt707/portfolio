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
        className="size-8 cursor-pointer absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        <Moon className="size-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme('light')}
        className="size-8 cursor-pointer rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        <Sun className="size-4" />
      </Button>
    </>
  )
}
export { ModeToggle }
