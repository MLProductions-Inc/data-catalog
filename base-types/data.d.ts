import { SM_PLATFORM } from '../enums/enums'

export interface IClientData {
  id: string
  appName: string
  businessName?: string
  description: string
  firstName: string
  lastName: string
  infoEmail: string
  personalEmail: string
  address: AddressType
  domain: string
  socialmedia: SocialMediaType[]
  clientCode: string
  logo: string
  formSubmitId?: string
  gtag?: string
  phone?: string
  tagline?: string
  version: string
}

export type AddressType = {
  _id?: string
  street1: string
  street2?: string
  city: string
  state: string
  postalCode: string
  gmapUrl?: string
}

export type SocialMediaType = {
  _id?: string | number
  platform: SM_PLATFORM | string
  username: string
  url: string
  icon?: any
  abbr?: string
  className?: string
}

export interface IUser extends IAccount {
  _id: string | number
  username?: string
  password?: string
  role: ROLE
  status: STATUS
  clientCode?: string
}

export interface IAccount extends IProfile {
  accountId: string | number
  firstName: string
  middleName?: string
  lastName: string
  prefix?: string
  suffix?: string
  email: string
  secondaryEmail?: string
}

export interface IProfile extends IPublicProfile {
  profileId: string
  title?: string
  address?: AddressType
  socialMedias?: SocialMediaType[]
  mobilePhone?: string
  homePhone?: string

}

export interface IPublicProfile {
  displayName: string
  city: string
  state: string
  avatar?: ImageType | string
  images?: ImageType[] | string[]
  description: string
  userId: IUser['_id'] | string
}

export type ImageType = {
  _id?: string
  imageSrc: string
  imageAlt: string
  width?: number
  height?: number
  isLazyLoaded?: boolean
}
