const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = quantity => {
  let markup = "";

  for (let i = 0; i < quantity; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML;
  }

  return markup;
};

quantitySelector.addEventListener("change", e => {
  const quantity = e.target.value;
  const markup = createMarkup(quantity);

  blocksContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
};

let changed = false;

colorSelector.addEventListener("change", e => {
  const color = e.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items[i];
    const blockNumber = i + 1;
    let colorToApply = "";

    
    if (changed) {
      colorToApply = blockNumber % 2 !== 0 ? color : "#fff";
    } else {
      colorToApply = blockNumber % 2 == 0 ? color : "#fff";  
    }

    colorTheBlock(currentBlock, colorToApply);
  }
});

    // if (changed) {
    //   if (blockNumber % 2 !== 0) {
    //     colorTheBlock(currentBlock, color);
    //   } else {
    //     colorTheBlock(currentBlock, "#fff");
    //   }
    // } else {
    //   if (blockNumber % 2 == 0) {
    //     colorTheBlock(currentBlock, color);
    //   } else {
    //     colorTheBlock(currentBlock, "#fff");
    //   }
    // }
