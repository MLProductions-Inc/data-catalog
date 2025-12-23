import { PRIORITY, SEVERITY } from '../enums/testing
import { TRiskLevel } from '../simple-types/testing.d.ts'

export type TestCaseDataType = {
  testcaseId: string
  filename: string
  testsuite?: string
  title: string
  description?: string
  domain?: string // teamcode? or area of application
  feature: string
  subFeature?: string
  riskLevel: TRiskLevel
  priority?: PRIORITY
  severity?: SEVERITY
  testExecuteType: 'automated' | 'manual' | 'tba'  // default to manual
  testType?: string
  status: 'active' | 'deprecated' | 'wip' | 'needs-update' | 'ignored' | 'archived'
  tags: string[]
  environment?: string[] // e.g., ['staging', 'production']
}
