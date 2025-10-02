import { serverurl } from "./serverUrl";
import { commonApi } from "./commonApi";

// api call for upload video
export const uploadVideo =async(reqBody)=>{
   return  await commonApi('POST',`${serverurl}/videos`, reqBody)
}

// get all videos api call
export const getAllVideos =async()=>{
    return await commonApi('GET', `${serverurl}/videos`,"")
}
//  delete video
 export const deleteVideo= async(id)=>{
    return await commonApi('DELETE',`${serverurl}/videos/${id}`,{})

 }

//  add to history
export const addToHistory= async (data)=>{
   return await commonApi ('POST', `${serverurl}/history`,data)
}

// get all history
export const getHistory = async()=>{
   return await commonApi('GET',`${serverurl}/history`,"")
}
//  delete history
 export const deleteWatchHistory= async(id)=>{
    return await commonApi('DELETE',`${serverurl}/history/${id}`,{})

 }
//  add new category
 export const addCategory= async(data)=>{
   return await commonApi('POST',`${serverurl}/categories`,data)
 }
//  getAllCategory
export const getAllCategory=async()=>{
   return await commonApi('GET',`${serverurl}/categories`,"")
}

// delete Category
export const getVideoCategory=async (data)=>{
   return await commonApi('DELETE',`${serverurl}/categories/${data}`,{})
}

// get Video Details
export const getVideoDetailsById=async(id)=>{
   return await commonApi('GET',`${serverurl}/videos/${id}`,'')
}

// update category
export const updateCategory=async(id, data)=>{
   return await commonApi ('PUT',`${serverurl}/categories/${id}`,data)
}