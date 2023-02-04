import * as yup from 'yup';

let schema = yup.object().shape({
    firstName :yup.string().required(),
    lastName:yup.string().required(),
    fatherName:yup.string().required(),
    birthCertificateCode:yup.number().required().positive().integer(),
    nationalCode:yup.number().required().positive().integer(),
    birtDate:yup.date().required(),
    Nationality:yup.string().required(),
    birthplace:yup.date().required(),
    maritalStatus:yup.string().required(),
    studyStatus:yup.string().required(),
    lastDegree:yup.string().required(),
    militaryServiceStatus:yup.string().required(),
    workStatus:yup.string().required(),
    workType:yup.string().required(),
    healthStatus:yup.string().required(),
    postalCode:yup.number().required().positive().integer(),
    phone:yup.number().required().positive().integer(),
    prefix:yup.number().required().positive().integer(),
    mobilePhoneNumber:yup.number().required().positive().integer(),
    homeAddress:yup.string().required(),
});
export default schema
