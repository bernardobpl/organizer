import { Box, Button, TextField } from '@mui/material'
import { useRef } from 'react'

export interface TaskInputProps {
  onAdd: (title: string) => void
}

export const TaskInputAdd = ({ onAdd }: TaskInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAdd = () => {
    const title = inputRef.current?.value.trim()
    if (title) {
      onAdd(title)
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        inputRef={inputRef}
        fullWidth
        placeholder="Add a new task"
        size="small"
        onKeyDown={handleKeyPress}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  )
}
