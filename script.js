
const svgParts = document.querySelectorAll("#exploded-view [id^='part']");
const listItems = document.querySelectorAll("#parts li");

svgParts.forEach(part => {
  part.addEventListener("click", () => {
    highlightPart(part.id);
  });
});

listItems.forEach(item => {
  item.addEventListener("click", () => {
    highlightPart(item.dataset.id);
  });
});

function highlightPart(partId) {
  svgParts.forEach(part => part.setAttribute("stroke-width", "2"));
  listItems.forEach(item => item.classList.remove("highlight"));

  const selectedPart = document.getElementById(partId);
  const selectedListItem = document.querySelector(`#parts li[data-id='${partId}']`);

  if (selectedPart) selectedPart.setAttribute("stroke-width", "5");
  if (selectedListItem) selectedListItem.classList.add("highlight");
}
