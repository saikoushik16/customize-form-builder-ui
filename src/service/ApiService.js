import axios from 'axios';

const FORM_API_BASE_URL = 'http://axilweb-assignment.do/api/forms';

class ApiService {

    fetchForms() {
        return axios.get(FORM_API_BASE_URL);
    }

    fetchFormById(formId) {
        return axios.get(FORM_API_BASE_URL + '/' + formId);
    }

    deleteForm(formId) {
        return axios.delete(FORM_API_BASE_URL + '/' + formId);
    }

    addForm(form) {
        return axios.post(""+FORM_API_BASE_URL, form);
    }

    editForm(form) {
        return axios.put(FORM_API_BASE_URL + '/' + form.id, form);
    }

}

export default new ApiService();