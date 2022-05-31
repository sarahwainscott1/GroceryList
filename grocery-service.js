class GroceryService  {
    constructor(){
        this.baseurl ="http://localhost:5011/api/groceryitems"
    }
    list() {
        return $.getJSON(`${this.baseurl}`);
    }

    remove() {
        
    }
}