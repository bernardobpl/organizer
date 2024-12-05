import DeleteIcon from '@mui/icons-material/Delete'
import {
  Box,
  Checkbox,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { TaskT, UpdateTaskT } from '../../types/task'
import { DeleteTaskPopover } from './delete-task-popover'

export interface TaskListItemProps {
  task: TaskT
  onClick: () => void
  onUpdate: (task: TaskT, updates: UpdateTaskT) => void
  onDelete: (task: TaskT) => void
}

export const TaskListItem = ({
  task,
  onClick,
  onUpdate,
  onDelete,
}: TaskListItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)
  const [deleteAnchorEl, setDeleteAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleTitleUpdate = () => {
    onUpdate(task, { title: editedTitle })
    setIsEditing(false)
  }

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsEditing(true)
    setEditedTitle(task.title)
  }

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setDeleteAnchorEl(e.currentTarget)
  }

  const handleDeleteCancel = () => {
    setDeleteAnchorEl(null)
  }

  const handleDeleteConfirm = () => {
    onDelete(task)
    setDeleteAnchorEl(null)
  }

  return (
    <>
      <Paper
        sx={{
          p: 2,
          cursor: 'pointer',
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Checkbox
            checked={task.completed}
            onClick={(e) => {
              e.stopPropagation()
              onUpdate(task, { completed: !task.completed })
            }}
          />

          {isEditing ? (
            <TextField
              fullWidth
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleTitleUpdate()
                } else if (e.key === 'Escape') {
                  setIsEditing(false)
                }
              }}
              onBlur={handleTitleUpdate}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          ) : (
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'text.secondary' : 'text.primary',
                }}
                onDoubleClick={handleDoubleClick}
              >
                {task.title}
              </Typography>
              {task.description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 0.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {task.description}
                </Typography>
              )}
            </Box>
          )}

          <IconButton
            onClick={handleDeleteClick}
            size="small"
            sx={{
              opacity: 0.3,
              transition: 'all 0.2s',
              '&:hover': {
                opacity: 1,
                color: 'error.main',
              },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>

      <DeleteTaskPopover
        task={task}
        anchorEl={deleteAnchorEl}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </>
  )
}
