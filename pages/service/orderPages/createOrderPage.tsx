import Navbar from "../../../comps/navbar/navbar";
import { useFormik } from 'formik';
import moment, { Moment } from 'moment';
import { ToastContainer, toast } from 'react-toastify';



import * as Yup from "yup";
import React, { useState } from 'react';
import TextEditor from "../../../comps/orderComps/textEditor";
// import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import Datepicker from "react-tailwindcss-datepicker";
import DateRangePicker from "tw-daterange"
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, } from "@/firebase/firebase";
import { v4 } from 'uuid';
import Dropzone from "@/comps/dropzone/dropzone";
import { IProject } from "@/interfaces/interface.projects";
import { useSession } from "next-auth/react";
// import { useSession } from "next-auth/react";

// const { RangePicker } = DatePicker;

// interface IProject {
//   projectName: string;
//   price: string;
//   // expertise: string;
//   // campus: string;
//   description: string;
//   serviceType: string;
//   duration: {
//     startDate: Date;
//     endDate: Date;
//   };
// }

const BASE_URL = "http://localhost:3001"
const BASE_URL_PROD = "https://expeed-admin.vercel.app";


const CreateOrderPage = () => {
  const { data: session ,status} = useSession();
  const dateFormat = 'DD/MM/YYYY';
  // const [file, setFiles] = useState<File>()
  const [file, setFile] = useState<File>();
  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [fileSize,setFileSize] = useState('');
  const [fileType,setFileType] = useState('');


  function generateOrderId(): string {
    const timestamp = Date.now().toString(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generate a random number between 0 and 9999 and pad it with leading zeros if necessary
    const orderId = `${timestamp}-${randomNum}`; // Concatenate the timestamp and random number
  
    return orderId;
  }




  const [durationValue, setValue] = useState({
    startDate: new Date(),
    endDate: new Date()
  });

  





  // uploadBytesResumable



  const handleUploads = () => {

    //setFiles(event.target!.files![0])
    uploadFiles()
  }

  const uploadFiles = () => {
    if (file == null) return
    setName(file.name);
    setFileSize(file.size.toString())
    

    const fileExtension = file.name.split('.').pop();
    const uniqueFileName = v4();
    const fileName = `${uniqueFileName}.${fileExtension}`;

    const fileRef = ref(storage, `files/${fileName}`)

    const uploadTask = uploadBytesResumable(fileRef, file)

    const update={}

    setFileType(fileExtension!)



    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          console.log('File available at', downloadURL);
          console.log({dateType:fileType,link:downloadURL,fileName:name,fileSize:fileSize});
          const response = await axios.put(`${BASE_URL_PROD}/api/projects/${id}`, {
            // withCredentials: true,
            // headers: {
            //   'Content-Type': 'application/json',
            //   // 'Authorization': `Bearer ${token}`
            // },
            
  
            mediaData:[{dateType:fileType,link:downloadURL,fileName:name,fileSize:fileSize}]
            
  
          });
          setFile(undefined)
          setFileSize('')
          setFileType('')
          setName('')
          console.log(response.data);
        });
        
       // alert(`${file.name} uploaded successfully`)
      }
    );
  }


  const formik = useFormik({
    initialValues: {
      projectName: '',
      price: '',
      description: '',
      serviceType: '',
      duration: { startDate: new Date(), endDate: new Date() },
      orderId: '',
      createdBy:session?.user.data._id,
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      projectName: Yup.string()
        // .max(15, 'Must be 4 Characters or less')
        .required('Project name is a required field!!'),
      price: Yup.string().required('required'),
      // expertise: Yup.string(),
      // campus: Yup.string(),
      description: Yup.string(),
      serviceType: Yup.string(),
      //  duration: new Yup.ObjectSchema()

    }),
    onSubmit: async (values: IProject, { resetForm }) => {

      const orderId = generateOrderId();

      values.duration = durationValue;
      values.orderId =orderId;
      console.log(values);
      console.log('orderId');
      


      try {
        console.log('clicked');
        console.log(values)


        const response = await axios.post(`${BASE_URL_PROD}/api/projects/create`, {
          // withCredentials: true,
          // headers: {
          //   'Content-Type': 'application/json',
          //   // 'Authorization': `Bearer ${token}`
          // },

          values

        });
        // handleUploads()


        console.log(response.data)
        if (response.data.project) {
          setId(response.data.project._id);
          uploadFiles();
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          })
          resetForm()

        }


        if (response.data.error) {
          toast.error(response.data.error.message, {
            position: toast.POSITION.TOP_RIGHT,
          })
        }

      } catch (error) {

        console.log(error)



      }
    }
  })



  // console.log(formik);


  const handleValueChange = (newValue: any) => {
    console.log("newValue:" + newValue.startDate);
    console.log("oldValue:" + newValue.endDate);
    //  formik.handleChange(newValue)
    setValue(newValue)

  }

  return (
    <>

      <div className="flex flex-col h-screen  w-screen divide-y divide-black divide-opacity-25  ">
        <Navbar />
        <div className="px-4  flex  flex-col items-center justify-center   first-letter: ">
          <div className="mt-5 md:mt-0 ">
            <div className="text-extrabold p-2"> Project Form</div>
            <form onSubmit={formik.handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                        Project Name
                      </label>
                      <div className="mt-1 p-1 border border-gray-300 rounded-md shadow-sm  hover:border-indigo-500">
                        <input
                          type="text"
                          name="projectName"

                          id="projectName"
                          autoComplete="off"


                          required
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={formik.handleChange}
                          value={formik.values.projectName}

                        />
                      </div>
                      {formik.errors.projectName ? <p className='text-red-400 p-2'>{formik.errors.projectName} </p> : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <div className="mt-1 p-1 border border-gray-300 rounded-md shadow-sm  hover:border-indigo-500">
                        <input
                          type="number"
                          name="price"
                          id="price"
                          autoComplete="off"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.price}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />

                      </div>

                      {formik.errors.price ? <p className='text-red-400 p-2'>{formik.errors.price} </p> : null}
                    </div>

                    {/* <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Expertise
                      </label>
                      <div className="mt-1 border border-gray-300 rounded-md shadow-sm  hover:border-indigo-500">
                        <input
                          type="text"
                          name="expertise"
                          id="expertise"
                          autoComplete="off"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.expertise}
                          className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      {formik.errors.expertise ? <p className='text-red-400 p-2'>{formik.errors.expertise} </p> : null}
                    </div> */}

                    {/* <div className="col-span-6 sm:col-span-3">
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
                    </div> */}

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      {/* <div className="mt-1 border border-gray-300 rounded-md shadow-sm  hover:border-indigo-500 p-1">
                        <TextEditor />
                      </div> */}
                      <div className="mt-1 border border-gray-300 rounded-md shadow-sm  hover:border-indigo-500">
                        <textarea
                          name="description"
                          id="description"
                          cols={40}
                          rows={5}
                          onChange={formik.handleChange}
                          value={formik.values.description}
                          required

                          autoComplete="off"
                          className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2 ">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Duration
                      </label>
                      <div className="mt-1 border border-gray-300 rounded-md shadow-sm  hover:border-indigo-500">
                        <Datepicker

                          value={durationValue}
                          onChange={handleValueChange}
                          showShortcuts={true}
                        // displayFormat={"DD/MM/YYYY"}
                        />
                        {/* <DateRangePicker
                          initialRange={formik.values.duration}
                          onUpdate={formik.handleChange}
                        /> */}
                      </div>


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

                    </div>

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
                        <option>Proposal</option>
                        <option>Thesis</option>
                      </select>
                    </div>

                  </div>
                </div>
                {/* <div>
                  <input
                    type="file"
                    onChange={handleUploads} 
                    className=""
                    />
                </div> */}

                <div className='m-4'>
                  <h1 className=' text-xl font-bold'>Upload Files</h1>
                  <Dropzone setFile={setFile} />
                  
                </div>
                {/* <button onClick={()=>handleUploads} >
                  upload
                </button> */}


                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"

                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2DD4BF] hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2DD4BF]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>


      </div>
      <ToastContainer />
    </>

  );
}

export default CreateOrderPage;