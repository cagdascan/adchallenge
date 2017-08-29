// convert a flat list to a tree
const makeTree = list => {
  const newList = list.slice(0);

  const dataMap = newList.reduce((map, node) => {
    map[node.ID] = node;
    return map;
  }, {});

  const tree = [];

  newList.forEach((node) => {
    const parent = dataMap[node.parentID];
    if (parent) {
      (parent.children || (parent.children = []))
        .push(node);
    } else {
      tree.push(node);
    }
  });

  return tree;
};

// deep find and update in nested array of objects
const deepUpdate = (array, id, key, value) => {
  array.forEach(item => {
    const obj = item;
    if (obj.ID === id) {
      obj[key] = value;
    }
    if (obj.children) {
      deepUpdate(obj.children, id, key, value);
    }
  });
};

// deep find and delete tree branch
const prune = (array, id) => {
  array.forEach((item, idx) => {
    const obj = item;
    if (obj.ID === id) {
      array.splice(idx, 1);
    }
    if (obj.children) {
      prune(obj.children, id);
    }
  });
};

export {
  makeTree,
  deepUpdate,
  prune
};
