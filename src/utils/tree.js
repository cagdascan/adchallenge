const makeTree = list => {
  const dataMap = list.reduce((map, node) => {
    map[node.ID] = node;
    return map;
  }, {});

  const tree = [];
  list.forEach((node) => {
    const parent = dataMap[node.parentID];
    if (parent) {
      (parent.children || (parent.children = []))
        .push(node);
    } else {
      tree.push(node);
    }
  });

  console.log(tree);

  return tree;
};

// const sort = list => {
//   const unsorted = list;
//   const sorted = [];

//   if (!sorted.length) {
//     sorted.push(unsorted[0]);
//     unsorted.splice(0, 1);
//   }

//   while (unsorted.length) {
//     const lastEl = sorted[sorted.length - 1];

//     if (unsorted.find((i) => i.parentID === lastEl.ID)) {
//       const el = unsorted.find((i) => i.parentID === lastEl.ID);
//       const index = unsorted.findIndex((i) => i.parentID === lastEl.ID);
//       sorted.push(el);
//       unsorted.splice(index, 1);
//     } else {
//       if ()
//       const el = unsorted[0];
//       sorted.push(el);
//       unsorted.splice(0, 1);
//     }
//   }

//   return sorted;
// };

export { 
  makeTree
}
