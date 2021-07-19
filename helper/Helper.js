
const helpers = {
  ToastShow: function (name, style) {
    if (style == 'success') {
      global.toast_reff.show_toast(name, '1');
    } else {
      global.toast_reff.show_toast(name, '0');
    }
  },


  UrlReq: async function (url, method, bodydata) {
    let responce = [];

    var formdata = new FormData();
    formdata.append('data', bodydata);

    console.log('formdata : ',formdata);
    console.log('URL : ','demo.itmanager.co.in/api/' + url);
    console.log('method : ',method);

    try {
      const response = await fetch('http://demo.itmanager.co.in/api/' + url, {
        method: method,
        body: JSON.stringify(bodydata),
      });
      let responseJson = await response.json();

      console.log('Url =>', 'demo.itmanager.co.in/api/' + url);
      console.log('BodyDataJson ==>', JSON.stringify(bodydata));
      console.log('responseJson => ', responseJson);

      responce.push(responseJson);
      return responce[0];
    } catch (err) {
      responce.push(err);
      console.log('error', err);
      return responce[0];
    }
  },
};
export default helpers;