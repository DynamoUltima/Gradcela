import Navbar from "../../../comps/navbar/navbar";
import { useFormik } from 'formik';
// import * as Yup from "yup";
import moment, { Moment } from 'moment';
// import { DatePicker, Space } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import * as Yup from "yup";
import React, { useState } from 'react';
import TextEditor from "../../../comps/orderComps/textEditor";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";


// const { RangePicker } = DatePicker;

const CreateOrderPage = () => {

  const dateFormat = 'DD/MM/YYYY';


  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date()
});

  


  const formik = useFormik({
    initialValues: {
      projectName: '',
      price: '',
      expertise: '',
      campus: '',
      // city: '',
      // phone: '',
      description: '',
      serviceType: '',
      // duration: {startDate:new Date(),endDate:new Date()}
    },
    validationSchema: Yup.object({
      projectName: Yup.string()
        // .max(15, 'Must be 4 Characters or less')
        .required('Project name is a required field!!'),
      price: Yup.string(),
      expertise: Yup.string(),
      campus: Yup.string(),
      description: Yup.string(),
      serviceType: Yup.string(),
      //  duration: new Yup.ObjectSchema()

    }),
    onSubmit:async (values) => {
      console.log(values);
      console.log('clicked');
      try {
        console.log('clicked');
        console.log(values.projectName)

        const response = await axios.post('https://expeed-admin.vercel.app/api/projects/create', {
                  withCredentials: true,
                  headers: {
                      'Content-Type': 'application/json',
                      // 'Authorization': `Bearer ${token}`
                  },
                  
                  values,

              });


         console.log(response.data)



        // setClients({ firstName: '', lastName: '', email: '', campus: '', city: '', phone: '', });

      } catch (error) {
            
        console.log(error)

      }
    }
  })

  // console.log(formik);


  const handleValueChange = (newValue:any) => {
    console.log("newValue:"+ newValue.startDate);
    //  formik.handleChange(newValue)
    
}

  return (
    <>

      <div className="flex flex-col h-screen  w-screen divide-y divide-black divide-opacity-25  ">
        <Navbar />
        <div className="px-4  flex  flex-col items-center justify-center   first-letter: ">
          <div className="mt-5 md:mt-0 ">
            <form onSubmit={formik.handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                        Project Name
                      </label>
                      <input
                        type="text"
                        name="projectName"

                        id="projectName"
                        autoComplete="off"

                        //value={clients.firstName}
                        // required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={formik.handleChange}
                        value={formik.values.projectName}
                      // onChange={(e) => setClients({...clients, firstName: e.target.value })}
                      // ref= {register('firstName',{required:true})}
                      />
                      {formik.errors.projectName ? <p className='text-red-400 p-2'>{formik.errors.projectName} </p> : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        autoComplete="off"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {formik.errors.price ? <p className='text-red-400 p-2'>{formik.errors.price} </p> : null}
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Expertise
                      </label>
                      <input
                        type="text"
                        name="expertise"
                        id="email"
                        autoComplete="off"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.expertise}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {formik.errors.expertise ? <p className='text-red-400 p-2'>{formik.errors.expertise} </p> : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Campus
                      </label>
                      <select

                        id="campus"
                        onChange={formik.handleChange}
                        value={formik.values.campus}
                        name="campus"
                        required
                        autoComplete="campus-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>University of Ghana Legon</option>
                        <option>KNUST</option>
                        <option>UPSA</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <div className="mt-1 border border-gray-300 rounded-md shadow-sm  hover:border-indigo-500 p-1">
                        <TextEditor />
                      </div>

                      {/* <input
                      
                        type="text"
                        name="description"
                        id="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        required
                        autoComplete="off"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      /> */}
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Duration
                      </label>
                      <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        showShortcuts={true}
                        displayFormat={"DD/MM/YYYY"}
                      />
                      {/* <div className="mt-1 border border-gray-300 rounded-md shadow-sm  hover:border-indigo-500 ">
                        <Space direction="vertical" size={12}>
                          <RangePicker onChange={formik.handleChange} format={dateFormat} 
                          
                          defaultPickerValue={[
                            moment('01/01/2022', dateFormat),
                            moment('02/03/2022', dateFormat),
                          ]}
                           bordered={false}  
                          // value={[
                          //   moment('01/01/2022', dateFormat),
                          //   moment('02/03/2022', dateFormat),
                          // ]}
                          
                          />

                          
                        </Space>
                      </div> */}
                      {/* <input
                        type="text"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        id="city"
                        required
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {formik.errors.city ? <p className='text-red-400 p-2'>{formik.errors.city} </p> : null} */}
                    </div>

                    {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        required
                        // autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {formik.errors.phone ? <p className='text-red-400 p-2'>{formik.errors.phone} </p> : null}
                    </div> */}
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Service Type
                      </label>
                      <select

                        id="serviceType"
                        onChange={formik.handleChange}
                        value={formik.values.serviceType}
                        name="serviceType"
                        required
                        autoComplete="service-type"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Assignment</option>
                        <option>Proposals</option>
                        <option>Thesis</option>
                      </select>
                    </div>

                    {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div> */}
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>


      </div>
    </>

  );
}

export default CreateOrderPage;