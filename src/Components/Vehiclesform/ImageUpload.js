import React from 'react';
import { Button } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';

import styles from './ImageUpload.css';


function ImageUpload() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 3;
    
    

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    

    return (
        <div className="ImageUpload">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                
            
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    <div className="upload__image-wrapper">
                        <Button
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            >
                            Click or Drop here
                        </Button>
                        &nbsp;
                        <Button onClick={onImageRemoveAll}>
                            Remove all images
                        </Button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt=""  width="70" height="" />
                                <div className="image-item__btn-wrapper">
                                <Button className="update-btn" onClick={() => onImageUpdate(index)}>
                                    Update
                                </Button>
                                <Button onClick={() => onImageRemove(index)}>
                                    Remove
                                </Button>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
                </ImageUploading>
        </div>
    );
}

export default ImageUpload;