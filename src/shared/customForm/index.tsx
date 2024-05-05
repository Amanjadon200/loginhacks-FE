/* eslint-disable no-undef */
import React from 'react';
import { Formik } from 'formik';
type errorProps = {
  email?: string;
  password?: string;
};
interface CustomFormProps {
  className: string;
}
console.log('errorProps')
export const CustomForm:React.FC<CustomFormProps> = ({className}) => (
  <div>
    <Formik
      initialValues={{ email: '', password: ''}}
      validate={values => {
        let errors:errorProps  = { email: ''};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if(!errors.email){
          errors={}
          }
          console.log('values',values,errors)
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values',values)
          alert(JSON.stringify(values, null, 2));
     
        // console.log('values',values,errors.email && touched.email && errors.email)
      }}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={`${className}`}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className='border-1 border-black p-2 mb-2'
            />
          <div className="text-red-700">{errors.email && touched.email && errors.email}</div>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className='border-1 border-black p-2 mt-2'
            />
            {isSubmitting}
          {errors.password && touched.password && errors.password}
          <br/>
          <button type="submit" className='text-center p-1  bg-yellow-600 text-white'>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);