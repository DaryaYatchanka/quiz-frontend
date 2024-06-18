import axios from "axios"

export const api = axios.create({
    baseURL: "http//localhost:9192/api/quizzes"
})

export const createQuestion= async(quizQuestion)=>{
    try {
        const response = await api.post("/create-new/question", quizQuestion)
        return response.data
        
    } catch (error) {
        console.error(error)
    }
}

export const getAllQuestions = async()=>{
    try {
        const response = await api.get("/all-questions")
        return response.data 

    } catch (error) {
        console.error(error)
        return []
    }
    
}

export const fetchQuizForUser = async(number, category)=>{
    try {
        const response = await api.get('/quiz/fetch-questions-for-user?numbOfQuestions=${number}&category=${category}')
        return response.data
    } catch (error) {
        console.error(error)
        return[]
    }
}

export const getCategory = async() =>{
    try {
        const response = await api.get("/subjects")
        return response.data 
    } catch (error) {
        console.error(error) 
    }
}

export const updateQuestion = async(id, question)=>{
    try {
        const response = await api.put('/quiz/${id}/update', question)
        return response.data

    } catch (error) {
        console.error(error)
    }
}

export const getQuestionById = async(id)=>{
    try {
        const response = await api.get('/question/${id}')
        return response.data 
    } catch (error) {
        console.error(error)
    }
}

export const deleteQuestionById = async(id)=>{
    try {
        const response = await api.delete('/question/${id}')
        return response.data
        
    } catch (error) {
        console.error(error)
    }
}