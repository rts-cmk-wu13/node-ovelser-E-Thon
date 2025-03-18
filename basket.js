const basket = (function () {
  let items = [];

  return {
    items: items,

    addItem: function (item) {
      items.push(item);
    },
    totalItems: function () {
      return items.length;
    },
    totalPrice: function () {
      // var totalPrice = 0
      // items.forEach(function(item) { totalPrice = totalPrice + item.price})
      // return totalPrice
      let totalPr = items.reduce(function (prev, current) {
        return prev + current.price}, 0);
      return totalPr;
    },
    removeItem: function(itemRemoved) {
        let itemIndex = items.findIndex(function (item) {
            return item.name === itemRemoved})
        items.splice(itemIndex, 1);
    },
  };
})();

module.exports = basket; 