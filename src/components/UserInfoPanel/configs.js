import * as Yup from 'yup';

const placeholders = {
  id: '',
  name_en: 'Enter your name',
  last_name_en: 'Enter your last name',
  name_kr: 'Enter your name',
  last_name_kr: 'Enter your last name',
  name_tj: 'Номи худро нависед',
  last_name_tj: 'Насаби худро нависед',
  address: 'Enter your address',
  postal_code: '734000',
  passportID: '02260557',
  email: 'info@xyz.com',
  phone: '+992901020304',
};

const MyInitialValues = {
  name_en: '',
  last_name_en: '',
  name_kr: '',
  last_name_kr: '',
  name_tj: '',
  last_name_tj: '',
  date_of_birth: '',
  address: '',
  gender: '',
  married: '',
  postal_code: '',
  passportID: '',
  email: '',
  phone: '',
  topik: '',
  student_group: '',
  time: '',
  money: '',
  passport_scan: '',
  checklist_scan: '',
  image: '',
};

const MyValidationSchema = Yup.object({
  name_en: Yup.string()
    .matches(/^[A-Za-z]+$/i, {
      message: 'Only English letters are allowed',
      excludeEmptyString: false,
    })
    .min(3, 'Minimum 3 letters')
    .required('Enter your name in English'),
  last_name_en: Yup.string()
    .matches(/^[A-Za-z]+$/i, {
      message: 'Only English letters are allowed',
      excludeEmptyString: false,
    })
    .min(3, 'Minimum 3 letters')
    .required('Enter your last name in English'),
  name_kr: Yup.string().matches(/^[가-힣]+$/i, {
    message: '한글만 가능',
    excludeEmptyString: false,
  }),
  last_name_kr: Yup.string().matches(/^[가-힣]+$/i, {
    message: '한글만 가능',
    excludeEmptyString: false,
  }),
  name_tj: Yup.string()
    .matches(/^(?!.*[ЦцЩщЬьЫы])[\u0400-\u04FF\s]+$/u, {
      message: 'Танҳо ҳарфҳои тоҷикӣ',
      excludeEmptyString: false,
    })
    .min(3, 'На камтар аз 3 ҳарф')
    .required('Номи худро бо забони тоҷикӣ нависед'),
  last_name_tj: Yup.string()
    .matches(/^(?!.*[ЦцЩщЬьЫы])[\u0400-\u04FF\s]+$/u, {
      message: 'Танҳо ҳарфҳои тоҷикӣ',
      excludeEmptyString: false,
    })
    .min(3, 'На камтар аз 3 ҳарф')
    .required('Насаби худро бо забони тоҷикӣ нависед'),
  address: Yup.string()
    .min(3, 'Minimum 3 letters')
    .required('Enter your address in English'),
  postal_code: Yup.string()
    .matches(/^\d{6}$/, {
      message: 'Postal code incorrect',
      excludeEmptyString: false,
    })
    .required('Enter your postal code'),
  passportID: Yup.string()
    .matches(/^\d{8}$/, {
      message: 'Your passport ID is incorrect',
      excludeEmptyString: false,
    })
    .required('Enter your passport ID'),
  email: Yup.string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, {
      message: 'Your email is incorrect',
      excludeEmptyString: false,
    })
    .required('Enter your email'),
  phone: Yup.string()
    .matches(/^(\+992|992|0)?[0-965][0-9]{8}$/, {
      message: 'Your phone number is incorrect',
      excludeEmptyString: false,
    })
    .required('Enter your phone number'),
});

export { MyInitialValues, MyValidationSchema, placeholders };
