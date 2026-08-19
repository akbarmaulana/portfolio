import type { LocalizedText } from './i18n.types'

export interface Profile {
  name: string
  title: string
  location: string
  email: string
  phone: string
  yearsExperience: number
  summary: LocalizedText[]
}

export interface ExperienceProject {
  name: string
  description: LocalizedText
  stack: string
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  current: boolean
  responsibilities: LocalizedText[]
  achievements: LocalizedText[]
  projects?: ExperienceProject[]
}

export interface Project {
  id: string
  name: string
  description: LocalizedText
  stack: string[]
  category: LocalizedText
}

export interface SkillGroup {
  id: string
  label: LocalizedText
  items: string[]
}

export interface EducationItem {
  id: string
  school: string
  degree: LocalizedText
  period: string
  gpa: string
}

export interface NavSection {
  id: string
  fileName: string
  label: string
}
