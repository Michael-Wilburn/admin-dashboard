import {useCallback,useState} from 'react'
import { Pane, FileUploader, FileCard } from 'evergreen-ui'

export default function FileUploader() {
  const [files, setFiles] = useState([])
  const [fileRejections, setFileRejections] = useState([])
  const handleChange = useCallback((files) => setFiles([files[0]]), [])
  const handleRejected = useCallback((fileRejections) => setFileRejections([fileRejections[0]]), [])
  const handleRemove = useCallback(() => {
    setFiles([])
    setFileRejections([])
  }, [])
  return (
    <Pane maxWidth={654}>
      <FileUploader
        label="Upload File"
        description="You can upload 1 file. File can be up to 50 MB."
        maxSizeInBytes={50 * 1024 ** 2}
        maxFiles={1}
        onChange={handleChange}
        onRejected={handleRejected}
        renderFile={(file) => {
          const { name, size, type } = file
          const fileRejection = fileRejections.find((fileRejection) => fileRejection.file === file)
          const { message } = fileRejection || {}
          return (
            <FileCard
              key={name}
              isInvalid={fileRejection != null}
              name={name}
              onRemove={handleRemove}
              sizeInBytes={size}
              type={type}
              validationMessage={message}
            />
          )
        }}
        values={files}
      />
    </Pane>
  )
}

