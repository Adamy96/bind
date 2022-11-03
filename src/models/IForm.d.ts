type ValidationInnerType = {
  value: any
  path: string
  type: string
  errors: string[]
  params: any
  inner: any[]
  name: string
  message: string
}

interface IValidationError {
  value: any
  errors: string[]
  inner: ValidationInnerType[]
  name: string
  message: string
}