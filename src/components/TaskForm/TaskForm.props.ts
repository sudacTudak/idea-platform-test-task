import { TaskFormData } from './TaskForm.types';

export interface TaskFormProps {
  formValues?: TaskFormData;
  isTaskOverdue?: boolean;
  isEditable?: boolean;
  editMode?: boolean;
  onSubmit?: (data: TaskFormData) => void;
  onCancelEdit?: () => void;
  className?: string;
}
