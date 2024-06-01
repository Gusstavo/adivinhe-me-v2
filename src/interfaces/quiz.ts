import { Question } from "./question"

export interface Quiz {
    date: string,
    theme: string
    questions: Question[]
}