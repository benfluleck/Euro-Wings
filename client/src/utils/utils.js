import { ref } from 'vue';
import axios from 'axios';

export const useFetch = (url, config = {}) => {
  const data = ref([]);
  const error = ref(null);
  const isLoading = ref(false);

  const request = async () => {
    isLoading.value = true;
    try {
      const result = await axios.request({
        url,
        ...config
      });
      data.value = result.data;
    } catch (ex) {
      error.value = ex;
    } finally {
      isLoading.value = false;
    }
  };
  request();

  return { error, data, isLoading };
};

export const getTime = (date) => {
  const currentDate = new Date(date);

  return (
    String(currentDate.getHours()).padStart(2, '0') +
    ':' +
    String(currentDate.getMinutes()).padStart(2, '0')
  );
};

export const filterFlights = (data = [], query = {}) => {
  return data.filter((rec) =>
    Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
  );
};
