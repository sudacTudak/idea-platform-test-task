import * as yup from 'yup';

export const taskFormSchema = yup.object({
  startDay: yup
    .string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, {
      message: 'Введите дату в формате дд.мм.гггг'
    })
    .required('Введите дату начала'),
  endDay: yup
    .string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, {
      message: 'Введите дату в формате дд.мм.гггг'
    })
    .required('Введите дату окончания'),
  text: yup.string().required('Введите описание')
});
