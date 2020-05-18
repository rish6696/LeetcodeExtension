function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch, spx, spy;
  table = document.getElementsByClassName('table table__XKyc')
  switching = true;

  while (switching) {

    switching = false;
    rows = table[0].rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[4];
      y = rows[i + 1].getElementsByTagName("TD")[4];
      spx = x.querySelector.innerHTML;
      spy = x.querySelector.innerHTML;

      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


chrome.runtime.onMessage.addListener((response) => {
  sortTable()
})