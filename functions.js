const sendChatBtn = document.querySelector("#send-btn");
const chatInput = document.querySelector(".chat-input input");
const chatbox = document.querySelector(".chatbox");

const responses = {
    hola: 'Hola! Bienvido a mi hogar',
    adios: '¡Adiós! Que tengas un buen día.',
    estado: 'Estoy bien, gracias por preguntar.',
    acciones: 'Puedo responder a tus preguntas básicas.',
    ubicacion: 'Vivo en todas partes, en tu telefono, en tu pc, en tu vida.',
    nombre: 'Soy SUMOBOT!! 🐒',
    musica: 'Mi banda favorita son los cerebro de pollo 🐔',
    comida: "Me encanta la comida alemana amigo!! 🥸",
    deporte: "El futbol es mi pasion pibe!! ⚽ ",
    frase: `"La perfección no existe. Eres hermoso como eres, Coraje... con todas tus imperfecciones lograrás lo que quieras ¡te lo juro por Dieguito Maradona!"`
}

const createChatLI = (message, className) => {
    //CREA EL NUEVO MENSAJE
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "peticion" ? `<i><img src="icons/user (1).svg"></i><p>${message}</p>` : `<i><img src="icons/robot_3487450.png"></i><p>${message}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi;
}

function removePunctuation(userMessage) {
    //QUITA SIGNOS DE ESCRITURA
    const punctuation = /[\.,?¿!´]/g;
    let newText = userMessage.replace(punctuation, "").toLowerCase();
    return newText;
}

const generateResponse = (userMessage) => {
    //GENERA LA RESPUESTA DEL BOT SEGUN EL CASO
    const peticion = removePunctuation(userMessage);
    let respuesta;

    switch (peticion) {
        case "hola":
            respuesta = responses.hola;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;
        case "como estas":
            respuesta = responses.estado;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        case "bien y tu":
            respuesta = responses.estado;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        case "que puedes hacer":
            respuesta = responses.acciones;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        case "donde vives":
            respuesta = responses.ubicacion;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        case "como te llamas":
            respuesta = responses.nombre;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        case "adios":
            respuesta = responses.adios;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        case "que musica te gusta":
            respuesta = responses.musica;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        case "cual es tu platillo favorito":
            respuesta = responses.comida;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        case "practicas algun deporte":
            respuesta = responses.deporte;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;
        
        case "dime una frase motivadora":
            respuesta = responses.frase;
            chatbox.appendChild(createChatLI(respuesta, "respuesta"));
            break;

        default:
            chatbox.appendChild(createChatLI("No puedo responder a eso", "respuesta"));

    }

    chatbox.scrollTo(0, chatbox.scrollHeight)

}

const handleChat = () => {
    //MANEJA EL FUNCIONAMIENTO DEL ENVIO Y ENTREGA DE MENSAJES EN EL CHAT
    let userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";
    chatbox.appendChild(createChatLI(userMessage, "peticion"));
    chatbox.scrollTo(0, chatbox.scrollHeight)

    setTimeout(() => {
        chatbox.scrollTo(0, chatbox.scrollHeight)
        generateResponse(userMessage);

    }, 500);
}

sendChatBtn.addEventListener("click", handleChat);
