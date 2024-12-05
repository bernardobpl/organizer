import { Box, Button, Popover, Typography } from '@mui/material'
import { TaskT } from '../../types/task'

export interface DeleteTaskPopoverProps {
  task?: TaskT
  anchorEl: HTMLButtonElement | null
  onClose: () => void
  onConfirm: (task: TaskT) => void
}

export const DeleteTaskPopover = ({
  task,
  anchorEl,
  onClose,
  onConfirm,
}: DeleteTaskPopoverProps) => {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box sx={{ p: 2, maxWidth: 300 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Are you sure you want to delete "{task?.title}"?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button onClick={onClose} size="small">
            Cancel
          </Button>
          <Button
            onClick={() => task && onConfirm(task)}
            variant="contained"
            color="error"
            size="small"
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Popover>
  )
}
