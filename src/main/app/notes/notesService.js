/**
 * Contains module(notes) services. 
 * A service object implements the user’s interactions with the application. 
 * It contains business logic that describe the connections with your domain objects.
 */

 import Notes from './notesModel.js'

 // Create
 const createNotes = async (title,description) => {
     // Create an user object
     let note = new Notes({
         title: title,
         description: description
     })
    return await note.save()
    
 }
 
 // Read
 const viewNote = async (id)=> {
     const noteData = await Notes.findById(id.toString())
     return noteData
 }
 
 // Read
 const viewAllNotes = async (limit)=> {
     const options = {
         page: 1,
         limit: limit,
         sort:'-createdAt'
       };
     const notesData = await Notes.paginate({},options,(err,result)=>{
         if (err){
             throw new Error(err)
         }
         return result
     })
     return notesData
 }
 
 // Update
 const updateNote =  async(id,notesData)=>{
     console.log(notesData);
     return await Notes.findByIdAndUpdate(id,{$set:notesData})
 }
 
 
 // Delete
 const removeNotes = async (id)=> {
     return await Notes.findByIdAndRemove(id)
 }
 module.exports =  {
     createNotes, 
     viewNote, 
     viewAllNotes, 
     updateNote, 
     removeNotes
};