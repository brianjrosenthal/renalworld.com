# renalworld.com

Static HTML version of [renalworld.com](https://www.renalworld.com), rebuilt from the original Wix site so it can be served by GitHub Pages. There is no build step: what is in this folder is what gets served.

## Layout

| Path | Page |
| --- | --- |
| `index.html` | Home |
| `calc/index.html` | Calculators (links to zkidney.com and others) |
| `disease/index.html` | Kidney diseases, linked to PubMed searches |
| `journals/index.html` | Journals, linked to PubMed |
| `nephroquest/index.html` | QA (link to nephroquest.com) |
| `books/index.html` | Books |
| `bio/index.html` | Biography |
| `404.html` | Not-found page |
| `assets/css/style.css` | All styles |
| `assets/js/filter.js` | "Filter by Tags" dropdown on the three table pages |
| `assets/img/` | Images |

Each page lives in its own folder so the URLs match the old site (`/calc`, `/bio`, and so on).

## Preview locally

```sh
python3 -m http.server 8123
```

Then open <http://localhost:8123/>.

## Editing

- The header and navigation are repeated in every page. A change to the menu has to be made in all seven pages and `404.html`.
- To add a calculator, disease, or journal, copy a `<tr>` row in that page's table. Tags go in `data-tags`, separated by `|`; a new tag also needs an `<option>` in the dropdown above the table.
