export const ProjectsSchema = z.object({
  _id: z.string(),
  _creationTime: z.date(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  techStackItems: z.array(z.object({
    name: z.string().min(1, 'Name is required'),
    icon: z.string().optional(),
    description: z.string().optional(),
    packages: z.array(z.string()).optional(),
    websiteLink: z.string().optional(),
  })).min(1, 'At least one tech stack item is required'),
  githubLink: z.url('GitHub link must be a valid URL').optional().or(z.literal('')),
  liveLink: z.url('Live link must be a valid URL').optional().or(z.literal('')),
  screenshots: z.array(z.object({
    imageAlt: z.string().min(1, 'Alt text is required'),
    imageSrc: z.url('Screenshot URL must be valid'),
  })).min(1, 'At least one screenshot is required'),
  type: z.string().min(1, 'Project type is required'),
  category: z.array(z.string()).min(1, 'At least one category is required'),
  date: z.string().min(1, 'Date is required'),
})

export type ProjectData = z.infer<typeof ProjectsSchema>
export const AllProjectsSchema = z.array(ProjectsSchema)
export type AllProjectsData = z.infer<typeof AllProjectsSchema>
