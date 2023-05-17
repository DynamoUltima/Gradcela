import React, { useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid'



const Dropzone = ({setFile}:{setFile:(value: React.SetStateAction<File | undefined>) => void}) => {
  const [selectedfiles, setSelectedFiles] = useState<File[]>([]);
  // const [file, setFile] = useState<File>();

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: string | any[]) => {
    
    if (acceptedFiles?.length) {
      setSelectedFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles

      ])
      setFile(acceptedFiles[0])
    }

    // if (rejectedFiles?.length) {
    //   setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
    // }
  }, [])

  // console.log(file); 

  const { acceptedFiles, getRootProps, getInputProps,fileRejections, } = useDropzone({
    multiple:false,
    onDrop,
    maxFiles:1,
    maxSize: 10 * 1024 * 1024,

   
  });

  const removeFile = (fileToRemove:File) => {
     setSelectedFiles((prevFiles: any[]) => prevFiles.filter((file) => file !== fileToRemove));
   
  };

  const files = selectedfiles.map((file: File) => (
    <li key={file.length}>
      {file.name} - {file.size} bytes
      
      <XMarkIcon className='w-6 h-6' onClick={()=>removeFile(file)} />
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="p-16 mt-10 border border-neutral-200'">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className='flex flex-col justify-center items-center'>
          <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
          <p className='text-sm'>Drag 'n' drop some files here, or click to select files</p>
        </div>

      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
        {/* <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul> */}
      </aside>
    </section>

  );
}

export default Dropzone;