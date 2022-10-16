const str_to_obj = (str) => {
    if (typeof str !== "string") return {};
    let obj = {};
    const arr_obj = str.split("&");
    arr_obj.forEach((v) => {
      const args_now = v.split("=");
      obj[args_now[0]] = args_now[1].replace("+", " ");
    });
    return obj;
  };
  
const GetInfoForm = () => {
    const url = window.location.href;
    let args = [];
    try {
      args = url.split("?")[1].replace("#", "");
    } catch {}
    const argsobj = str_to_obj(args);
    return argsobj;
  };
  
export default GetInfoForm;