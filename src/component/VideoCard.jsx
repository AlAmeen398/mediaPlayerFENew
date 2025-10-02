import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';


function VideoCard({ displayVideo, setDeleteVideoStatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true)
        const { caption, embededLink } = displayVideo
        const today = new Date();
        // console.log(today)
        const year = today.getFullYear()
        const month = today.getMonth();
        const day = today.getDate();
        // console.log(year, month, day)
        const hour = today.getHours();
        const minutes = String(today.getMinutes()).padStart(2, '0')
        const timeValue = day + "-" + (month + 1) + "-" + year + ":" + minutes
        console.log(timeValue)
        const history = {
            caption: caption,
            embededLink: embededLink,
            timeStamp: timeValue
        }
        await addToHistory(history)
    };

    const removeVideo = async (id) => {
        const response = await deleteVideo(id)
        console.log("delete response", response);
        if (response.status === 200) {
            setDeleteVideoStatus(response)
            toast.success("video deleted successfully")
        }

    }
    const dragStarted = (e, id) => {
        console.log(`Video With ${id} started dragging`);
        e.dataTransfer.setData("videoId", id)

    }

    return (
        <>
            <Card style={{ width: '16rem' }} className='m-3' draggable onDragStart={(e) => dragStarted(e, displayVideo.id)}>

                <Card.Img variant="top" src={displayVideo.thumbnailUrl} height={'200px'} onClick={handleShow} />


                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{displayVideo.caption.slice(0, 12)}</Card.Title>
                        <Button variant="danger" onClick={() => removeVideo(displayVideo.id)}><i className='fa-solid fa-trash'></i></Button>
                    </div>

                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} animation={false} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>{displayVideo.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body><iframe width="100%" height="400" src={displayVideo.embededLink}></iframe></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    )
}

export default VideoCard