
// ============================================================================
// UI & APPEARANCE TYPES
// ============================================================================

declare type TTheme = 'light' | 'dark' | 'auto' | 'custom'

declare type TColorScheme = 'default' | 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'custom'

declare type TAnimation = 'pulse' | 'wave' | 'none'
declare type THoverAnimation = 'scale' | 'glow' | 'lift' | 'none'

declare type TClickAnimation = 'ripple' | 'flash' | 'shake' | 'none'

declare type TAnimationEasing =
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'bounce'
  | 'elastic'
  | 'spring'
  | 'cubic-bezier'

declare type THighlightStyle = 'pulse' | 'glow' | 'border' | 'none'

declare type TIconLibrary = 'lucide' | 'react-icons' | 'custom'

declare type TIconSize = 'sm' | 'md' | 'lg'
declare type TTextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

declare type TBreakpointSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

declare type TViewPort = 'desktop' | 'tablet' | 'mobile'

declare type TCaseStyle = 'camelCase' | 'snake_case' | 'kebab-case'