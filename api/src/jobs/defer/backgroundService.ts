import { defer } from 'src/jobs'
import { characters } from 'src/services/characters/characters'

// the function must be wrapped with `defer()` and exported as default
export default defer(characters as unknown as () => Promise<unknown>)
