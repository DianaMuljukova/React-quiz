import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-84cc3.firebaseio.com/'
})