// Tag filter for the calculator, disease, and journal tables.
// Each <tr> in the table body carries its tags in data-tags, separated by "|".
(function () {
  var select = document.querySelector("[data-tag-filter]");
  var table = document.querySelector(".link-table");
  if (!select || !table) return;

  var rows = Array.prototype.slice.call(table.tBodies[0].rows);
  var empty = document.querySelector(".no-results");

  function apply() {
    var tag = select.value;
    var shown = 0;
    rows.forEach(function (row) {
      var tags = (row.getAttribute("data-tags") || "").split("|");
      var match = !tag || tags.indexOf(tag) !== -1;
      row.hidden = !match;
      if (match) {
        row.classList.toggle("tint", shown % 2 === 0);
        shown++;
      }
    });
    if (empty) empty.hidden = shown !== 0;
  }

  select.addEventListener("change", apply);
  apply();
})();
