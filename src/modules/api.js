import { urlApi } from "../healper/healper";

export async function sendForm(formData) {
  try {
    const response = await fetch(`${urlApi}/api/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: formData
      }
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}