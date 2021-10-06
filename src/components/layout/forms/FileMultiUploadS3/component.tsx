import { FunctionComponent, useState, ReactNode } from 'react';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faFile } from '@fortawesome/free-solid-svg-icons';

import { Props, NativeFile } from './index';
import FileUpload from 'models/FileUpload';
import { ActionResponse } from 'types/redux/ActionResponse';
import { API_RESOURCE_FILE_UPLOAD } from 'consts/apiResources';

import StyledComponent from './styles';
import InputWrapper from 'components/layout/forms/InputWrapper';
import Spinner from 'components/layout/Spinner';

const LayoutFormsFileMultiUploadS3: FunctionComponent<Props> = ({ formik, name, label, helper, disabled, value, onChange, style, styles, accept, onPresign }) => {
    const [loading, setLoading]: [boolean, Function] = useState(false);
    const [progress, setProgress]: [number, Function] = useState(0);
    const [uploadError, setUploadError]: [boolean, Function] = useState(false);

    const error = formik?.errors[name]?.toString();

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        multiple: true,
        onDrop: async (acceptedFiles: NativeFile[]) => {
            if(!Array.isArray(acceptedFiles)) {
                return;
            }

            setProgress(0);
            setLoading(true);
            setUploadError(false);

            try {
                for (const acceptedFileIndex in acceptedFiles) {
                    if(acceptedFiles[acceptedFileIndex]) {
                        const acceptedFile = acceptedFiles[acceptedFileIndex];
                        const fileUpload = await presign(acceptedFile);
                        await uploadToS3(acceptedFile, fileUpload);

                        value.push(fileUpload);
                        onChange(value);
                    }
                }
            } catch (exception: any) {
                console.error(exception);
                setUploadError(true)
            }

            setProgress(0);
            setLoading(false);
        },
    });

    const onRemoveElement = (file: FileUpload) => {
        onChange(value.filter(nextValueElem => nextValueElem.id !== file.id));
    }

    const presign = async (file: NativeFile): Promise<FileUpload> => onPresign(file)
        .then((response: ActionResponse) => new FileUpload(response.payload.data[API_RESOURCE_FILE_UPLOAD]))
        .catch((exception: any) => {
            console.error(exception);
            throw error;
        })

    const uploadToS3 = async (file: NativeFile, fileUpload: FileUpload): Promise<FileUpload> => {
        return new Promise((resolve, reject) => {
            try {
                setProgress(0);

                const data = new FormData();
                data.append('file', file);

                const req = new XMLHttpRequest();
                req.open('PUT', fileUpload.putUrl);
                req.setRequestHeader('Access-Control-Allow-Origin', '*');
                req.setRequestHeader('Content-Disposition', `inline; filename="${fileUpload.fileName}"`);
                req.setRequestHeader('Cache-Control', 'max-age=86400, public');
                req.setRequestHeader('Pragma', 'public');
                req.setRequestHeader('Content-Type', fileUpload.mimeType);
                req.upload.addEventListener('progress', (event: ProgressEvent<XMLHttpRequestEventTarget>) => {
                    setProgress(Math.round(event.loaded / event.total * 100));
                });
                req.addEventListener('load', (event: ProgressEvent<XMLHttpRequestEventTarget>) => {
                    setProgress(100);
                    resolve(fileUpload);
                });
                req.send(file);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    const getElementImage = (file: FileUpload): ReactNode => {
        if(file.mimeType.includes('image')) {
            return (<img src={file.imageUrl} />);
        }

        return (<FontAwesomeIcon icon={faFile} className="file-icon" />)
    }

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-file-multi-upload-s3',
                [`style-${style}`],
                {
                    error: Boolean(error),
                    disabled,
                }
            )}
            style={styles}
        >
            <InputWrapper
                name={name}
                label={label}
                helper={helper}
                error={error}
            >
                {!disabled && (
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <div className="dropzone-value">
                            {loading && (
                                <Spinner
                                    text={`Progress: ${progress}%`}
                                />
                            )}
                            <p className="dropzone-placeholder">
                                {uploadError
                                    ? 'Wystąpił błąd wysyłania. Spróbuj ponownie'
                                    : loading
                                        ? ''
                                        : 'Kliknij lub przeciągnij pliki w obszar'
                                }
                            </p>
                        </div>
                    </div>
                )}
                <div className="dropzone-list">
                    {value.map(valueElem => (
                        <div
                            className="dropzone-list-element"
                            key={valueElem.id}
                        >
                            <a
                                className="dropzone-list-element-image"
                                href={valueElem.imageUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {getElementImage(valueElem)}
                            </a>
                            <div className="dropzone-list-element-name">
                                {valueElem.originalName}
                            </div>
                            {!disabled && (
                                <div className="dropzone-list-element-controls">
                                    <a
                                        key={valueElem.id}
                                        className="dropzone-list-element-control"
                                        onClick={() => onRemoveElement(valueElem)}
                                    >
                                        <span className="dropzone-list-element-control-label">
                                            Usuń
                                        </span>
                                        <div className="dropzone-list-element-control-icon">
                                            <FontAwesomeIcon icon={faTimesCircle} className="clear-icon" />
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsFileMultiUploadS3;