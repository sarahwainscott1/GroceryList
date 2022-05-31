$().ready(() => {
    console.log("Hello");
    let grocerySvc = new GroceryService;
    grocerySvc.list().done((res) => {
        console.debug(res);
        render(res);
    })
})
const render = (groceries) => {
    let tbody = $("#tbody");
    let sum = 0;
    let tax = 1.08;
    let total = 0;
    for(let item of groceries) {
        let tr = $("<tr></tr>");
        tr.append($(`<td>${item.description}</td>`));
        tr.append($(`<td>${item.quantity}</td>`));
        tr.append($(`<td>$${item.price}</td>`));
        tr.append($(`<td>
        <button class="btn btn-primary" href=grocery-detail.html?id=${item.id}">Edit</button></td>`));
        tr.append($(`<td>
        <button class="btn btn-danger" onclick:"remove()">Delete</button></td>`));
        tbody.append(tr);
        sum += item.price;
        total = sum * tax;

    }
    $("#total").text(`$${total.toFixed(2)}`);
}
const remove = () => {
    userSvc.remove(item.id).done((res) => {
        console.log("Item deleted");
        location.href="grocery-list.html";
}
}