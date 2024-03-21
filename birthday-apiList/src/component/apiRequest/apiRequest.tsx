
// const optionsObj = null
const apiRequest = async (url = '',optionsObj:any,errmsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) return;
    // if (!response.ok) throw Error('Please reload the app');
  } catch (error:any) {
    errmsg = error.message;
  }finally{
    return errmsg;
  }
}

export default apiRequest;
// http://localhost:3000/birthInput;