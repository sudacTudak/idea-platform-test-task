import styles from './TaskForm.module.scss';
import cn from 'classnames';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskFormSchema } from './TaskForm.schema';
import { TextField } from '../TextField/TextField';
import { TaskFormProps } from './TaskForm.props';
import { TaskFormData } from './TaskForm.types';

import { ReactComponent as EditIcon } from './../../assets/icons/edit.svg';
import { ReactComponent as CheckIcon } from './../../assets/icons/check.svg';
import { ReactComponent as CrossIcon } from './../../assets/icons/cross.svg';
import { IconButton } from '../IconButton/IconButton';

const INITIAL_DEFAULT_VALUES: TaskFormData = {
  endDay: '',
  startDay: '',
  text: ''
};

export const TaskForm: React.FC<TaskFormProps> = ({
  formValues,
  isEditable = false,
  editMode = false,
  isTaskOverdue,
  onSubmit,
  onCancelEdit,
  className
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(editMode);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus
  } = useForm<TaskFormData>({
    defaultValues: formValues ?? INITIAL_DEFAULT_VALUES,
    mode: 'onSubmit',
    disabled: !isEditable || !onSubmit || !isEditMode,
    resolver: yupResolver(taskFormSchema)
  });

  useEffect(() => {
    if (isEditMode) {
      setFocus('startDay');
    }
  }, [isEditMode]);

  const handleEditBtnClick = () => setIsEditMode(true);
  const handleCancelBtnClick = () => {
    onCancelEdit && onCancelEdit();
    setIsEditMode(false);
    reset();
  };

  const onFormSubmit = (data: TaskFormData) => {
    console.log('onFormSubmit data: ', data);
    onSubmit && onSubmit(data);
    setIsEditMode(false);
    reset();
  };

  return (
    <>
      <form className={cn(styles['info-form'], className)}>
        <label className={styles['field']}>
          <div className={styles['field-body']}>
            <span className={styles['label']}>Начало:</span>
            <TextField
              disabled={!isEditMode}
              className={styles['value']}
              {...register('startDay', { disabled: !isEditMode })}
            />
          </div>
          {errors.startDay && (
            <p className={styles['error']}>{errors.startDay.message}</p>
          )}
        </label>
        <label
          className={cn(styles['field'], {
            [styles['overdue']]: isTaskOverdue && !isEditMode
          })}
        >
          <div className={styles['field-body']}>
            <span className={styles['label']}>Окончание:</span>
            <TextField
              disabled={!isEditMode}
              className={styles['value']}
              {...register('endDay', { disabled: !isEditMode })}
            />
          </div>
          {errors.endDay && (
            <p className={styles['error']}>{errors.endDay.message}</p>
          )}
        </label>
        <label className={styles['field']}>
          <div className={styles['field-body']}>
            <span className={styles['label']}>Описание:</span>
            <TextField
              disabled={!isEditMode}
              className={styles['value']}
              {...register('text', { disabled: !isEditMode })}
            />
          </div>
          {errors.text && (
            <p className={styles['error']}>{errors.text.message}</p>
          )}
        </label>
      </form>
      {isEditable && (
        <div className={styles['actions']}>
          {!isEditMode && (
            <IconButton icon={EditIcon} onClick={handleEditBtnClick} />
          )}
          {isEditMode && (
            <>
              <IconButton
                icon={CrossIcon}
                appearance="secondary"
                onClick={handleCancelBtnClick}
              />
              <IconButton
                type="submit"
                onClick={handleSubmit(onFormSubmit)}
                icon={CheckIcon}
                appearance="primary"
              />
            </>
          )}
        </div>
      )}
    </>
  );
};
