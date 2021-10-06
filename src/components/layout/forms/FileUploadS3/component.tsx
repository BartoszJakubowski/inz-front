import { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Props, NativeFile } from './index';
import FileUpload from 'models/FileUpload';
import { ActionResponse } from 'types/redux/ActionResponse';
import { API_RESOURCE_FILE_UPLOAD } from 'consts/apiResources';

import StyledComponent from './styles';
import InputWrapper from 'components/layout/forms/InputWrapper';
import Spinner from 'components/layout/Spinner';

const LayoutFormsFileUploadS3: FunctionComponent<Props> = ({ formik, name, label, helper, value, onChange, style, styles, disabled, accept, onPresign }) => {
    const [loading, setLoading]: [boolean, Function] = useState(false);
    const [progress, setProgress]: [number, Function] = useState(0);
    const [uploadError, setUploadError]: [boolean, Function] = useState(false);

    const error = formik?.errors[name]?.toString();

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        multiple: false,
        onDrop: async (acceptedFiles: NativeFile[]) => {
            if(Array.isArray(acceptedFiles) && acceptedFiles.length > 0) {
                setLoading(true);
                try {
                    const file = acceptedFiles[0];
                    const fileUpload = await presign(file);
                    await uploadToS3(file, fileUpload);

                    setUploadError(false);
                    onChange(fileUpload);
                } catch (exception: any) {
                    console.error(exception);
                    setUploadError(true)
                }


                setProgress(0);
                setLoading(false);
            }
        },
    });

    const presign = async (file: NativeFile): Promise<FileUpload> => {
        return onPresign(file)
            .then((response: ActionResponse) => {
                return new FileUpload(response.payload.data[API_RESOURCE_FILE_UPLOAD]);
            })
            .catch((exception: any) => {
                console.error(exception);
                throw error;
            });
    }

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

    return (
        <StyledComponent
            className={classnames(
                'layout-forms-file-upload-s3',
                [`style-${style}`],
                {
                    'error': Boolean(error),
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
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className="dropzone-value">
                        {loading && (
                            <Spinner
                                text={`Progress: ${progress}%`}
                            />
                        )}
                        {value
                            ? (
                                <img
                                    src={value.imageUrl}
                                />
                            )
                            : (
                                <p className="dropzone-placeholder">
                                    {uploadError
                                        ?  'Wystąpił błąd wysyłania. Spróbuj ponownie'
                                        : loading
                                            ? ''
                                            : 'Kliknij lub przeciągnij pliki w obszar'
                                    }
                                </p>
                            )
                        }
                    </div>
                    <div className="dropzone-controls">
                        {value && (
                            <a
                                className="dropzone-control"
                                onClick={() => onChange(null)}
                            >
                                <span className="dropzone-control-label">
                                    Usuń
                                </span>
                                <div className="dropzone-control-icon">
                                    <FontAwesomeIcon icon={faTimesCircle} className="clear-icon" />
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </InputWrapper>
        </StyledComponent>
    );
};

export default LayoutFormsFileUploadS3;