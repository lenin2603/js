try {
  var jsonData = [
    {
      "temporaryId": "323c27f1-e2e0-46a6-a77d-4f49b6f24b4a",
      "visibleName": "Teléfono",
      "type": "phone",
      "phoneFieldTitle": "",
      "phoneFieldPlaceholder": "",
      "phoneFieldHelpText": "",
      "userPhone": "",
      "mandatory": false
    },
    {
      "temporaryId": "373e1974-f6e9-4afe-b2f4-165eb3303de9",
      "visibleName": "Correo",
      "type": "email",
      "emailFieldTitle": "",
      "emailPlaceholderText": "",
      "emailHelpText": "",
      "userEmail": "",
      "mandatory": false
    },
    {
      "temporaryId": "756eba56-e24c-4f7f-9dbe-df9b0302e762",
      "visibleName": "Nombre",
      "type": "name",
      "firstField": "",
      "secondField": "",
      "placeHolderFirstField": "",
      "placeHolderSecondField": "",
      "userFirstName": "",
      "userSecondName": "",
      "mandatory": false
    },
    {
      "temporaryId": "5025849c-6a25-48d0-ba36-6dfe7f5c4e4c",
      "visibleName": "Texto",
      "type": "text",
      "textFieldTitle": "",
      "textFieldPlaceholder": "",
      "textFieldCharacterLimit": "",
      "userTextInput": "",
      "mandatory": false
    }
  ];


  // Agregar el código JavaScript que dinámicamente actualiza el formulario aquí
  for (var i = 0; i < jsonData.length; i++) {
    var item = jsonData[i];

    if (item.type == "text") {
      console.log("el texto fue encontrado en la posicion :", i);
    } else if (item.type == "name") {
      console.log("el name fue encontrado en la posicion :", i);
    } else if (item.type == "email") {
      console.log("el Correo fue encontrado en la posicion :", i);
    } else if (item.type == "phone") {
      console.log("el Teléfono fue encontrado en la posicion :", i);
    }

    // mostrar en la consola una lista en la pagina web 
  }
} catch (error) {
  console.error("Se produjo un error:", error);
}
