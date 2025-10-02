import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory, getAllCategory, getVideoCategory, getVideoDetailsById, updateCategory } from '../services/allApi';
import VideoCard from './VideoCard';

function Categoty() {
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState("")
    const [categories, setCategories] = useState([])
    const handleClose = () => {
        setShow(false);
        setCategoryName("")
    }
    const handleShow = () => setShow(true);
    const handleAddCategory = async () => {
        if (!categoryName) {
            toast.warning('Please Fill The Category Name')
        }

        else {
            const body = {
                categoryName: categoryName,
                allVideos: []
            }
            const response = await addCategory(body)
            console.log("category res", response);
            if (response.status === 201) {
                toast.success(`${categoryName} successfully Saved`)
            }

            handleClose()
        }
    }
    const getCategories = async () => {
        const response = await getAllCategory()
        console.log("categories123", response);
        const { data } = response;
        setCategories(data)

    }



    useEffect(() => {
        getCategories()
    }, [])

    const deleteCategory = async (id) => {
        await getVideoCategory(id)
        getCategories()
    }
    const dragOver = (e) => {
        e.preventDefault()
        console.log("inside dragOver");

    }
    const videoDrop = async (e, id) => {
        console.log(`dropped inside category${id}`);
        const vId = e.dataTransfer.getData('videoId')
        console.log(`Video with id ${vId} is dropped in Category with Id ${id}`);
        const result = await getVideoDetailsById(vId)
        console.log(result);
        const { data } = result
        let selectedCategory = categories?.find((item => item.id == id));
        console.log("Selected Category", selectedCategory);
        selectedCategory.allVideos.push(data)
        console.log("final category", selectedCategory);
        const result_new = await updateCategory(id, selectedCategory)
        




    }

    return (
        <>
            <div>
                <button className='btn btn-warning' onClick={handleShow}>ADD NEW CATEGORY</button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    data-bs-theme='dark'
                >
                    <Modal.Header closeButton >
                        <Modal.Title className='text-style'><i className='fa-solid fa-list text-warning me-3 '></i>ADD NEW CATEGORY</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <p className='text-style fw-bolder'>PLEASE FILL THE FORM</p>
                        <Form className='border border-secondary p-3 rounded'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="CATEGORY NAME"
                                    onChange={(e) => setCategoryName(e.target.value)} />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            CANCEL
                        </Button>
                        <Button variant="primary" onClick={handleAddCategory}>ADD</Button>
                    </Modal.Footer>
                </Modal>

                {
                    categories?.map(item => (
                        <div className=" border border-secondary rounded p-3 m-3" droppable
                            onDragOver={(e) => dragOver(e)}
                            onDrop={(e) => videoDrop(e, item.id)}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 >{item.categoryName}</h6>
                                <button className='btn btn-danger' onClick={() => deleteCategory(item.id)}><i className='fa-solid fa-trash'></i></button>
                            </div>
                            {
                                item.allVideos?.length > 0 ?
                                    item.allVideos.map((video) => (
                                        <div className='d-grid'>
                                            <img src={video.thumbnailUrl} alt="" height={'200px'} width={"100%"} className='mt-2 '/>
                                        </div>

                                    )) :
                                    <p>No Data Found</p>
                            }

                        </div>
                    ))

                }



            </div>
        </>
    )
}

export default Categoty