const useForm = () => {
  const parseErrors = (form: IForm, err: IValidationError) => {
    const schemaErrors = err.inner?.map((err: any) => {
      return { field: err.path, message: err.message };
    })

    const parsedErrors: any = {}
    return Object.keys(form).forEach(field => {
      parsedErrors[field] = schemaErrors?.find((innerObj: any) => (
        innerObj.field === field
      )) || ''
    })
  }

  return {
    parseErrors
  }
}

interface IForm {
  [key: string]: any
}

export default useForm