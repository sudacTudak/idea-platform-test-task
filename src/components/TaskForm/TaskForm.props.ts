import { TaskFormData } from './TaskForm.types';

export interface TaskFormProps {
  formValues?: TaskFormData;
  isTaskOverdue?: boolean;
  isEditable?: boolean;
  isEditMode?: boolean;
  setIsEditMode?: (value: boolean) => void;
  onSubmit?: (data: TaskFormData) => void;
  onCancelEdit?: () => void;
  className?: string;
}
