import { TButtonVariant } from '../simple-types'

export interface IButtonProps {
  label: string
  slug: string
  color?: string
  size?: string
  className?: string
  alt?: string
  variant?: TButtonVariant
  onClick?: () => void
}

export interface IBaseNavProps {
  route: typeof ROUTES | string
  linkLabel: string
  testId: string
}
