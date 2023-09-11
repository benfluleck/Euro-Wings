import { ref, computed } from 'vue';
import axios from 'axios';

export const useFetch = (url, config = {}) => {
  const data = ref(null);
  const response = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const fetchFlights = async () => {
    isLoading.value = true;
    try {
      const result = await axios.request({
        url,
        ...config
      });

      response.value = result;
      data.value = result.data;
    } catch (ex) {
      error.value = ex;
    } finally {
      isLoading.value = false;
    }
  };
  fetchFlights();

  return { response, error, data, isLoading, fetchFlights };
};
