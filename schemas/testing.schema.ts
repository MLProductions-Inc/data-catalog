import z from "zod"

export const TestCaseSchema = z.object({
  testcaseId: z.string(),
  title: z.string(),
  description: z.optional(z.string()),
  domain: z.string(),
  priority: z.string(),
  status: z.string(),
  testType: z.string(),
  isAutomated: z.boolean(),
  automationTool: z.optional(z.string()),
  expectedResult: z.optional(z.string()),
  preconditions: z.optional(z.string()),
  steps: z.optional(z.array(z.string())),
  createdBy: z.optional(z.string()),
  tags: z.optional(z.array(z.string())),
  lastExecuted: z.optional(z.string()),
})

export const TestCasesSchema = z.array(TestCaseSchema)

export type ZTestCaseType = z.infer<typeof TestCaseSchema>
export type ZTestCasesType = z.infer<typeof TestCasesSchema>

export const TestCasesSummarySchema = z.object({
  total: z.number(),
  automated: z.number(),
  manual: z.number(),
  automationPercentage: z.string(),
  byDomain: z.record(z.string(), z.number()),
  byStatus: z.record(z.string(), z.number()),
  byPriority: z.record(z.string(), z.number()),
  byTestType: z.record(z.string(), z.number()),
})

export type ZTestCasesSummaryType = z.infer<typeof TestCasesSummarySchema>
