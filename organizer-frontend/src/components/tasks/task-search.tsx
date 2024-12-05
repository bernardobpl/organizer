import { TextField } from '@mui/material'

export interface TaskSearchProps {
  value: string
  onChange: (value: string) => void
}

export const TaskSearch = ({ value, onChange }: TaskSearchProps) => {
  return (
    <TextField
      fullWidth
      label="Search tasks"
      variant="outlined"
      size='small'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
