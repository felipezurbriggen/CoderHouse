const productos=[
    {nombre: "1", descripcion: "PROCESADOR AMD", precio: 64200 },
    {nombre: "2", descripcion: "MOTHER MSI", precio: 63700 },
    {nombre: "3", descripcion: "FUENTE GYGABITE 650W",precio: 36800 },
    {nombre: "4", descripcion: "PLACA DE VIDEO ASUS",precio: 180000 },
    {nombre: "5", descripcion: "MEMORIA RAM HYPERX X2",precio: 38000},
    {nombre: "6", descripcion: "GABINETE",precio: 150000 },
    {nombre: "7", descripcion: "SILLA GAMER",precio: 278900 },
    {nombre: "8", descripcion: "MONITOR 144HZ",precio: 190600},
    {nombre: "9", descripcion: "TECLADO MECANICO",precio: 59000},
]

let carrito =[]


let sel= prompt ("¿Desea comprar algun producto SI o NO?");

while(sel != "si" && sel != "no") 
{
    alert("Por favor ingresar SI o NO");
    sel = prompt ("¿Desea comprar algun producto SI o NO?");
}

if(sel == "si")
{
    alert ("Listado de Preductos");
    let todoslosProductos = productos.map((productos)=> `${productos.nombre} ${productos.descripcion}  \$ ${productos.precio}`);
    alert(todoslosProductos.join(" - "));
}
else if(sel == "no")
{
    alert("Gracias por su visita, regrese pronto!!");
}

while(sel != "no")
{
    let producto = prompt ("agraga un producto a tu carrito");
    let precio = 0;

    if(producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6" || producto == "7" || producto == "8" || producto == "9")
    {
    switch (producto) 
    {
        case "1":
            precio= 64200;
            break;
        case "2":
            precio= 63700;
            break;
        case "3":
            precio= 36800;
            break;
        case "4":
            precio= 180000;
            break;
        case "5":
            precio= 38000;
            break;
        case "6":
            precio= 150000;
            break; 
        case "7":
            precio= 278900;
            break;
        case "8":
            precio= 190600;
            break;
        case "9":
            precio= 59000;
            break;
        default:
            break;             
    }
    let unidades = parseInt(prompt("¿Cuantas unidades desea?"));
    carrito.push({producto, unidades, precio})
    console.log(carrito);
    }
    else
    {
        alert ("No contamos con ese producto");
    }
    sel = prompt ("¿Desea continuar comprando?");
    while (sel == "no")
    {
        alert("Gracias por su compra");
        carrito.forEach((carritoFinal) => 
        {
            console.log(`producto: ${carritoFinal.producto}, undades: ${carritoFinal.unidades},
                total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log (`El total a pagar por la compra es: ${total}`);


alert("El total de su compra es:" + total);

