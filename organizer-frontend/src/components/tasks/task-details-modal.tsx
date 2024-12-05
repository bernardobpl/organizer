import { Box, Modal, Typography, IconButton, styled, TextField, Button, FormControlLabel, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TaskT, UpdateTaskT } from '../../types/task';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: 500,
  position: 'relative',
  outline: 'none',
}));

const CloseButton = styled(IconButton)({
  position: 'absolute',
  right: 8,
  top: 8,
});

const DetailRow = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const DetailLabel = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: 4,
});

const SaveButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

interface TaskDetailsModalProps {
  task?: TaskT;
  open: boolean;
  onClose: () => void;
  onUpdate: (task: TaskT, updates: UpdateTaskT) => void;
}

export const TaskDetailsModal = ({ task, open, onClose, onUpdate }: TaskDetailsModalProps) => {
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedCompleted, setEditedCompleted] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    if (task) {
      setEditedTitle(task.title);
      setEditedDescription(task.description);
      setEditedCompleted(task.completed);
      setHasChanges(false);
    }
  }, [task]);

  if (!task) return null;

  const formatDate = (date: string | undefined) => {
    if (!date) return 'Not set';
    return format(new Date(date), 'PPpp');
  };

  const handleSave = () => {
    const updates: UpdateTaskT = {};
    if (editedTitle !== task.title) updates.title = editedTitle;
    if (editedDescription !== task.description) updates.description = editedDescription;
    if (editedCompleted !== task.completed) updates.completed = editedCompleted;

    if (Object.keys(updates).length > 0) {
      onUpdate(task, updates);
    }
    handleCloseConfirmed();
  };

  const handleChange = (field: keyof UpdateTaskT, value: string | boolean) => {
    switch (field) {
      case 'title':
        setEditedTitle(value as string);
        break;
      case 'description':
        setEditedDescription(value as string);
        break;
      case 'completed':
        setEditedCompleted(value as boolean);
        break;
    }
    setHasChanges(true);
  };

  const handleCloseAttempt = () => {
    if (hasChanges) {
      setShowConfirmDialog(true);
    } else {
      handleCloseConfirmed();
    }
  };

  const handleCloseConfirmed = () => {
    setShowConfirmDialog(false);
    setHasChanges(false);
    onClose();
  };

  const handleCancelClose = () => {
    setShowConfirmDialog(false);
  };

  return (
    <>
      <StyledModal open={open} onClose={handleCloseAttempt}>
        <ModalContent>
          <CloseButton onClick={handleCloseAttempt}>
            <CloseIcon />
          </CloseButton>

          <Typography variant="h5" component="h2" gutterBottom>
            Task Details
          </Typography>

          <DetailRow>
            <DetailLabel variant="subtitle2">Title</DetailLabel>
            <TextField
              fullWidth
              value={editedTitle}
              onChange={(e) => handleChange('title', e.target.value)}
              size="small"
            />
          </DetailRow>

          <DetailRow>
            <DetailLabel variant="subtitle2">Description</DetailLabel>
            <TextField
              fullWidth
              multiline
              rows={3}
              value={editedDescription}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="No description"
            />
          </DetailRow>

          <DetailRow>
            <FormControlLabel
              control={
                <Checkbox
                  checked={editedCompleted}
                  onChange={(e) => handleChange('completed', e.target.checked)}
                />
              }
              label="Completed"
            />
            <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
              {editedCompleted
                ? task.completedAt
                  ? `Last completed on ${formatDate(task.completedAt)}`
                  : 'Just marked as completed'
                : 'Not completed'}
            </Typography>
          </DetailRow>

          <DetailRow>
            <DetailLabel variant="subtitle2">Created At</DetailLabel>
            <Typography>
              {formatDate(task.createdAt)}
            </Typography>
          </DetailRow>

          <DetailRow>
            <DetailLabel variant="subtitle2">Last Updated</DetailLabel>
            <Typography>
              {formatDate(task.updatedAt)}
            </Typography>
          </DetailRow>

          <SaveButton
            variant="contained"
            fullWidth
            onClick={handleSave}
            disabled={!hasChanges}
          >
            Save Changes
          </SaveButton>
        </ModalContent>
      </StyledModal>

      <Dialog 
        open={showConfirmDialog} 
        onClose={handleCancelClose}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 600,
            p: 3,
          }
        }}
      >
        <DialogTitle sx={{ p: 0, mb: 1, fontSize: '1.2rem', fontWeight: 500 }}>
          Unsaved Changes
        </DialogTitle>
        <DialogContent sx={{ p: 0, mb: 3 }}>
          <Typography color="text.secondary">
            Your changes will be lost if you don't save them.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 0, gap: 1.5, '& .MuiButton-root': { minWidth: 120, fontWeight: 600 } }}>
          <Button 
            onClick={handleCancelClose}
            sx={{ color: 'text.primary' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleCloseConfirmed}
            sx={{ 
              bgcolor: 'action.hover',
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'action.selected'
              }
            }}
          >
            Don't save
          </Button>
          <Button 
            onClick={handleSave}
            variant="contained"
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
