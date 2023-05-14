const productos = [
    {nombre: "Mousepad Logitech G640", precio: 65, id: 1, img: "./img/Mousepadlogitech.jpg"},
    {nombre: "Mousepad Steelseries QcK Heavy", precio: 65, id: 2, img: "./img/MousepadSteelseries.jpg"},
    {nombre: "Mousepad ZOWIE G-SR-SE", precio: 65, id: 3, img: "./img/MousepadZowieGSRSE.jpg"},
    {nombre: "Mousepad Razer Gigantus V2", precio: 65, id: 4, img: "./img/MousepadRazerGigantusV2.jpg"},
    {nombre: "Mousepad ZOWIE G-SR", precio: 65, id: 5, img: "./img/MousepadZowieGSR.jpg"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}