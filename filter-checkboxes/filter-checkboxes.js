window.addEventListener('load', function () {
  var app = new Vue({
    el: '#sandbox',
    data: {
      search: '',
      items: [
        { key: 'apple', value: 'Apple', checked: false },
        { key: 'banana', value: 'Banana', checked: false }
      ]
    },
    computed: {
      filterByValueMatch: function () {
        var search = this.search.toLowerCase();
        return this.items.filter(function (item) {
          var value = item.value.toLowerCase();
          return value.indexOf(search) > -1;
        });
      },
      filteredItems: function () {
        return this.search
          ? this.filterByValueMatch
          : this.items;
      }
    },
    methods: {
      modify: function (item, event) {
        var state = event.target.checked,
            key = event.target.value,
            index = item ? this.items.indexOf(item) : undefined;

        if (item && !isNaN(index)) {
          this.items[index].checked = state;
        }
      }
    }
  })
})
