interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  classNames?: string
  ref?: React.Ref<HTMLFormElement>
}

export function Form({ classNames = '', ...props }: FormProps) {
  return (
    <form className={`flex relative max-w-md mx-auto mb-8 ${classNames}`} {...props} />
  )
}